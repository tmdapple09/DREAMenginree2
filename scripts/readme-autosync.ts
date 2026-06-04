import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface SubsectionDescriptor {
  id: string;
  title: string;
  globs: readonly string[];
}

export interface SectionDescriptor {
  id: string;
  title: string;
  globs: readonly string[];
  subsections?: readonly SubsectionDescriptor[];
}

export interface AffectedSection {
  section: SectionDescriptor;
  subsections: Set<string>;
}

export const SECTION_REGISTRY: readonly SectionDescriptor[] = [
  {
    id: 'the-engins',
    title: 'The Engins',
    globs: ['engins/**', 'lib/engins/**', 'app/engines/**', 'app/daydream/**'],
    subsections: [
      { id: 'code-engin', title: 'CodeEngin', globs: ['engins/engin.CodeEngin.tsx', 'lib/engins/code/**', 'app/engines/code/**', 'app/daydream/code/**'] },
      { id: 'branding-engin', title: 'BrandingEngin', globs: ['engins/engin.BrandingEngin.tsx', 'lib/engins/brand/**', 'app/engines/brand/**', 'app/daydream/brand/**'] },
      { id: 'game-engin', title: 'GameEngin', globs: ['engins/engin.GameEngin.tsx', 'lib/engins/game/**', 'lib/gameengin/**', 'components/gameengin/**', 'app/gameengin/**'] },
      { id: 'starmaker-engin', title: 'StarMakerEngin', globs: ['engins/engin.StarMakerEngin.tsx', 'lib/engins/music/**', 'app/engines/music/**', 'components/daydream/starmaker/**'] },
      { id: 'content-engin', title: 'ContentEngin', globs: ['engins/engin.ContentEngin.tsx', 'lib/engins/content/**', 'app/engines/create/**', 'lib/content/**'] },
      { id: 'lab-engin', title: 'LabEngin', globs: ['engins/engin.LabEngin.tsx', 'lib/engins/lab/**', 'app/engines/lab/**', 'app/lab/**'] },
    ],
  },
  {
    id: 'runtime-architecture',
    title: 'Runtime Architecture',
    globs: ['lib/runtime/**', 'lib/engin-runtime/**', 'components/runtime/**', 'app/dreamdmbar/**'],
  },
  {
    id: 'agents-workflow',
    title: 'Agents Workflow',
    globs: ['agents/**', '.github/workflows/**', 'scripts/**'],
  },
  {
    id: 'infra-ops',
    title: 'Infrastructure & Ops',
    globs: ['.github/workflows/**', 'supabase/**', 'Dockerfile*', 'docker-compose.yml', 'package.json', 'pnpm-lock.yaml'],
  },
] as const;

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/').replace(/^\.\//, '');
}

function globToRegExp(glob: string): RegExp {
  const escaped = glob
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '::DOUBLE_STAR::')
    .replace(/\*/g, '[^/]*')
    .replace(/::DOUBLE_STAR::/g, '.*');
  return new RegExp(`^${escaped}$`);
}

function matchesAny(path: string, globs: readonly string[]): boolean {
  const normalized = normalizePath(path);
  return globs.some((glob) => globToRegExp(glob).test(normalized));
}

export function computeAffected(
  changedFiles: readonly string[],
  registry: readonly SectionDescriptor[] = SECTION_REGISTRY,
): Map<string, AffectedSection> {
  const affected = new Map<string, AffectedSection>();
  for (const file of changedFiles) {
    for (const section of registry) {
      const sectionMatches = matchesAny(file, section.globs);
      const matchingSubsections = (section.subsections ?? []).filter((subsection) =>
        matchesAny(file, subsection.globs),
      );
      if (!sectionMatches && matchingSubsections.length === 0) continue;
      const entry = affected.get(section.id) ?? {
        section,
        subsections: new Set<string>(),
      };
      for (const subsection of matchingSubsections) {
        entry.subsections.add(subsection.id);
      }
      affected.set(section.id, entry);
    }
  }
  return affected;
}

