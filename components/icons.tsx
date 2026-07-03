import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M18 6L6 18M6 6l12 12" /></svg>
);
export const Users = (p: P) => (
  <svg {...base} {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
export const Wallet = (p: P) => (
  <svg {...base} {...p}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>
);
export const Shield = (p: P) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const FileText = (p: P) => (
  <svg {...base} {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
);
export const Calendar = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Handshake = (p: P) => (
  <svg {...base} {...p}><path d="M11 17l2 2a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0 0-1.4L14 9l-2 2" /><path d="M2 12l5-5 3 3" /><path d="M7 14l3 3M9 12l3 3" /><path d="M22 12l-5-5-3 3" /></svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);
export const MapPin = (p: P) => (
  <svg {...base} {...p}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Scale = (p: P) => (
  <svg {...base} {...p}><path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg>
);
export const GraduationCap = (p: P) => (
  <svg {...base} {...p}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" /></svg>
);
export const TrendingUp = (p: P) => (
  <svg {...base} {...p}><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
);
export const Heart = (p: P) => (
  <svg {...base} {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
);
export const Lock = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
export const Layers = (p: P) => (
  <svg {...base} {...p}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
);
export const Building = (p: P) => (
  <svg {...base} {...p}><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></svg>
);
export const Utensils = (p: P) => (
  <svg {...base} {...p}><path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M16 2c-1.7 0-3 2.2-3 5s1.3 5 3 5v10" /></svg>
);
export const Wrench = (p: P) => (
  <svg {...base} {...p}><path d="M14.7 6.3a4 4 0 0 0 5 5L21 12l-9 9-3-3 9-9 1.7-1.7z" /><path d="M9 9L3 3m0 0v4m0-4h4" /></svg>
);
export const HeartPulse = (p: P) => (
  <svg {...base} {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8z" /><path d="M3.5 12h4l1.5-3 2 5 1.5-2h4" /></svg>
);
export const Store = (p: P) => (
  <svg {...base} {...p}><path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M9 20v-6h6v6" /><path d="M3 9h18" /></svg>
);
export const Sparkle = (p: P) => (
  <svg {...base} {...p}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /></svg>
);
export const Presentation = (p: P) => (
  <svg {...base} {...p}><path d="M2 3h20M4 3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3M12 15v4M9 21l3-2 3 2M8 11l3-3 2 2 3-4" /></svg>
);
export const Chat = (p: P) => (
  <svg {...base} {...p}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.9L3 20l1-4a8.4 8.4 0 0 1-1-4 8.5 8.5 0 0 1 9-8.4 8.4 8.4 0 0 1 9 7.9z" /></svg>
);
export const ClipboardCheck = (p: P) => (
  <svg {...base} {...p}><rect x="8" y="3" width="8" height="4" rx="1" /><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 13l2 2 4-4" /></svg>
);
export const Star = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
);
