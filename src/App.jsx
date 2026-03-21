import { useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#features', dropdown: true },
  { label: 'Workflow', href: '#workflow', dropdown: true },
  { label: 'Best Shots', href: '#best-shots', dropdown: true },
  { label: 'Use Cases', href: '#use-cases', dropdown: true },
]

const metrics = [
  {
    title: 'Applications or Compose',
    description:
      'Launch a single app quickly or move into Docker Compose when the stack needs APIs, workers, queues, and supporting services together.',
  },
  {
    title: 'Databases Built In',
    description:
      'Provision Postgres, MySQL, MariaDB, MongoDB, or Redis with backups, logs, persistence, and resource controls close to the app.',
  },
  {
    title: 'Source Flexibility',
    description:
      'Deploy from GitHub, GitLab, Bitbucket, Gitea, generic Git, Docker images, ZIP uploads, or raw Compose definitions.',
  },
  {
    title: 'Operate in One Place',
    description:
      'Manage domains, environment variables, live logs, container terminals, and service monitoring from one self-hosted control plane.',
  },
]

const pillars = [
  {
    label: 'Application',
    title: 'Fast path for single-service apps',
    description:
      'Dokploy applications can deploy from Git or Docker sources and support Docker, Nixpacks, Heroku Buildpacks, and Paketo Buildpacks for faster setup.',
  },
  {
    label: 'Compose',
    title: 'Real control for multi-service stacks',
    description:
      'Use Docker Compose when the project needs more than one container and keep service lifecycle, terminals, mounts, and environment management inside Dokploy.',
  },
  {
    label: 'Providers',
    title: 'Use the source input that fits the team',
    description:
      'Dokploy supports major Git providers, generic Git repositories, Docker registries, ZIP uploads, and raw Compose input, so teams are not boxed into one flow.',
  },
  {
    label: 'Domains',
    title: 'Handle domains, ports, redirects, and headers',
    description:
      'Configure domains directly in the platform and tune routing details such as redirects, port settings, security headers, and Traefik-specific options.',
  },
  {
    label: 'Databases',
    title: 'Run data services next to the app',
    description:
      'Create and manage Postgres, MySQL, MariaDB, MongoDB, and Redis from the same interface, with backup controls, logs, volumes, and runtime limits.',
  },
  {
    label: 'Automation',
    title: 'Let pushes and scripts trigger releases',
    description:
      'Auto Deploy works with Git providers and webhooks, and the Dokploy API gives you a scriptable route for CI/CD pipelines and custom deployment triggers.',
  },
]

const deploymentModes = [
  {
    name: 'Applications',
    stack: 'Repo-based deployment with Docker, Nixpacks, or buildpacks',
    status: 'Quick start',
  },
  {
    name: 'Docker Compose',
    stack: 'API, worker, queue, and supporting services in one definition',
    status: 'Full stack',
  },
  {
    name: 'Databases',
    stack: 'Postgres, MySQL, MariaDB, MongoDB, Redis',
    status: 'Backups ready',
  },
]

const pipeline = [
  {
    step: 'Choose source',
    detail:
      'Connect GitHub, GitLab, Bitbucket, Gitea, generic Git, Docker image sources, or raw Docker Compose depending on the project.',
  },
  {
    step: 'Configure runtime',
    detail:
      'Set build type, environment variables, domains, ports, volumes, and resource limits before the release goes live.',
  },
  {
    step: 'Trigger deploy',
    detail:
      'Deploy manually, on push with Auto Deploy, through a webhook, or programmatically with the Dokploy API.',
  },
  {
    step: 'Operate live',
    detail:
      'Track deployment logs, open terminals, inspect queued releases, and watch CPU, memory, disk, and network usage per service.',
  },
]

