import type { IconProps } from "@phosphor-icons/react";
import {
  ArrowRight,
  CalendarBlank,
  ChartPieSlice,
  ClipboardText,
  ClockCountdown,
  Factory,
  FileMagnifyingGlass,
  FileText,
  GearSix,
  Package,
  Path,
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
  "clipboard-text": ClipboardText,
  "clock-countdown": ClockCountdown,
  factory: Factory,
  "file-magnifying-glass": FileMagnifyingGlass,
  "file-text": FileText,
  "gear-six": GearSix,
  package: Package,
  path: Path,
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
