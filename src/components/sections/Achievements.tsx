import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="By The Numbers"
        description="Milestones that reflect my consistency and growth."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {achievements.map((a) => (
          <GlassCard key={a.label} variants={fadeInUp} glow className="p-6 text-center">
            <div className="font-display text-4xl font-extrabold text-gradient">
              <Counter value={a.value} suffix={a.suffix} />
            </div>
            <p className="mt-2 font-medium">{a.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{a.description}</p>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
