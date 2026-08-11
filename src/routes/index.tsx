import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Cloud,
  Boxes,
  GitBranch,
  Container,
  Network,
  ShieldCheck,
  Activity,
  ScanLine,
  GitFork,
  Terminal,
  MonitorCog,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ArrowDown,
  Briefcase,
  GraduationCap,
  BadgeCheck,
  User,
  Workflow,
  Ship,
  BellRing,
  ExternalLink,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { GithubProjects } from "@/components/portfolio/GithubProjects";
import {
  profile,
  skillGroups,
  experience,
  projects,
  education,
  certification,
  architectureFlow,
} from "@/data/resume";

const icons: Record<string, LucideIcon> = {
  Cloud,
  Boxes,
  GitBranch,
  Container,
  Network,
  ShieldCheck,
  Activity,
  ScanLine,
  GitFork,
  Terminal,
  MonitorCog,
  User,
  Workflow,
  Ship,
  BellRing,
};

const TITLE = "Kuldeep Gupta | Cloud & DevOps Engineer";
const DESC =
  "Cloud & DevOps Engineer specializing in Microsoft Azure, Terraform, Azure DevOps, GitHub Actions, Kubernetes, Docker, Azure Networking, Monitoring and DevSecOps.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Cloud & DevOps Engineer, Azure DevOps Engineer, Microsoft Azure, Terraform, Infrastructure as Code, CI/CD, Kubernetes, Docker, GitHub Actions, DevSecOps",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh" },
          sameAs: [profile.linkedin, profile.github],
          worksFor: { "@type": "Organization", name: experience.company },
        }),
      },
    ],
  }),
  component: Portfolio,
});

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Education />
        <Certification />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden pt-32 pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="animate-float-in max-w-3xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" /> Available for DevOps & Cloud roles
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            Hi, I'm <span className="text-gradient">Kuldeep Gupta</span>
          </h1>
          <p className="mt-4 font-display text-xl text-foreground/90 sm:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="/resume"
              className="glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Azure", "Cloud Platform"],
              ["Terraform", "Infrastructure as Code"],
              ["CI/CD", "Azure DevOps · Actions"],
              ["AKS", "Docker · Kubernetes"],
            ].map(([k, v]) => (
              <div key={k} className="glass rounded-xl p-4">
                <dt className="font-display text-lg font-bold text-primary">{k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  const focus = [
    "Microsoft Azure",
    "Terraform",
    "Infrastructure as Code",
    "CI/CD automation",
    "Docker",
    "Kubernetes / AKS",
    "Azure Networking",
    "Cloud Security",
    "Monitoring",
    "DevSecOps",
    "Production deployments",
    "Troubleshooting",
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="01 — About" title="Cloud engineering, automated end to end" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass rounded-2xl p-7">
          <p className="text-base leading-relaxed text-muted-foreground">{profile.summary}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoRow icon={MapPin} label="Location" value={profile.location} />
            <InfoRow icon={Briefcase} label="Current role" value={`${experience.role}, ${experience.company}`} />
            <InfoRow icon={BadgeCheck} label="Certified" value={`${certification.code} Azure Administrator Associate`} />
            <InfoRow icon={GraduationCap} label="Education" value="MCA (Cloud Computing), Chandigarh University" />
          </div>
        </div>
        <div className="glass rounded-2xl p-7">
          <h3 className="font-display text-lg font-semibold">Core focus areas</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {focus.map((f) => (
              <span
                key={f}
                className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-foreground/85"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-secondary/40 p-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="02 — Skills" title="Technical toolchain" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] ?? Cloud;
          return (
            <article key={group.category} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-display text-base font-semibold">{group.category}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-secondary/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="03 — Experience" title="Professional experience" />
      <div className="relative border-l border-border pl-6 sm:pl-10">
        <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
        <div className="glass rounded-2xl p-7">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-xl font-bold">{experience.role}</h3>
              <p className="mt-1 text-sm text-primary">{experience.company}</p>
              <p className="text-sm text-muted-foreground">{experience.location}</p>
            </div>
            <span className="shrink-0 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs">
              {experience.duration}
            </span>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {experience.responsibilities.map((r) => (
              <div
                key={r}
                className="rounded-xl border border-border bg-secondary/35 p-4 text-sm leading-relaxed text-muted-foreground transition-colors hover:border-primary/40"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="04 — Projects" title="Featured projects" />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title} className="glass flex flex-col rounded-2xl p-7">
            <h3 className="font-display text-lg font-bold sm:text-xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            {open === i && (
              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    Responsibilities
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {p.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    Architecture
                  </h4>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {p.architecture.map((a) => (
                      <div
                        key={a}
                        className="rounded-lg border border-border bg-secondary/40 px-3 py-2 font-mono text-[11px] text-muted-foreground"
                      >
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                {open === i ? "Hide Details" : "View Details"}
                <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <a
                href={profile.projectsRepo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:border-primary/50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="relative overflow-hidden py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading eyebrow="05 — Architecture" title="DevOps delivery pipeline" />
        <div className="mx-auto max-w-3xl">
          {architectureFlow.map((step, i) => {
            const Icon = icons[step.icon] ?? Cloud;
            return (
              <div key={step.label}>
                <div className="glass group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 transition-colors group-hover:bg-primary/25">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.note}</p>
                  </div>
                </div>
                {i < architectureFlow.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-primary/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="06 — Education" title="Education" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.degree} className="glass rounded-2xl p-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">{e.degree}</h3>
            <p className="mt-1 text-sm text-primary">{e.school}</p>
            {e.detail && <p className="text-sm text-muted-foreground">{e.detail}</p>}
            <p className="mt-2 font-mono text-xs text-muted-foreground">{e.duration}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certification() {
  return (
    <section id="certification" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="07 — Certification" title="Certification" />
      <div className="glass grid max-w-2xl grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-2xl p-7">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/12">
          <BadgeCheck className="h-7 w-7 text-primary" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold">{certification.name}</h3>
          <p className="mt-1 font-mono text-sm text-primary">{certification.code}</p>
        </div>
      </div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section id="github" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="08 — GitHub" title="Repositories on GitHub" />
      <div className="glass grid grid-cols-[minmax(0,1fr)] gap-4 rounded-2xl p-6 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold">github.com/{profile.githubUser}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Live repositories, including the DevOps-Projects repository with Terraform, Azure, CI/CD,
            Docker, Kubernetes, security scanning and monitoring configurations.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:border-primary/50"
          >
            <Github className="h-4 w-4" /> Profile
          </a>
          <a
            href={profile.projectsRepo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <ExternalLink className="h-4 w-4" /> DevOps-Projects
          </a>
        </div>
      </div>
      <GithubProjects />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-6">
      <SectionHeading eyebrow="09 — Contact" title="Get in touch" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ContactCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactCard icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
        <ContactCard icon={MapPin} label="Location" value={profile.location} />
        <ContactCard
          icon={Linkedin}
          label="LinkedIn"
          value="linkedin.com/in/kuldeepguptaazure"
          href={profile.linkedin}
          external
        />
        <ContactCard
          icon={Github}
          label="GitHub"
          value={`github.com/${profile.githubUser}`}
          href={profile.github}
          external
        />
        <ContactCard icon={Download} label="Resume" value="Download / Print resume" href="/resume" />
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 break-words text-sm">{value}</p>
    </>
  );
  const cls = "glass block rounded-2xl p-6";
  return href ? (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-6 px-5 sm:flex sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="font-display text-base font-bold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Copyright © 2026 {profile.name}
      </p>
    </footer>
  );
}