const workflow = [
  {
    title: 'Choose the right deployment lane',
    description:
      'Start with an application when the app is straightforward, move to Docker Compose when the architecture gets multi-service, and attach a managed database when the stack needs durable data.',
  },
  {
    title: 'Wire in runtime details once',
    description:
      'Domains, environment variables, storage volumes, ports, commands, and limits live beside the service definition instead of being scattered across separate tools.',
  },
  {
    title: 'Automate releases from the repo',
    description:
      'Enable Auto Deploy for Git-driven pushes, use webhooks where needed, or trigger releases via API from the CI system you already run.',
  },
  {
    title: 'Operate with visibility instead of guesswork',
    description:
      'Use live logs, service-level monitoring, build logs, queue management, and terminals to troubleshoot without losing the context of the running deployment.',
  },
]

const useCases = [
  {
    title: 'SaaS MVPs',
    text: 'Ship a frontend, API, worker, and database without assembling a fragile chain of separate deployment products.',
  },
  {
    title: 'Internal dashboards',
    text: 'Keep admin tools and business apps close to the infrastructure your team already controls.',
  },
  {
    title: 'Client websites and APIs',
    text: 'Use one repeatable release surface for brochure sites, custom apps, and the backend services that support them.',
  },
  {
    title: 'Side projects and self-hosted tools',
    text: 'Run personal products, experiments, and useful services on infrastructure you own without giving up observability and automation.',
  },
]

const platformWins = [
  'One UI for applications, Compose stacks, databases, domains, and deployment history.',
  'A stronger Git-to-deploy story for small teams that still want self-hosted ownership.',
  'Support for both simple launches and more serious Docker-based stacks.',
  'Live logs, terminals, and per-service resource graphs reduce troubleshooting friction.',
  'Backups for databases and volumes give self-hosted teams a safer operational baseline.',
  'A better fit for teams that want Docker power without stitching every deployment step by hand.',
]

const bestShots = [
  {
    badge: 'Sources',
    title: 'It accepts the messy inputs real teams already have.',
    description:
      'Dokploy does not force every team into one repo pattern. Git providers, generic Git, Docker images, ZIP uploads, and raw Compose all remain valid ways to ship.',
  },
  {
    badge: 'Builds',
    title: 'It supports more than one path from code to runtime.',
    description:
      'Applications can build with Docker, Nixpacks, Heroku Buildpacks, or Paketo Buildpacks, which makes Dokploy useful across different stacks and maturity levels.',
  },
  {
    badge: 'Ops',
    title: 'It keeps operating context near the deployment itself.',
    description:
      'Logs, deployment history, service terminals, resource monitoring, domain settings, and environment variables stay attached to the service instead of disappearing into separate dashboards.',
  },
  {
    badge: 'Data',
    title: 'It treats persistence as part of the platform, not an afterthought.',
    description:
      'Database backups and volume backups make Dokploy more compelling for real applications than a simple app-only launcher.',
  },
]

const panelClass =
  'rounded-[30px] border border-white/10 panel-dark shadow-[0_28px_90px_rgba(0,0,0,0.42)]'

function ChevronDown({ className = 'h-3 w-3' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.5 8H12.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 4L12.5 8L8.5 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function CopyIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <rect
        height="8.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        width="8.5"
        x="5.25"
        y="4.25"
      />
      <path
        d="M10.75 4V3.25C10.75 2.42 10.08 1.75 9.25 1.75H3.25C2.42 1.75 1.75 2.42 1.75 3.25V9.25C1.75 10.08 2.42 10.75 3.25 10.75H4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function DokployGlyph({ className = 'h-10 w-10' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        d="M12 14C17.2 18.4 23.7 20.7 31.5 20.7C39.8 20.7 47.2 18 52 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <path
        d="M8 24C15 30 22.6 32.8 33 32.8C42.5 32.8 50.1 30 56 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <path
        d="M10 34C17 39.7 25.2 43 34.5 43C43.7 43 51.2 40.1 56 35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <path
        d="M14 45C20.1 49.4 26.6 52 34.2 52C41 52 47 49.9 52 46"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <path
        d="M42 11.5C44.1 9.8 45.5 7.4 46 4.5C48.4 8.6 51.7 11.4 56.2 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
    </svg>
  )
}

