import { GlowCard } from "@/components/ui/spotlight-card";

export function SpotlightCardDemo() {
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center gap-10">
      <GlowCard glowColor="warm" />
      <GlowCard glowColor="warm" />
      <GlowCard glowColor="warm" />
    </div>
  );
}
