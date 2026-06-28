import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss as SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgVisitor from "@/assets/project-visitor.jpg";
import imgBanking from "@/assets/project-banking.jpg";
import imgLearning from "@/assets/project-learning.jpg";
import imgTasks from "@/assets/project-tasks.jpg";
import avatarImg from "@/assets/avatar.jpg";

export const avatar = avatarImg;

/**
 * ============================================================
 *  EDIT EVERYTHING HERE — single source of truth.
 *  Replace the TODO placeholders with your real info & links.
 * ============================================================
 */

export const profile = {
  name: "Devender Singh Bisht", // TODO: your name
  firstName: "Devender",
  roles: ["Full Stack MERN Developer", "Building Production-Ready SaaS Applications"],
  tagline: "I design and engineer fast, accessible, production-grade web applications.",
  bio: "I'm a full stack developer specializing in the MERN ecosystem. I turn ambitious product ideas into scalable SaaS platforms — obsessing over performance, clean architecture, and delightful micro-interactions.",
  objective:
    "Seeking challenging full stack roles where I can ship impactful products, grow alongside a strong engineering team, and push the boundaries of modern web experiences.",
  location: "Remote · Worldwide",
  avatarPrompt: "developer portrait",
  resumeUrl: "#", // TODO: drop resume.pdf in src/assets and import, or link
  email: "hello@example.com", // TODO
  socials: {
    github: "https://github.com", // TODO
    linkedin: "https://linkedin.com", // TODO
    x: "https://x.com", // TODO
  },
};

export type NavItem = { label: string; href: string };
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export type Stat = { label: string; value: number; suffix?: string };
export const stats: Stat[] = [
  { label: "Projects Completed", value: 24, suffix: "+" },
  { label: "LeetCode Solved", value: 100, suffix: "+" },
  { label: "Certificates", value: 5 },
  { label: "Technologies Learned", value: 20, suffix: "+" },
];

export type EducationItem = { school: string; degree: string; period: string; detail: string };
export const education: EducationItem[] = [
  {
    school: "DPGITM, Gurugram",
    degree: "B. Tech in Computer Science Artificial Intelligence & Machine Learning",
    period: "2026 - 2030",
    detail: "Focus on web systems, data structures & algorithms, and software engineering.",
  },
  {
    school: "Harvard (online)",
    degree: "CS50x & CS50P",
    period: "2026",
    detail: "Computer science fundamentals and Python programming.",
  },
];

export type Skill = { name: string; icon: IconType; level: number };
export type SkillGroup = { category: string; skills: Skill[] };
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, level: 95 },
      { name: "CSS", icon: SiCss3, level: 92 },
      { name: "JavaScript", icon: SiJavascript, level: 93 },
      { name: "TypeScript", icon: SiTypescript, level: 88 },
      { name: "React", icon: SiReact, level: 92 },
      { name: "Redux Toolkit", icon: SiRedux, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 94 },
      { name: "Bootstrap", icon: SiBootstrap, level: 82 },
      { name: "Framer Motion", icon: SiFramer, level: 87 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 88 },
      { name: "Express.js", icon: SiExpress, level: 87 },
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "Mongoose", icon: SiMongoose, level: 84 },
      { name: "REST API", icon: TbApi, level: 90 },
      { name: "JWT Auth", icon: SiJsonwebtokens, level: 86 },
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "C++", icon: SiCplusplus, level: 83 },
      { name: "Python", icon: SiPython, level: 84 },
      { name: "SQL", icon: SiMysql, level: 80 },
      { name: "Git", icon: SiGit, level: 90 },
      { name: "GitHub", icon: SiGithub, level: 90 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  image: string; // imported asset url
  demo: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Production SaaS E-Commerce Platform",
    description:
      "A multi-tenant e-commerce SaaS with storefronts, admin dashboards, subscription billing and analytics.",
    features: ["Subscription billing", "Admin analytics", "Cart & checkout", "Role-based access"],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: imgEcommerce,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Visitor Pass Management System",
    description:
      "Digital visitor check-in with QR badge generation, host notifications and audit logs for offices.",
    features: ["QR badges", "Host alerts", "Audit logs", "Kiosk mode"],
    stack: ["React", "Express", "MongoDB", "JWT"],
    image: imgVisitor,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Banking Application",
    description:
      "Secure online banking with accounts, transfers, transaction history and rich data visualizations.",
    features: ["Fund transfers", "Statements", "Charts & insights", "2FA security"],
    stack: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    image: imgBanking,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Student Learning Platform",
    description:
      "An LMS with courses, video lessons, progress tracking, quizzes and certificates for learners.",
    features: ["Course catalog", "Progress tracking", "Quizzes", "Certificates"],
    stack: ["React", "Tailwind CSS", "Express", "MongoDB"],
    image: imgLearning,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Python-learning platform",
    description:
      "A learning platform for Python programming with interactive exercises, quizzes and progress tracking for students.",
    features: ["Kanban board", "Drag & drop", "Labels & due dates", "Team collaboration"],
    stack: ["html", "css", "javascript", "python","flask","sqlite","tailwindcss"],
    image: imgTasks,
    demo: "https://python-learn-v2.vercel.app/",
    github: "https://github.com/dev-3438/python-learn-v2",
    featured: true,
  },
];