function SectionIntro({ badge, title, description, center = false }) {
  const alignment = center ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'

  return (
    <div className={alignment}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-zinc-300">
        {badge}
      </span>
      <h2 className="font-display mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function App() {
  const [copied, setCopied] = useState(false)
  const command = 'git push origin main'

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-6 py-4">
          <a
            href="#hero"
            aria-label="Dokploy home"
            className="shrink-0 text-white transition hover:opacity-80"
          >
            <DokployGlyph className="h-10 w-10 sm:h-11 sm:w-11" />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 text-[15px] font-medium text-zinc-200 lg:flex"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>{item.label}</span>
                {item.dropdown ? <ChevronDown /> : null}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <a
              href="#best-shots"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffd84d] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-95"
            >
              <span>Best Shots</span>
            </a>
            <span className="text-lg text-zinc-500">X</span>
            <a
              href="#use-cases"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Use Cases
            </a>
            <a
              href="https://dokploy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              <span>Visit Dokploy</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#features"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:hidden"
          >
            <span>Features</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="border-t border-white/5 lg:hidden">
          <div className="mx-auto max-w-[1320px] overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <nav
              aria-label="Mobile navigation"
              className="flex min-w-max items-center gap-6 text-sm font-medium text-zinc-300"
            >
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>{item.label}</span>
                  {item.dropdown ? <ChevronDown /> : null}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pb-20">
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/6"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid-dokploy opacity-50" />
            <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top,rgba(109,115,255,0.12),transparent_48%)]" />
            <div className="absolute left-[14%] top-[18%] hidden h-14 w-14 rotate-12 bg-white/[0.03] lg:block" />
            <div className="absolute right-[18%] top-[28%] hidden h-20 w-20 -rotate-6 bg-white/[0.03] lg:block" />
            <div className="absolute bottom-[18%] left-[22%] hidden h-12 w-12 rotate-12 bg-white/[0.03] xl:block" />
          </div>

          <div className="relative mx-auto max-w-[1320px] px-6 pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-zinc-300">
                Self-hosted deployment platform
              </span>

              <h1 className="font-display mt-8 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-[6.1rem] lg:leading-[0.92]">
                <span className="block text-zinc-500">Deploy apps, databases,</span>
                <span className="relative block text-white">
                  and Docker Compose stacks
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-5 left-1/2 hidden h-10 w-[86%] -translate-x-1/2 text-white/95 md:block"
                    fill="none"
                    viewBox="0 0 600 50"
                  >
                    <path
                      d="M6 35C108 10 218 10 318 24C408 36 498 40 594 30"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="6"
                    />
                  </svg>
                </span>
                <span className="block text-zinc-300">without platform sprawl</span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                Dokploy brings application deployments, Compose workloads,
                databases, domains, environment variables, logs, monitoring,
                and automated release triggers into one self-hosted surface.
              </p>

              <div className="mx-auto mt-10 flex max-w-3xl flex-col items-stretch gap-3 rounded-[24px] border border-white/10 bg-black/50 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
                <code className="truncate text-left text-sm text-zinc-100 sm:text-base">
                  {command}
                </code>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.1]"
                >
                  <CopyIcon className="h-4 w-4" />
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <p className="mt-3 text-sm text-zinc-500">
                Example Git push for repositories using Dokploy Auto Deploy.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 sm:text-base"
                >
                  <span>Explore Features</span>
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6366f1] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(79,85,218,0.34)] transition hover:bg-[#7277ff] sm:text-base"
                >
                  <span>See the Workflow</span>
                </a>
              </div>
            </div>

            <div className="mt-16 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className={`${panelClass} p-6 sm:p-7`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                      Deployment lanes
                    </p>
                    <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      Three core surfaces cover most of what teams need to run.
                    </h2>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full bg-[#ffd84d] px-4 py-2 text-sm font-semibold text-black">
                    Feature snapshot
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {deploymentModes.map((project) => (
                    <article
                      key={project.name}
                      className="flex flex-col gap-3 rounded-[22px] border border-white/8 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-display text-lg font-semibold text-white">
                          {project.name}
                        </p>
                        <p className="mt-1 text-sm text-zinc-400">
                          {project.stack}
                        </p>
                      </div>
                      <span className="inline-flex w-fit rounded-full bg-[#6d73ff]/16 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7daff]">
                        {project.status}
                      </span>
                    </article>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-300">
                  <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
                    Git-driven releases
                  </span>
                  <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
                    Domain and env management
                  </span>
                  <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
                    Logs, terminals, monitoring
                  </span>
                </div>
              </div>

              <div className="grid gap-6">
                <div className={`${panelClass} p-6 sm:p-7`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                    Release path
                  </p>
                  <div className="mt-5 grid gap-3">
                    {pipeline.map((item) => (
                      <article
                        key={item.step}
                        className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7daff]">
                          {item.step}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-zinc-400">
                          {item.detail}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <aside className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(109,115,255,0.16),transparent_32%),linear-gradient(180deg,rgba(15,18,30,0.96),rgba(6,7,11,0.98))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                    Why it stands out
                  </p>
                  <p className="font-display mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
                    Dokploy is strongest when a team wants Docker-level control
                    without spreading deployment work across five separate tools.
                  </p>
                  <p className="mt-4 text-base leading-8 text-zinc-400">
                    It keeps the release story, the runtime story, and the
                    operations story connected in one place.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 grid max-w-[1320px] gap-4 px-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <article key={item.title} className={`${panelClass} p-6`}>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section id="features" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
            <SectionIntro
              badge="Core Features"
              title="The best Dokploy pages should sell control, flexibility, and operational clarity."
              description="This version focuses on the product features people actually evaluate: deployment models, source options, domains, data services, automation, and visibility after the app goes live."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="inline-flex rounded-full bg-[#6d73ff]/14 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d7daff]">
                    {item.label}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
            <SectionIntro
              badge="Workflow"
              title="The release flow now explains how Dokploy works from source to operations."
              description="The page now shows the practical path teams follow inside Dokploy: choose the lane, configure runtime details, automate the trigger, and operate with context."
              center
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {workflow.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-white/14 sm:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
              <SectionIntro
                badge="Use Cases"
                title="Dokploy fits the teams that want a real deployment platform without renting away control."
                description="These are the kinds of projects the page now highlights most clearly for teams evaluating whether Dokploy fits their stack."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {useCases.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
              <SectionIntro
                badge="Platform Wins"
                title="Why teams keep landing on Dokploy."
                description="The strongest arguments are now about capability, ownership, and day-two operations."
              />

              <ul className="mt-8 grid gap-4">
                {platformWins.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-zinc-300 sm:text-base"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6d73ff]/16 text-sm font-semibold text-[#d7daff]">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="best-shots" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
            <SectionIntro
              badge="Best Shots"
              title="These are the Dokploy strengths worth putting front and center."
              description="This section focuses on the product angles that actually matter when someone is deciding whether Dokploy is serious enough for their stack."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {bestShots.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="inline-flex rounded-full bg-[#ffd84d] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-black">
                    {item.badge}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_right_top,rgba(109,115,255,0.2),transparent_24%),linear-gradient(135deg,rgba(12,13,19,0.98),rgba(5,5,7,0.98))] px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:px-8 sm:py-10">
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-zinc-300">
                  Final section
                </span>
                <h2 className="font-display mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  The page now sells Dokploy as a serious deployment surface.
                </h2>
                <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
                  It is positioned around what Dokploy genuinely does well:
                  applications, Compose stacks, databases, automation, and
                  operations in one self-hosted platform.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row xl:justify-end">
                <a
                  href="#hero"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 sm:text-base"
                >
                  <span>Back to top</span>
                </a>
                <a
                  href="#best-shots"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(79,85,218,0.34)] transition hover:bg-[#7277ff] sm:text-base"
                >
                  <span>Review highlights</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 pb-8 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Dokploy feature landing page concept</p>
        <p>Focused on applications, Compose stacks, databases, and release automation</p>
      </footer>
    </div>
  )
}

export default App
