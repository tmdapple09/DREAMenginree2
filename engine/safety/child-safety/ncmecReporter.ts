import { createServerClient } from '@/supabase/server/serverClient';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { ChildSafetyResult } from './childSafetyDetector';
import { toErrorMessage } from '@/utils/index';


























export interface NcmecIncidentInput {
  
  reportedUserId: string;
  
  reporterUserId?: string | null;
  
  ruleCode: string;
  
  detectionResult: ChildSafetyResult;
  
  surface: string;
  
  contentRef: string;
  
  contentHash?: string;
  
  clientIp?: string;
}

export interface NcmecReportResult {
  
  incidentId: string;
  
  ncmecSubmitted: boolean;
  
  ncmecReportId?: string;
  
  ncmecError?: string;
}





interface NcmecPayload {
  orgId: string;
  incidentDateTime: string;
  reportType: 'CSAM' | 'APPARENT_CHILD_SEXUAL_EXPLOITATION';
  reportedPerson: {
    platformUserId: string;
    ipAddress?: string;
  };
  contentLocation: {
    url?: string;
    platform: string;
    contentRef: string;
    contentHashSha256?: string;
  };
  additionalInfo?: string;
}





async function writeIncidentToDB(input: NcmecIncidentInput): Promise<string> {
  const supabase = await createServerClient();

  const { data, error } = await (supabase as SupabaseClient)
    .from('child_safety_incidents')
    .insert({
      reported_user_id: input.reportedUserId,
      reporter_user_id: input.reporterUserId ?? null,
      rule_code: input.ruleCode,
      category: input.detectionResult.category,
      severity: input.detectionResult.severity,
      confidence: input.detectionResult.confidence,
      signal_count: input.detectionResult.signal_count,
      surface: input.surface,
      content_ref: input.contentRef,
      content_hash: input.contentHash ?? null,
      client_ip: input.clientIp ?? null,
      status: 'PENDING_REVIEW',
      hash_match: input.detectionResult._audit.hash_match,
    })
    .select('id')
    .single();

  if (error || !data) {
    throw new Error(`[ncmec] Failed to write incident to DB: ${error?.message}`);
  }

  return (data as { id: string }).id;
}





async function submitToNcmec(
  incidentId: string,
  input: NcmecIncidentInput,
): Promise<{ reportId?: string; error?: string }> {
  const apiKey = process.env.NCMEC_API_KEY;
  const orgId = process.env.NCMEC_ORG_ID;
  const apiUrl = process.env.NCMEC_API_URL ?? 'https://api.missingkids.org/cybertip';

  if (!apiKey || !orgId) {
    return { error: 'NCMEC_API_KEY or NCMEC_ORG_ID not configured — manual review required' };
  }

  const reportType: NcmecPayload['reportType'] =
    input.ruleCode === 'C22_CSAM'
      ? 'CSAM'
      : 'APPARENT_CHILD_SEXUAL_EXPLOITATION';

  const payload: NcmecPayload = {
    orgId,
    incidentDateTime: new Date().toISOString(),
    reportType,
    reportedPerson: {
      platformUserId: input.reportedUserId,
      ipAddress: input.clientIp,
    },
    contentLocation: {
      platform: 'DREAMengin',
      contentRef: input.contentRef,
      contentHashSha256: input.contentHash,
    },
    additionalInfo: `Internal incident ID: ${incidentId}. Surface: ${input.surface}.`,
  };

  try {
    const res = await fetch(`${apiUrl}/report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-Org-Id': orgId,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      return { error: `NCMEC API error ${res.status}: ${body}` };
    }

    const json = await res.json().catch(() => null) as { reportId?: string } | null;
    return { reportId: json?.reportId };
  } catch (err: unknown) {
    return { error: `NCMEC network error: ${err instanceof Error ? toErrorMessage(err) : String(err)}` };
  }
}





async function updateIncidentStatus(
  incidentId: string,
  status: string,
  ncmecReportId?: string,
  ncmecError?: string,
): Promise<void> {
  try {
    const supabase = await createServerClient();
    await (supabase as SupabaseClient)
      .from('child_safety_incidents')
      .update({
        status,
        ncmec_report_id: ncmecReportId ?? null,
        ncmec_error: ncmecError ?? null,
        reported_at: new Date().toISOString(),
      })
      .eq('id', incidentId);
  } catch (err: unknown) {
    console.error('[ncmec] Failed to update incident status:', err);
  }
}






export async function reportChildSafetyIncident(
  input: NcmecIncidentInput,
): Promise<NcmecReportResult> {
  let incidentId: string;

  
  try {
    incidentId = await writeIncidentToDB(input);
  } catch (err: unknown) {
    console.error('[ncmec] CRITICAL: failed to write incident to DB', err);
    return {
      incidentId: 'DB_WRITE_FAILED',
      ncmecSubmitted: false,
      ncmecError: err instanceof Error ? toErrorMessage(err) : String(err),
    };
  }

  
  const { reportId, error: ncmecError } = await submitToNcmec(incidentId, input);

  
  const status = ncmecError ? 'NCMEC_SUBMISSION_FAILED' : 'NCMEC_SUBMITTED';
  await updateIncidentStatus(incidentId, status, reportId, ncmecError);

  if (ncmecError) {
    console.warn(`[ncmec] Incident ${incidentId} written to DB but NCMEC submission failed: ${ncmecError}`);
  } else {
    console.info(`[ncmec] Incident ${incidentId} reported to NCMEC (report ID: ${reportId ?? 'N/A'})`);
  }

  return {
    incidentId,
    ncmecSubmitted: !ncmecError,
    ncmecReportId: reportId,
    ncmecError,
  };
}
