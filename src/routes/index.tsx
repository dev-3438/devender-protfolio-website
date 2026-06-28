import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { Preloader } from "@/components/fx/Preloader";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { ScrollToTop } from "@/components/fx/ScrollToTop";
import { FloatingActionButton } from "@/components/fx/FloatingActionButton";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const About = lazy(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("@/components/sections/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Certificates = lazy(() =>
  import("@/components/sections/Certificates").then((m) => ({ default: m.Certificates })),
);
const Achievements = lazy(() =>
  import("@/components/sections/Achievements").then((m) => ({ default: m.Achievements })),
);
const FAQ = lazy(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.roles[0]}` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — Developer Portfolio` },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <FloatingActionButton />

      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Achievements />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
