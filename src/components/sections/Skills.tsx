import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="My Tech Toolkit"
        description="Technologies I use to design, build and ship modern web applications."
      />

      <div className="flex flex-col gap-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-6 font-display text-xl font-semibold">
              <span className="text-gradient">{group.category}</span>
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {group.skills.map((skill) => (
                <GlassCard
                  key={skill.name}
                  variants={fadeInUp}
                  glow
                  whileHover={{ y: -6 }}
                  className="group p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/50 text-2xl text-neon-cyan transition-transform duration-300 group-hover:scale-110 group-hover:animate-float">
                      <skill.icon />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.level}%</p>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
