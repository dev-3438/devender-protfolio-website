import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="My Journey"
        description="How I've spent my time building, contributing and growing as a developer."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl"
      >
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-neon-cyan/60 via-neon-purple/40 to-transparent sm:block" />
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <motion.div key={exp.role} variants={fadeInUp} className="relative sm:pl-14">
              <span className="absolute left-0 top-6 hidden h-9 w-9 place-items-center rounded-full bg-secondary text-neon-cyan ring-4 ring-background sm:grid">
                <Briefcase className="h-4 w-4" />
              </span>
              <GlassCard glow className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                  <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-neon-cyan">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{exp.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
