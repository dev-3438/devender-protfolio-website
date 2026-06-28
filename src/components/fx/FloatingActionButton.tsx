import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

const actions = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "X (Twitter)", href: profile.socials.x, Icon: FaXTwitter },
];

/** Floating action button revealing quick contact links. */
export function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((a, i) => (
            <motion.a
              key={a.label}
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={a.label}
              initial={{ opacity: 0, y: 12, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.7 }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong grid h-11 w-11 place-items-center rounded-full text-foreground transition-colors hover:text-neon-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <a.Icon className="h-5 w-5" />
            </motion.a>
          ))}
      </AnimatePresence>
      <motion.button
        type="button"
        aria-label={open ? "Close quick links" : "Open quick links"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.9 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[0_8px_30px_-6px_rgba(168,85,247,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <motion.span animate={{ rotate: open ? 135 : 0 }} transition={{ duration: 0.3 }}>
          <Plus className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </div>
  );
}
