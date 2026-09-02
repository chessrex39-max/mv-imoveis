export const button = {
  primary:
    "focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-admin-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:opacity-95 disabled:pointer-events-none disabled:opacity-50",
  secondary:
    "focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-admin-border bg-white px-5 py-2.5 text-sm font-semibold text-admin-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-admin-surface-alt disabled:pointer-events-none disabled:opacity-50",
  ghost:
    "focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-admin-ink-soft transition-colors hover:bg-admin-surface-alt hover:text-admin-ink",
  danger:
    "focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold text-admin-danger transition-colors hover:bg-admin-danger-soft disabled:pointer-events-none disabled:opacity-50",
} as const;

export const card =
  "rounded-2xl border border-admin-border bg-admin-surface shadow-sm";

export const input =
  "focus-ring w-full rounded-lg border border-admin-border bg-white px-3 py-2.5 text-sm text-admin-ink placeholder:text-admin-ink-soft/60 disabled:opacity-40";

export const label = "text-sm font-medium text-admin-ink-soft";

export function badge(tone: "success" | "accent" | "danger" | "neutral") {
  const tones = {
    success: "bg-admin-success-soft text-admin-success",
    accent: "bg-admin-accent-soft text-admin-accent",
    danger: "bg-admin-danger-soft text-admin-danger",
    neutral: "bg-admin-surface-alt text-admin-ink-soft",
  };
  return `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`;
}