export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
};
export const experiences: Experience[] = [
  {
    role: "MERN Stack Development",
    org: "Freelance & Contract",
    period: "2026— Present",
    description: "End-to-end delivery of full stack web applications for clients and startups.",
    highlights: [
      "Built REST APIs with Node, Express & MongoDB",
      "Designed responsive React frontends with TypeScript",
      "Implemented JWT auth, RBAC and payment flows",
    ],
  },
  {
    role: "SaaS Development",
    org: "Product Engineering",
    period: "2026 — Present",
    description: "Architected multi-tenant SaaS products from zero to production.",
    highlights: [
      "Subscription billing & usage metering",
      "Scalable database schema design",
      "CI/CD and observability",
    ],
  },
  {
    role: "Personal Projects",
    org: "Self-directed",
    period: "2026— Present",
    description: "Continuous building to explore new patterns, tools and animations.",
    highlights: ["Design systems", "Animation-heavy UIs", "Performance tuning"],
  },
  {
    role: "Open Source Contributions",
    org: "GitHub Community",
    period: "2026— Present",
    description: "Contributing fixes, docs and features to community projects.",
    highlights: ["Bug fixes & PRs", "Documentation", "Issue triage"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  verify: string;
};
export const certificates: Certificate[] = [
  { title: "CS50x: Introduction to Computer Science", issuer: "Harvard University", date: "2026", verify: "https://certificates.cs50.io/55852341-d90e-4793-97a6-2eb46551f233.pdf?size=letter" },
  { title: "CS50P: Programming with Python", issuer: "Harvard University", date: "2026", verify: "https://cs50.harvard.edu/certificates/7342453a-486a-4455-bdd6-6c1ffedced8f" },
  { title: "Web Development Certificate", issuer: "freeCodeCamp", date: "2026", verify: "#" },
  { title: "Python Certificate", issuer: "HackerRank", date: "2026", verify: "#" },
  { title: "Artificial Intelligence and Machine Learning", issuer: "simplilearn", date: "2026", verify: "https://certificates.simplicdn.net/share/10400738_10716904_1782571543573.pdf" },
];

export type Achievement = { label: string; value: number; suffix?: string; description: string };
export const achievements: Achievement[] = [
  { label: "LeetCode Problems", value: 100, suffix: "+", description: "Data structures & algorithms" },
  { label: "Production Projects", value: 8, suffix: "+", description: "Shipped & live" },
  { label: "Open Source PRs", value: 15, suffix: "+", description: "Merged contributions" },
  { label: "Learning Streak", value: 365, suffix: "d", description: "Continuous learning" },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Full stack web apps and SaaS platforms — from MVPs to production-grade systems with auth, billing and dashboards.",
  },
  {
    q: "What is your tech stack?",
    a: "Primarily the MERN stack (MongoDB, Express, React, Node) with TypeScript, plus Tailwind CSS and modern animation tooling.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm open to freelance, contract and full-time opportunities. Reach out via the contact form.",
  },
  {
    q: "How do you approach performance?",
    a: "Lazy loading, code-splitting, accessible semantics and Lighthouse-driven optimization are part of every build.",
  },
];
