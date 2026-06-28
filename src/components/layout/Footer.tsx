import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { navItems, profile } from "@/data/portfolio";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "X (Twitter)", href: profile.socials.x, Icon: FaXTwitter },
];

export function Footer() {
  const scrollTo = (href: string) =>
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-border bg-base-800/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 font-display text-lg font-bold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground text-sm">
                {"</>"}
              </span>
              <span className="text-gradient">{profile.name}</span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{profile.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-neon-cyan/60 hover:text-neon-cyan"
              >
                <s.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
