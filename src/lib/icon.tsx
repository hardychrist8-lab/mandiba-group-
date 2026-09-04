/**
 * Mappeur d'icônes dynamique.
 * Les noms d'icônes sont stockés en string dans site-data.ts
 * et résolus ici vers les composants Lucide correspondants.
 */
import {
  Shield,
  Truck,
  Heart,
  Car,
  Home,
  Plane,
  Umbrella,
  Key,
  BadgeCheck,
  Settings,
  ShieldCheck,
  Award,
  MapPin,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Truck,
  Heart,
  Car,
  Home,
  Plane,
  Umbrella,
  Key,
  BadgeCheck,
  Settings,
  ShieldCheck,
  Award,
  MapPin,
  Handshake,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Icon({ name, className, size = 24, strokeWidth = 2 }: IconProps) {
  const LucideComponent = iconMap[name] ?? Shield;
  return (
    <LucideComponent
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
