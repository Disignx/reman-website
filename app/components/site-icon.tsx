import type { IconProps } from "@phosphor-icons/react";
import {
  ArrowRight,
  CalendarBlank,
  ChartPieSlice,
  CheckCircle,
  ClipboardText,
  ClockCountdown,
  Cube,
  Drop,
  EnvelopeSimple,
  Factory,
  FileMagnifyingGlass,
  FileText,
  Flask,
  GearSix,
  ListChecks,
  MapPin,
  Package,
  Path,
  Phone,
  Recycle,
  ShieldCheck,
  Stack,
  Truck,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

/** Phosphor icons — self-hosted via npm (DSGVO, no CDN). */
const ICON_MAP = {
  "arrow-right": ArrowRight,
  "calendar-blank": CalendarBlank,
  "chart-pie-slice": ChartPieSlice,
  "check-circle": CheckCircle,
  "clipboard-text": ClipboardText,
  "clock-countdown": ClockCountdown,
  cube: Cube,
  drop: Drop,
  envelope: EnvelopeSimple,
  factory: Factory,
  "file-magnifying-glass": FileMagnifyingGlass,
  "file-text": FileText,
  flask: Flask,
  "gear-six": GearSix,
  "list-checks": ListChecks,
  "map-pin": MapPin,
  package: Package,
  path: Path,
  phone: Phone,
  recycle: Recycle,
  "shield-check": ShieldCheck,
  stack: Stack,
  truck: Truck,
  wind: Wind,
} as const satisfies Record<string, ComponentType<IconProps>>;

export type IconName = keyof typeof ICON_MAP;

type IconComponentProps = {
  name: IconName;
  className?: string;
  weight?: IconProps["weight"];
};

export function Icon({ name, className = "icon", weight = "thin" }: IconComponentProps) {
  const Component = ICON_MAP[name];
  return <Component className={className} weight={weight} aria-hidden />;
}
