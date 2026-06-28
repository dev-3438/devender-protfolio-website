import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Certificates() {
  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Certificates"
        title="Credentials"
        description="Certifications that back my skills and continuous learning."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((c) => (
          <GlassCard
            key={c.title}
            variants={fadeInUp}
            glow
            whileHover={{ y: -6 }}
            className="flex flex-col p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Award className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <div className="mt-auto flex items-center justify-between pt-5">
              <span className="text-xs text-muted-foreground">{c.date}</span>
              <a
                href={c.verify}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neon-cyan transition-colors hover:text-neon-blue"
              >
                Verify <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