function sectionHeading(title: string): string {
  return `## ${title}`;
}

function findHeadingEnd(markdown: string, start: number): number {
  const next = markdown.slice(start + 1).match(/\n##\s+/);
  return next && next.index !== undefined ? start + 1 + next.index : markdown.length;
}

export function replaceSection(
  markdown: string,
  section: SectionDescriptor,
  replacement: string,
): string {
  const heading = sectionHeading(section.title);
  const start = markdown.indexOf(heading);
  const normalizedReplacement = replacement.endsWith('\n') ? replacement : `${replacement}\n`;
  if (start === -1) {
    return `${markdown.trimEnd()}\n\n${normalizedReplacement}`;
  }
  const end = findHeadingEnd(markdown, start);
  return `${markdown.slice(0, start)}${normalizedReplacement}${markdown.slice(end).replace(/^\n+/, '\n')}`;
}

function subsectionHeading(title: string): string {
  return `### ${title}`;
}

export function upsertSubsectionInSection(
  sectionMarkdown: string,
  subsection: SubsectionDescriptor,
  replacement: string,
): string {
  const heading = subsectionHeading(subsection.title);
  const start = sectionMarkdown.indexOf(heading);
  const normalizedReplacement = replacement.endsWith('\n') ? replacement : `${replacement}\n`;
  if (start === -1) {
    return `${sectionMarkdown.trimEnd()}\n\n${normalizedReplacement}`;
  }
  const next = sectionMarkdown.slice(start + 1).match(/\n###\s+/);
  const end = next && next.index !== undefined ? start + 1 + next.index : sectionMarkdown.length;
  return `${sectionMarkdown.slice(0, start)}${normalizedReplacement}${sectionMarkdown.slice(end).replace(/^\n+/, '\n')}`;
}


export interface ReadmeAutosyncSummary {
  changedFiles: string[];
  regeneratedSections: Array<{ id: string; title: string }>;
  regeneratedSubsections: Array<{ sectionId: string; subsectionId: string; title: string }>;
  readmeChanged: boolean;
}

function parseArg(name: string): string | null {
  const index = process.argv.indexOf(name);
  if (index === -1) return null;
  return process.argv[index + 1] ?? null;
}

function readChangedFilesFile(path: string): string[] {
  return readFileSync(path, 'utf8')
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function buildAutosyncSummary(changedFiles: readonly string[]): ReadmeAutosyncSummary {
  const affected = computeAffected(changedFiles);
  return {
    changedFiles: [...changedFiles],
    regeneratedSections: Array.from(affected.values()).map(({ section }) => ({
      id: section.id,
      title: section.title,
    })),
    regeneratedSubsections: Array.from(affected.values()).flatMap(({ section, subsections }) =>
      Array.from(subsections).map((subsectionId) => {
        const subsection = section.subsections?.find((item) => item.id === subsectionId);
        return {
          sectionId: section.id,
          subsectionId,
          title: subsection?.title ?? subsectionId,
        };
      }),
    ),
    readmeChanged: false,
  };
}

function runCli(): void {
  const changedFilesPath = parseArg('--changed-files');
  if (!changedFilesPath) {
    console.error('Missing required argument: --changed-files <path>');
    process.exitCode = 1;
    return;
  }

  const resolvedChangedFiles = resolve(changedFilesPath);
  if (!existsSync(resolvedChangedFiles)) {
    console.error(`Changed files list not found: ${resolvedChangedFiles}`);
    process.exitCode = 1;
    return;
  }

  const changedFiles = readChangedFilesFile(resolvedChangedFiles);
  const summary = buildAutosyncSummary(changedFiles);
  const summaryPath = parseArg('--summary-file');
  if (summaryPath) {
    writeFileSync(resolve(summaryPath), `${JSON.stringify(summary, null, 2)}\n`);
  }

  if (!summaryPath) {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  }
}

if (process.argv[1]?.endsWith('readme-autosync.ts')) {
  runCli();
}
