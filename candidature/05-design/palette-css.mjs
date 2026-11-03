// Transforme une palette (palettes.json) en bloc CSS :root, pour l'aperçu et pour figer le choix.
export function paletteCss(p) {
  return `:root{--bg:${p.bg};--bg-2:${p.bg2};--ink:${p.ink};--ink-2:${p.ink};--muted:${p.muted};--line:color-mix(in srgb,${p.ink} 12%,transparent);--line-2:color-mix(in srgb,${p.ink} 28%,transparent);--accent:${p.accent};--accent-ink:${p.accentInk};--hl:${p.hl};--block:${p.block};--f1:${p.f1};--f2:${p.f2};--f3:${p.f3};--f4:${p.f4};--dot:${p.dot};--hairline-plate:${p.bg};--hairline-edge:${p.ink};--hairline-mid:color-mix(in srgb,${p.ink} 55%,transparent);--hairline-lo:color-mix(in srgb,${p.ink} 16%,transparent);--hairline-hi:${p.accent}}`;
}
