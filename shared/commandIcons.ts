export type CommandIcon =
  | "array"
  | "back"
  | "brain"
  | "check"
  | "clear"
  | "close"
  | "decimal"
  | "fraction"
  | "hide"
  | "next"
  | "path"
  | "reset"
  | "restore"
  | "settings"
  | "show"
  | "video"
  | "workbench";

const iconPaths: Record<CommandIcon, string> = {
  array: '<rect x="4" y="5" width="7" height="6" rx="1"/><rect x="13" y="5" width="7" height="6" rx="1"/><rect x="4" y="13" width="7" height="6" rx="1"/><rect x="13" y="13" width="7" height="6" rx="1"/>',
  back: '<path d="M15 18l-6-6 6-6"/>',
  brain: '<path d="M9 4.5A3.5 3.5 0 0 0 5.5 8c0 .6.1 1.1.4 1.6A3.8 3.8 0 0 0 7 17h2"/><path d="M15 4.5A3.5 3.5 0 0 1 18.5 8c0 .6-.1 1.1-.4 1.6A3.8 3.8 0 0 1 17 17h-2"/><path d="M9 4.5V19a3 3 0 0 0 6 0V4.5"/><path d="M7.2 10.5H10"/><path d="M14 10.5h2.8"/><path d="M9 15h6"/>',
  check: '<path d="M5 13l4 4L19 7"/>',
  clear: '<path d="M4 15.5 13.5 6a2.1 2.1 0 0 1 3 0L20 9.5a2.1 2.1 0 0 1 0 3L14.5 18H8l-4-4z"/><path d="M11 18h9"/><path d="M10.5 8.8l4.7 4.7"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  decimal: '<path d="M5 17h14"/><path d="M7 7h.01"/><path d="M12 7h.01"/><path d="M17 7h.01"/><path d="M7 12h.01"/><path d="M12 12h.01"/><path d="M17 12h.01"/>',
  fraction: '<path d="M5 19 19 5"/><path d="M7 7h4"/><path d="M13 17h4"/>',
  hide: '<path d="M3 3l18 18"/><path d="M10.6 10.6A2 2 0 0 0 13.4 13.4"/><path d="M9.9 4.2A10.6 10.6 0 0 1 21 12s-1.4 2.7-4 4.6"/><path d="M6.2 6.2C4.1 7.6 3 12 3 12s3.4 6 9 6c1.2 0 2.3-.2 3.2-.6"/>',
  next: '<path d="M7 6l8 6-8 6V6z"/><path d="M17 6v12"/>',
  path: '<path d="M5 19c2.5-6 11.5.5 14-6"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="13" r="2"/><path d="M12 4v8"/><path d="M8 4h8l-2 2 2 2H8z"/>',
  reset: '<path d="M4 7v5h5"/><path d="M5.5 12A7 7 0 1 0 8 6.7L4 12"/>',
  restore: '<path d="M4 7v5h5"/><path d="M5.5 12A7 7 0 1 0 8 6.7L4 12"/><path d="M12 8v5l3 2"/>',
  settings: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M4.9 4.9 7 7"/><path d="m17 17 2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M4.9 19.1 7 17"/><path d="m17 7 2.1-2.1"/>',
  show: '<path d="M3 12s3.4-6 9-6 9 6 9 6-3.4 6-9 6-9-6-9-6z"/><circle cx="12" cy="12" r="3"/>',
  video: '<rect x="4" y="6" width="12" height="12" rx="2"/><path d="M16 10l4-2v8l-4-2z"/>',
  workbench: '<rect x="4" y="5" width="7" height="6" rx="1"/><rect x="13" y="5" width="7" height="6" rx="1"/><rect x="4" y="13" width="7" height="6" rx="1"/><rect x="13" y="13" width="7" height="6" rx="1"/>'
};

export function commandIconSvg(icon: CommandIcon): string {
  return '<svg viewBox="0 0 24 24" focusable="false">' + iconPaths[icon] + "</svg>";
}
