import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton, GradientLink } from "@/components/ui/GradientButton";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", value: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", value: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "X (Twitter)", value: "@handle", href: profile.socials.x, Icon: FaXTwitter },
];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Subject is too short.";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFields(empty);
      toast.success("Message sent! I'll get back to you soon.");
    }, 900);
  };

  const inputClass = (key: keyof Fields) =>
    cn(
      "w-full rounded-xl border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
      errors[key] ? "border-destructive" : "border-border focus:border-neon-cyan/60",
    );

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Together"
        description="Have a project in mind or just want to say hi? Drop me a message."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <GlassCard className="p-6">
            <h3 className="font-display text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-neon-cyan" /> {profile.location}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-neon-cyan/60"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary/50 text-neon-cyan">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{s.label}</span>
                    <span className="block truncate text-sm font-medium group-hover:text-neon-cyan">
                      {s.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <GradientLink href={profile.resumeUrl} download className="mt-6 w-full">
              <Download className="h-4 w-4" /> Download Resume
            </GradientLink>
          </GlassCard>
        </motion.div>

        <GlassCard
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          strong
          className="p-6"
        >
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  value={fields.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className={inputClass("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={fields.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className={inputClass("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                value={fields.subject}
                onChange={update("subject")}
                placeholder="What's this about?"
                className={inputClass("subject")}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={fields.message}
                onChange={update("message")}
                placeholder="Tell me about your project..."
                className={cn(inputClass("message"), "resize-none")}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <GradientButton type="submit" disabled={submitting} className="w-full">
              {submitting ? "Sending..." : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </GradientButton>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
