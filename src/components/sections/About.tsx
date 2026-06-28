import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";
import { profile, education, stats } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Counter } from "@/components/ui/Counter";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="Who I Am"
        description="A snapshot of my background, education and what drives me as an engineer."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <GlassCard variants={fadeInUp} glow className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
                <User className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">Professional Introduction</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{profile.bio}</p>
          </GlassCard>

          <GlassCard variants={fadeInUp} glow className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon-purple/10 text-neon-purple">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">Career Objective</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{profile.objective}</p>
          </GlassCard>
        </motion.div>

        <GlassCard
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon-blue/10 text-neon-blue">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </div>
          <ol className="relative ml-3 space-y-6 border-l border-border">
            {education.map((e) => (
              <li key={e.school} className="ml-6">
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-[image:var(--gradient-brand)]" />
                <p className="text-xs font-medium uppercase tracking-wider text-neon-cyan">
                  {e.period}
                </p>
                <h4 className="mt-1 font-semibold">{e.degree}</h4>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-1 text-sm text-muted-foreground/80">{e.detail}</p>
              </li>
            ))}
          </ol>
        </GlassCard>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <GlassCard key={s.label} variants={fadeInUp} glow className="p-6 text-center">
            <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
