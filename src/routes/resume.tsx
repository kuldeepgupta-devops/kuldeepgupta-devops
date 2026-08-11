import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer, ArrowLeft } from "lucide-react";
import {
  profile,
  skillGroups,
  experience,
  projects,
  education,
  certification,
} from "@/data/resume";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Kuldeep Gupta | Cloud & DevOps Engineer" },
      {
        name: "description",
        content:
          "Printable resume of Kuldeep Gupta, Cloud & DevOps Engineer skilled in Microsoft Azure, Terraform, Azure DevOps, GitHub Actions, Docker, Kubernetes and DevSecOps.",
      },
      { property: "og:title", content: "Resume — Kuldeep Gupta | Cloud & DevOps Engineer" },
      {
        property: "og:description",
        content: "Cloud & DevOps Engineer resume: Azure, Terraform, CI/CD, Kubernetes, DevSecOps.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          <Printer className="h-4 w-4" /> Print / Save as PDF
        </button>
      </div>

      <header className="border-b border-border pb-5">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="mt-1 text-lg text-primary">{profile.title}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {profile.location} · {profile.phone} ·{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="text-sm text-muted-foreground">
          <a href={profile.linkedin}>{profile.linkedin}</a> ·{" "}
          <a href={profile.github}>{profile.github}</a>
        </p>
      </header>

      <Section title="Professional Summary">
        <p className="text-sm leading-relaxed">{profile.summary}</p>
      </Section>

      <Section title="Technical Skills">
        <ul className="space-y-1 text-sm">
          {skillGroups.map((g) => (
            <li key={g.category}>
              <span className="font-semibold">{g.category}:</span> {g.items.join(", ")}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Professional Experience">
        <p className="text-sm font-semibold">
          {experience.role} — {experience.company}, {experience.location}
        </p>
        <p className="text-sm text-muted-foreground">{experience.duration}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {experience.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>

      <Section title="Projects">
        {projects.map((p) => (
          <div key={p.title} className="mb-4">
            <p className="text-sm font-semibold">{p.title}</p>
            <p className="text-sm text-muted-foreground">{p.description}</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {p.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Technologies:</span> {p.technologies.join(", ")}
            </p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {education.map((e) => (
          <div key={e.degree} className="mb-2 text-sm">
            <p className="font-semibold">{e.degree}</p>
            <p className="text-muted-foreground">
              {e.school}
              {e.detail ? ` · ${e.detail}` : ""} · {e.duration}
            </p>
          </div>
        ))}
      </Section>

      <Section title="Certification">
        <p className="text-sm">
          {certification.name} ({certification.code})
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 font-display text-sm font-bold uppercase tracking-widest text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}
