"use client";

/**
 * EditorPanel — Rich content editor for the Content Engine app.
 *
 * Template-based draft generator with formatting toolbar.
 * Lives at /engines/create/editor.
 */

import {
  Bold,
  Hash,
  Italic,
  Link2,
  List,
  Save,
  Send,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ContentType = "Post" | "Thread" | "Story" | "Video";

const TEMPLATES: Record<ContentType, string[]> = {
  Post: [
    "Just dropped something big 🔥 [Your main point here]. What do you think?",
    "3 things I learned this week:\n\n1. [Lesson 1]\n2. [Lesson 2]\n3. [Lesson 3]\n\nWhich hits hardest?",
    "Hot take: [Your bold opinion]. Here's why I think that...",
  ],
  Thread: [
    "1/ A thread on [topic] 🧵\n\nHere's everything you need to know:",
    "1/ Most people get [topic] wrong.\n\nHere's the truth:",
    "1/ I studied [topic] for [time]. Here's what I found:",
  ],
  Story: [
    "✨ [Exciting moment or update]\n\nSwipe to see more →",
    "🔥 [Product/achievement] — tap to check it out!",
    "POV: You just [relatable experience] 😂",
  ],
  Video: [
    'HOOK: "[Attention-grabbing statement in first 3 seconds]"\n\nBODY: [Key points with visual cuts]\n\nCTA: [Call to action at the end]',
    'Opening: Show the end result first\nMiddle: "Here\'s how I did it..."\nEnd: "Comment below if you want more like this"',
  ],
};

const CONTENT_TYPES: ContentType[] = ["Post", "Thread", "Story", "Video"];
const DRAFT_STORAGE_KEY = "dreamengin.create.editorDraft";
const QUEUE_STORAGE_KEY = "dreamengin.create.queueItems";

export default function EditorPanel() {
  const [contentType, setContentType] = useState<ContentType>("Post");
  const [draft, setDraft] = useState("");
  const [templateIdx, setTemplateIdx] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [queued, setQueued] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as {
        contentType?: ContentType;
        draft?: string;
      };
      if (parsed.contentType && CONTENT_TYPES.includes(parsed.contentType))
        setContentType(parsed.contentType);
      if (typeof parsed.draft === "string") setDraft(parsed.draft);
    } catch {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      DRAFT_STORAGE_KEY,
      JSON.stringify({ contentType, draft }),
    );
  }, [contentType, draft]);

  function applyTemplate() {
    const templates = TEMPLATES[contentType];
    const template = templates[templateIdx % templates.length];
    setDraft(template);
    setTemplateIdx((i) => i + 1);
  }

  function insertFormat(prefix: string, suffix = "") {
    const ta = textRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = draft.slice(start, end);
    const newText =
      draft.slice(0, start) + prefix + selected + suffix + draft.slice(end);
    setDraft(newText);
  }

  function queueDraft() {
    if (!draft.trim() || overLimit) return;
    const stored = window.localStorage.getItem(QUEUE_STORAGE_KEY);
    const existing = stored ? (JSON.parse(stored) as unknown[]) : [];
    const title =
      draft.trim().split("\n").find(Boolean)?.slice(0, 64) ||
      `${contentType} draft`;
    const item = {
      id: `draft-${Date.now()}`,
      type: contentType,
      title,
      preview: draft.trim().slice(0, 160),
      scheduledAt: null,
      status: "scheduled",
      source: "editor",
      createdAt: new Date().toISOString(),
    };
    window.localStorage.setItem(
      QUEUE_STORAGE_KEY,
      JSON.stringify([item, ...existing]),
    );
    window.dispatchEvent(new CustomEvent("dreamengin:create-queue-updated"));
    setQueued(true);
    setTimeout(() => setQueued(false), 2000);
  }

  async function save() {
    if (!draft.trim()) return;
    setSaving(true);
    try {
      await fetch("/api/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: draft,
          content_type: contentType.toLowerCase(),
        }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  }

  const charCount = draft.length;
  const LIMITS: Record<ContentType, number> = {
    Post: 500,
    Thread: 280,
    Story: 200,
    Video: 2000,
  };
  const limit = LIMITS[contentType];
  const overLimit = charCount > limit;

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-white mb-1">Content Editor</h1>
          <p className="text-sm text-white/50">
            Draft · format · save to queue
          </p>
        </div>

        {/* Content type selector */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10 mb-5">
          {CONTENT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => {
                setContentType(type);
                setDraft("");
                setTemplateIdx(0);
              }}
              className="flex-1 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={
                contentType === type
                  ? { background: "#fb923c22", color: "#fb923c" }
                  : { color: "rgba(255,255,255,0.4)" }
              }
            >
              {type}
            </button>
          ))}
        </div>

        {/* Formatting toolbar */}
        <div className="flex items-center gap-1 p-2 rounded-xl bg-white/[0.04] border border-white/10 mb-3 flex-wrap">
          {[
            { icon: Bold, fn: () => insertFormat("**", "**"), title: "Bold" },
            { icon: Italic, fn: () => insertFormat("_", "_"), title: "Italic" },
            { icon: Hash, fn: () => insertFormat("#"), title: "Heading" },
            {
              icon: Link2,
              fn: () => insertFormat("[", "](url)"),
              title: "Link",
            },
            { icon: List, fn: () => insertFormat("\n- "), title: "List item" },
          ].map(({ icon: Icon, fn, title }) => (
            <button
              key={title}
              onClick={fn}
              title={title}
              className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon size={14} />
            </button>
          ))}
          <div className="ml-auto flex gap-2">
            <button
              onClick={applyTemplate}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xs transition-all"
            >
              <Sparkles size={12} />
              Template
            </button>
          </div>
        </div>

        {/* Editor */}
        <textarea
          ref={textRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Start writing… or use a template ✨"
          rows={12}
          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-white/25 resize-none focus:outline-none focus:border-[#fb923c]/50 font-sans leading-relaxed"
        />

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <span
            className="text-xs"
            style={{ color: overLimit ? "#f87171" : "rgba(255,255,255,0.3)" }}
          >
            {charCount} / {limit}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={queueDraft}
              disabled={!draft.trim() || overLimit}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 text-sm font-bold transition-colors disabled:opacity-40"
            >
              <Send size={13} />
              {queued ? "Queued ✓" : "Add to Queue"}
            </button>
            <button
              onClick={save}
              disabled={!draft.trim() || overLimit || saving}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#fb923c] hover:bg-[#f97316] text-black text-sm font-bold transition-colors disabled:opacity-40"
            >
              <Save size={13} />
              {saving ? "Saving…" : saved ? "Saved ✓" : "Save Draft"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
