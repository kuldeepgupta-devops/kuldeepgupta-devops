import { useQuery } from "@tanstack/react-query";
import { Star, GitFork, ExternalLink, BookOpen, Loader2 } from "lucide-react";
import { profile } from "@/data/resume";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`,
  );
  if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
  return res.json();
}

export function GithubProjects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const repos = (data ?? []).filter((r) => !r.fork);

  return (
    <div className="mt-8">
      {isLoading && (
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading repositories from GitHub…
        </div>
      )}

      {isError && (
        <div className="glass rounded-xl p-6 text-sm text-muted-foreground">
          Repositories could not be loaded right now. Browse them directly on{" "}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-primary underline">
            github.com/{profile.githubUser}
          </a>
          .
        </div>
      )}

      {!isLoading && !isError && repos.length === 0 && (
        <div className="glass rounded-xl p-6 text-sm text-muted-foreground">
          No public repositories are listed on this GitHub account yet. The DevOps projects
          repository is available at{" "}
          <a
            href={profile.projectsRepo}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            DevOps-Projects
          </a>
          .
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <article key={repo.id} className="glass flex flex-col rounded-xl p-5">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <h3 className="truncate font-display text-base font-semibold">{repo.name}</h3>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${repo.name} on GitHub`}
                className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {repo.description ?? "No description provided in the repository."}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {repo.language && (
                <span className="rounded-md bg-primary/12 px-2 py-1 font-mono text-[11px] text-primary">
                  {repo.language}
                </span>
              )}
              {(repo.topics ?? []).slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
              </span>
              <span className="inline-flex items-center gap-1">
                <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
              </span>
              <a
                href={`${repo.html_url}#readme`}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1 text-primary hover:underline"
              >
                <BookOpen className="h-3.5 w-3.5" /> README
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
