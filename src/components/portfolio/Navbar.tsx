import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Architecture", "architecture"],
  ["Education", "education"],
  ["Certification", "certification"],
  ["Contact", "contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass border-b !bg-background/80" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 font-mono text-sm font-bold text-primary">
            KG
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight sm:text-base">
            Kuldeep Gupta
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t px-4 pb-4 xl:hidden">
          <div className="grid grid-cols-2 gap-1 pt-2">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="/resume"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
