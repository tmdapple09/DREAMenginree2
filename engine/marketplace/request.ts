import { MARKETPLACE_CONTACT_TABLE } from './listings';





export type ContactRequestInput = {
  item_id:  string;
  message?: string;
};

export type ContactRequestRecord = {
  item_id:      string;
  requester_id: string;
  seller_id:    string;
  message:      string | null;
  status:       'pending';
};

export type ContactRequestValidationResult = {
  valid:  boolean;
  errors: string[];
};


export const CONTACT_REQUEST_MESSAGE_MAX = 1000;


export function validateContactRequest(body: unknown): ContactRequestValidationResult {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Request body must be a JSON object.'] };
  }

  const b = body as Record<string, unknown>;

  const itemId = String(b.item_id ?? '').trim();
  if (!itemId) {
    errors.push('item_id is required.');
  }

  if (b.message !== undefined && b.message !== null) {
    const msg = String(b.message);
    if (msg.length > CONTACT_REQUEST_MESSAGE_MAX) {
      errors.push(`Message must be ${CONTACT_REQUEST_MESSAGE_MAX} characters or fewer.`);
    }
  }

  return { valid: errors.length === 0, errors };
}


export function buildContactRequestRecord(
  requesterId: string,
  sellerId:    string,
  input:       ContactRequestInput,
): ContactRequestRecord {
  return {
    item_id:      input.item_id,
    requester_id: requesterId,
    seller_id:    sellerId,
    message:      input.message?.trim() || null,
    status:       'pending',
  };
}

export { MARKETPLACE_CONTACT_TABLE };
