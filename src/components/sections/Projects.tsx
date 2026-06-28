import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { GradientLink } from "@/components/ui/GradientButton";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTransform("")}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className="h-full [transform-style:preserve-3d]"
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Work"
        description="A selection of production-grade applications I've designed and engineered."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={fadeInUp} className="h-full">
            <TiltCard>
              <GlassCard strong glow className="flex h-full flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-base-900/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-neon-emerald" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Chip key={s} glow>
                        {s}
                      </Chip>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 pt-2">
                    <GradientLink
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-4 py-2.5 text-xs"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </GradientLink>
                    <GradientLink
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                      className="flex-1 px-4 py-2.5 text-xs"
                    >
                      <Github className="h-4 w-4" /> Code
                    </GradientLink>
                  </div>
                </div>
              </GlassCard>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
