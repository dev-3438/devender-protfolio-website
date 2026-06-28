import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { profile, avatar } from "@/data/portfolio";
import { GradientButton, GradientLink } from "@/components/ui/GradientButton";
import { TypingText } from "@/components/fx/TypingText";
import { ParticleBackground } from "@/components/fx/ParticleBackground";
import { MouseGlow } from "@/components/fx/MouseGlow";
import { FloatingShapes } from "@/components/fx/FloatingShapes";
import { useMagnetic } from "@/hooks/useMagnetic";

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "X (Twitter)", href: profile.socials.x, Icon: FaXTwitter },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

function MagneticCta({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const m = useMagnetic<HTMLDivElement>(0.25);
  return (
    <div ref={m.ref} onMouseMove={m.onMouseMove} onMouseLeave={m.onMouseLeave} className="transition-transform">
      <GradientButton onClick={onClick}>{children}</GradientButton>
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden bg-grid pt-28 pb-16"
    >
      <ParticleBackground />
      <MouseGlow />
      <FloatingShapes />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-neon-purple/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium text-neon-emerald">
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon-emerald" />
            Available for work
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient animate-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 h-8 font-display text-lg font-semibold text-foreground sm:text-2xl">
            <TypingText phrases={profile.roles} className="text-neon-cyan" />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticCta onClick={() => scrollTo("projects")}>
              <FolderGit2 className="h-4 w-4" /> View Projects
            </MagneticCta>
            <GradientButton variant="outline" onClick={() => scrollTo("contact")}>
              <Mail className="h-4 w-4" /> Contact Me
            </GradientButton>
            <GradientLink variant="ghost" href={profile.resumeUrl} download>
              <Download className="h-4 w-4" /> Resume
            </GradientLink>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-neon-cyan/60 hover:text-neon-cyan"
              >
                <s.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-50 blur-2xl animate-pulse-glow" />
          <div className="relative animate-float overflow-hidden rounded-[2rem] border border-white/10 glass-strong p-2">
            <img
              src={avatar}
              alt={`Portrait of ${profile.name}`}
              width={816}
              height={816}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
