import { useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#why', dropdown: true },
  { label: 'Pricing', href: '#value', dropdown: false },
  { label: 'Solutions', href: '#workflow', dropdown: true },
  { label: 'Docs', href: '#faq', dropdown: false },
  { label: 'Resources', href: '#projects', dropdown: true },
]

const metrics = [
  {
    title: 'One shared control plane',
    description:
      'Deploy student websites, APIs, capstones, and internal tools from one self-hosted environment.',
  },
  {
    title: 'Lower hosting overhead',
    description:
      'Avoid paying for many disconnected student hosting accounts by standardizing on one platform.',
  },
  {
    title: 'Real CI/CD habits',
    description:
      'Give BSIT teams a cleaner release path that feels closer to actual production workflows.',
  },
  {
    title: 'Presentation-ready releases',
    description:
      'Ship demos faster, revise after feedback, and keep projects easier to maintain after launch.',
  },
]

const pillars = [
  {
    label: 'Practical',
    title: 'Self-hosted control without the clutter',
    description:
      'Keep ownership of your apps, domains, environments, and release process while staying simple enough for student teams.',
  },
  {
    label: 'Student-ready',
    title: 'Built for PHINMA AU BSIT workflows',
    description:
      'Students can focus on building features while the deployment path stays easier to understand and repeat.',
  },
  {
    label: 'Efficient',
    title: 'Low-cost infrastructure for many small projects',
    description:
      'Use one platform for prototypes, portfolios, thesis systems, and campus utilities without stacking subscriptions.',
  },
  {
    label: 'Consistent',
    title: 'Standardize how projects go live',
    description:
      'A shared release pattern reduces manual deployment work and keeps project delivery more predictable.',
  },
  {
    label: 'Scalable',
    title: 'Grow from class demos to a project library',
    description:
      'The same setup can support new batches, new apps, and new maintainers with less onboarding friction.',
  },
  {
    label: 'Showcase-ready',
    title: 'Present student projects like real products',
    description:
      'A structured deployment platform makes BSIT outputs look more credible, usable, and ready for review.',
  },
]

const releaseLanes = [
  {
    name: 'Capstone Dashboard',
    stack: 'React + API service',
    status: 'Live demo ready',
  },
  {
    name: 'Student Queueing App',
    stack: 'Web app + database',
    status: 'Review deployment',
  },
  {
    name: 'Portfolio Hosting Lane',
    stack: 'Static site + custom domain',
    status: 'Fast launch setup',
  },
]

const pipeline = [
  {
    step: 'Push code',
    detail: 'Student teams commit updates and prepare a clean release candidate.',
  },
  {
    step: 'Build app',
    detail: 'Each project follows a container-ready or service-ready deployment path.',
  },
  {
    step: 'Review release',
    detail: 'Logs, variables, and environment settings stay visible in one place.',
  },
  {
    step: 'Go live',
    detail: 'The latest version becomes easier to present, test, and improve.',
  },
]

const workflow = [
  {
    title: 'Prepare a reusable deployment pattern',
    description:
      'Define how PHINMA AU BSIT teams structure repositories, environments, and release expectations so new projects start with less guesswork.',
  },
  {
    title: 'Connect each project to the Dokploy release lane',
    description:
      'Map the app, runtime, domain, and environment variables once so future updates stay consistent.',
  },
  {
    title: 'Use CI/CD to drive releases',
    description:
      'Turn commits into clearer deployment actions instead of last-minute uploads, rushed edits, or manual server changes.',
  },
  {
    title: 'Maintain applications after presentation day',
    description:
      'Keep a cleaner way to redeploy, revise, and improve projects after testing, critique, or faculty feedback.',
  },
]

const useCases = [
  {
    title: 'Portfolio websites',
    text: 'Publish resumes, personal sites, and project showcases with a more credible deployment story.',
  },
  {
    title: 'Capstone and thesis systems',
    text: 'Launch dashboards, portals, and management systems with cleaner release preparation before defense day.',
  },
  {
    title: 'APIs and backend services',
    text: 'Support projects that need environment variables, database services, and more disciplined deployment flow.',
  },
  {
    title: 'Campus internal tools',
    text: 'Host request systems, forms, scheduling tools, and department utilities without overcomplicating infrastructure.',
  },
]

const benefits = [
  'Promotes a stronger CI/CD mindset across the BSIT program',
  'Keeps hosting practical for teams working with limited budgets',
  'Reduces manual deployment work before demos and evaluations',
  'Creates a standard new student teams can adopt quickly',
  'Makes live projects easier to update after launch',
  'Raises the presentation value of PHINMA AU student output',
]

