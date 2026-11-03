// Icônes dessinées à la main, même trait partout (1.5px, extrémités arrondies).
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
  </svg>
);
export const ArrowUpRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7m0 0H9m8 0v8" />
  </svg>
);
export const Shield = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
  </svg>
);
export const Key = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 8-8m-3 3 2 2m-4 0 1.5 1.5" />
  </svg>
);
export const Users = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.6.8 2.7 2.6 3 5.2" />
  </svg>
);
export const Refresh = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4" />
  </svg>
);