const faqs = [
  {
    question: 'Why use self-hosted Dokploy instead of separate hosting accounts?',
    answer:
      'A shared self-hosted setup gives better cost control, keeps operations centralized, and makes it easier to apply one deployment standard across many student-built applications.',
  },
  {
    question: 'Is this only useful for large production-grade systems?',
    answer:
      'No. Smaller student projects benefit a lot because the platform adds structure early. Even a simple capstone demo becomes easier to ship, revise, and present reliably.',
  },
  {
    question: 'Why is this a good fit for PHINMA AU BSIT students?',
    answer:
      'The goal is not to overload teams with server complexity. The goal is to give them a practical path from coding to release so they learn modern delivery habits while staying focused on the app.',
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

function GithubIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.65.5.5 5.8.5 12.35c0 5.24 3.33 9.69 7.95 11.25.58.11.79-.26.79-.58 0-.29-.01-1.05-.02-2.06-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.29-1.74-1.29-1.74-1.05-.74.08-.72.08-.72 1.17.09 1.78 1.24 1.78 1.24 1.03 1.83 2.71 1.3 3.37.99.1-.77.4-1.3.72-1.59-2.58-.3-5.29-1.33-5.29-5.92 0-1.31.46-2.39 1.2-3.23-.12-.3-.52-1.52.12-3.16 0 0 .98-.32 3.2 1.23a10.8 10.8 0 0 1 5.82 0c2.22-1.55 3.2-1.23 3.2-1.23.64 1.64.24 2.86.12 3.16.75.84 1.2 1.92 1.2 3.23 0 4.6-2.72 5.61-5.32 5.91.41.37.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.23 0 .32.21.7.8.58a11.9 11.9 0 0 0 7.94-11.25C23.5 5.8 18.35.5 12 .5Z" />
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
  const command = 'git push origin main && dokploy deploy phinma-au'

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
            aria-label="PHINMA AU Dokploy home"
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
              href="#why"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffd84d] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-95"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Stars 31.8k</span>
            </a>
            <span className="text-lg text-zinc-500">X</span>
            <a
              href="#cta"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Contact
            </a>
            <a
              href="https://dokploy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              <span>Sign In</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#cta"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:hidden"
          >
            <span>Launch</span>
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
                Self-hosted for PHINMA AU BSIT
              </span>

              <h1 className="font-display mt-8 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-[6.4rem] lg:leading-[0.92]">
                <span className="block text-zinc-500">Simplify</span>
                <span className="relative block text-white">
                  Student App and Database
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
                <span className="block text-zinc-300">Deployments</span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                Manage PHINMA AU student deployments across portfolios,
                capstones, dashboards, and internal tools with a low-cost
                Dokploy setup that pushes BSIT teams toward cleaner CI/CD
                practice.
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

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 sm:text-base"
                >
                  <span>Explore Workflow</span>
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6366f1] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(79,85,218,0.34)] transition hover:bg-[#7277ff] sm:text-base"
                >
                  <span>Start the Rollout</span>
                </a>
              </div>
            </div>

            <div className="mt-16 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className={`${panelClass} p-6 sm:p-7`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                      Student release lane
                    </p>
                    <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      Deploy projects from one campus-ready Dokploy workspace.
                    </h2>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full bg-[#ffd84d] px-4 py-2 text-sm font-semibold text-black">
                    Live setup
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {releaseLanes.map((project) => (
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
                    Low-cost shared infrastructure
                  </span>
                  <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
                    Faster demos and revisions
                  </span>
                  <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
                    Easier onboarding for new batches
                  </span>
                </div>
              </div>

              <div className="grid gap-6">
                <div className={`${panelClass} p-6 sm:p-7`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                    CI/CD path
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
                    What this platform communicates
                  </p>
                  <p className="font-display mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
                    Student projects are not just outputs. They are deployable
                    products with real workflows and real release discipline.
                  </p>
                  <p className="mt-4 text-base leading-8 text-zinc-400">
                    Use it for portfolios, capstones, incubated ideas, and
                    department tools that deserve a more professional delivery
                    path.
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

        <section id="why" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
            <SectionIntro
              badge="Why Dokploy"
              title="Use one deployment standard instead of reinventing setup for every team."
              description="PHINMA AU BSIT students can focus more on building applications while the release flow stays clearer: prepare the project, connect it, deploy it, and keep updates manageable from one shared platform."
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
              badge="Release Workflow"
              title="A CI/CD path that stays understandable for student teams."
              description="Good deployment habits still matter for student work. This structure stays clear enough for first-time deployers and strong enough to support serious project teams."
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

        <section id="projects" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
              <SectionIntro
                badge="Best-fit Projects"
                title="Built for the applications BSIT students actually ship."
                description="Promote Dokploy hosting as the practical home for class projects, thesis systems, startup experiments, and useful campus tools."
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

            <div id="value" className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
              <SectionIntro
                badge="Low-Cost Value"
                title="Use Dokploy hosting as the bridge between student development and real deployment practice."
                description="Instead of paying for isolated hosting plans or relying on fragile manual releases, PHINMA AU can keep a cleaner and more efficient platform for student innovation."
              />

              <ul className="mt-8 grid gap-4">
                {benefits.map((item) => (
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

        <section id="faq" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className={`${panelClass} px-6 py-8 sm:px-8 sm:py-10`}>
            <SectionIntro
              badge="Common Questions"
              title="Promotional pages should answer the practical concerns fast."
              description="These points reinforce why a self-hosted Dokploy deployment lane works well for PHINMA AU and its student developer community."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <summary className="cursor-pointer list-none font-display text-xl font-semibold tracking-[-0.03em] text-white [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto mt-8 max-w-[1320px] px-6">
          <div className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_right_top,rgba(109,115,255,0.2),transparent_24%),linear-gradient(135deg,rgba(12,13,19,0.98),rgba(5,5,7,0.98))] px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:px-8 sm:py-10">
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-zinc-300">
                  Ready to launch
                </span>
                <h2 className="font-display mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Make PHINMA AU BSIT projects easier to deploy, easier to
                  present, and easier to maintain.
                </h2>
                <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
                  This landing page should sell more than hosting. It should
                  sell a smarter release workflow for student-built
                  applications.
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
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(79,85,218,0.34)] transition hover:bg-[#7277ff] sm:text-base"
                >
                  <span>Explore use cases</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 pb-8 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>PHINMA AU Dokploy landing page concept</p>
        <p>Self-hosted CI/CD workflow for student-built applications</p>
      </footer>
    </div>
  )
}

export default App
