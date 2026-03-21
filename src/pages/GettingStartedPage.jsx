import { useState } from 'react'
import BoxIcon from '../components/BoxIcon'
import DataTable from '../components/DataTable'

const sections = [
  { id: 'quick-start', label: 'Quick Start', iconClass: 'bx bx-rocket' },
  { id: 'deployment-paths', label: 'Deployment Paths', iconClass: 'bx bx-git-branch' },
  { id: 'checklist', label: 'Launch Checklist', iconClass: 'bx bx-list-check' },
  { id: 'common-fixes', label: 'Common Fixes', iconClass: 'bx bx-wrench' },
]

const quickStartCards = [
  {
    title: 'Prepare the host',
    iconClass: 'bx bx-server',
    description: 'Start with a reachable Linux server and keep the base networking clean.',
    detail: 'Open the required ports, confirm DNS can point to the machine, and make sure you have SSH access before touching the app.',
  },
  {
    title: 'Finish the Dokploy setup',
    iconClass: 'bx bx-lock-alt',
    description: 'Bring the control plane online and confirm you can sign in to the dashboard.',
    detail: 'Treat the first login as infrastructure setup: secure access, review defaults, and verify the server is ready for the first workload.',
  },
  {
    title: 'Choose a deployment source',
    iconClass: 'bx bx-git-branch',
    description: 'Pick the input that already fits the project rather than reshaping the project first.',
    detail: 'Git repos are the fastest path for ongoing releases, while Docker images and Compose are better when the runtime is already defined elsewhere.',
  },
  {
    title: 'Configure runtime details',
    iconClass: 'bx bx-cog',
    description: 'Set the values that actually decide whether the first deploy is smooth.',
    detail: 'Review environment variables, domains, ports, volumes, health checks, and any resource limits before triggering the release.',
  },
]

const deploymentPaths = [
  {
    name: 'Git Repository',
    description: 'Connect a repo and let Dokploy build from source for repeatable releases.',
    bestfor: 'App teams shipping from Git',
    buildflow: 'Nixpacks, buildpacks, or Dockerfile',
  },
  {
    name: 'Docker Image',
    description: 'Deploy a prebuilt image when the build already happens in CI.',
    bestfor: 'Mature pipelines and fixed artifacts',
    buildflow: 'Image pull plus runtime configuration',
  },
  {
    name: 'Docker Compose',
    description: 'Run API, workers, queues, and supporting services from one stack definition.',
    bestfor: 'Multi-service applications',
    buildflow: 'Compose-managed service graph',
  },
  {
    name: 'Raw Compose',
    description: 'Paste a Compose definition directly when you need maximum control over the stack file.',
    bestfor: 'Migration and advanced custom setups',
    buildflow: 'Direct Compose configuration',
  },
]

const serverRegionLinks = [
  {
    label: 'Europe Server',
    href: 'https://dokploy.hostcluster.site',
    description: 'Use this endpoint for Europe-based deployments. Replace it with your live Europe server URL.',
    iconClass: 'bx bx-globe-alt',
  },
  {
    label: 'Asia Server',
    href: 'https://doki.springbullbars.shop',
    description: 'Use this endpoint for Asia-based deployments. Replace it with your live Asia server URL.',
    iconClass: 'bx bx-globe',
  },
]

const launchChecklist = [
  {
    title: 'Server access',
    iconClass: 'bx bx-server',
    description: 'SSH works, disk space is available, and the host is not already saturated.',
  },
  {
    title: 'DNS and domains',
    iconClass: 'bx bx-globe-alt',
    description: 'The target domain points at the server before you request certificates.',
  },
  {
    title: 'Secrets and env vars',
    iconClass: 'bx bx-lock-alt',
    description: 'API keys, database URLs, and app secrets are defined outside the codebase.',
  },
  {
    title: 'Storage and backups',
    iconClass: 'bx bx-collection',
    description: 'Persistent services have volumes and at least a basic backup plan.',
  },
  {
    title: 'Health and visibility',
    iconClass: 'bx bx-signal-5',
    description: 'Health checks, logs, and resource monitoring are configured before launch day.',
  },
  {
    title: 'Rollback path',
    iconClass: 'bx bx-check-shield',
    description: 'You know what to revert, restart, or redeploy if the first release fails.',
  },
]

const commonFixes = [
  {
    title: 'Build is slow or timing out',
    iconClass: 'bx bx-terminal',
    description: 'Large dependencies, expensive image layers, or underpowered hosts usually show up here first.',
    action: 'Read the build logs, trim unnecessary steps, and increase resources before retrying the exact same build again.',
  },
  {
    title: 'Container exits right after start',
    iconClass: 'bx bx-server',
    description: 'This usually means a missing environment variable, wrong command, or a service that never binds to the expected port.',
    action: 'Compare the startup command with local behavior, verify env vars, and inspect runtime logs before changing the deployment method.',
  },
  {
    title: 'Domain loads but HTTPS is missing',
    iconClass: 'bx bx-globe-alt',
    description: 'Certificate issuance often fails because DNS is incomplete or still propagating.',
    action: 'Confirm the final DNS records, wait for propagation if needed, and retry certificate generation only after the domain resolves correctly.',
  },
  {
    title: 'Health checks keep failing',
    iconClass: 'bx bx-error-circle',
    description: 'The app may be listening on a different port, responding too slowly, or exposing the wrong path.',
    action: 'Check the health check URL, match it to the actual application port, and loosen the initial timeout if the service has a cold start.',
  },
]

export default function GettingStartedPage() {
  const [activeSection, setActiveSection] = useState('quick-start')

  const panelClass =
    'rounded-[30px] border border-white/10 panel-dark shadow-[0_28px_90px_rgba(0,0,0,0.42)]'
  const cardClass =
    'rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.35)]'
  const codeBlockClass =
    'overflow-x-auto rounded-[20px] border border-white/10 bg-black/60 p-4 font-mono text-sm text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
  const navButtonClass = (isActive) =>
    `whitespace-nowrap flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm ${
      isActive
        ? 'bg-white text-black shadow-[0_12px_40px_rgba(255,255,255,0.12)]'
        : 'border border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
    }`

  const renderContent = () => {
    switch (activeSection) {
      case 'quick-start':
        return (
          <div className="space-y-8">
            <section className={`${panelClass} p-6 sm:p-8`}>
              <h2 className="font-display mb-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                First deploy flow
              </h2>
              <p className="mb-6 text-base text-zinc-400 sm:text-lg">
                The fastest path is to keep the first release small: one reachable host, one clear source,
                correct runtime configuration, and enough visibility to see what broke if it goes sideways.
              </p>
              <div className={codeBlockClass}>
                <p>1. Prepare the server and confirm network access</p>
                <p>2. Finish Dokploy setup and sign in</p>
                <p>3. Add a Git repo, Docker image, or Compose stack</p>
                <p>4. Configure env vars, domains, ports, and storage</p>
                <p>5. Deploy, review logs, and verify health checks</p>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              {quickStartCards.map((card, index) => (
                <article key={card.title} className={`${cardClass} p-6`}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6d73ff]/14 text-[#d7daff]">
                      <BoxIcon iconClass={card.iconClass} className="text-2xl" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Step {index + 1}
                      </p>
                      <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    </div>
                  </div>
                  <p className="text-zinc-300">{card.description}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{card.detail}</p>
                </article>
              ))}
            </section>
          </div>
        )

      case 'deployment-paths':
        return (
          <div className="space-y-8">
            <section className={`${cardClass} p-6`}>
              <h3 className="mb-2 text-xl font-semibold text-white">Pick the path that matches the project</h3>
              <p className="text-zinc-400">
                Don&apos;t force everything through the same release workflow. Dokploy is most useful when the input
                matches the way the team already builds and ships.
              </p>
            </section>
            <DataTable
              title="Deployment Paths"
              description="The main ways to get an application or stack running in Dokploy."
              columns={['Name', 'Description', 'Best For', 'Build Flow']}
              data={deploymentPaths}
              iconClass="bx bx-git-branch"
              ctaLabel="Get Started"
              modalTitle="Choose your nearest server"
              modalDescription="Pick the region that matches your deployment. The current Europe and Asia URLs are placeholders until you replace them with your actual server links."
              modalLinks={serverRegionLinks}
            />
          </div>
        )

      case 'checklist':
        return (
          <div className="space-y-8">
            <section className={`${panelClass} p-6 sm:p-8`}>
              <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">Launch with the boring details handled first</h2>
              <p className="text-zinc-400">
                Most first-release problems are not framework bugs. They come from missing DNS, missing secrets,
                wrong ports, or no rollback plan.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {launchChecklist.map((item) => (
                <article key={item.title} className={`${cardClass} p-6`}>
                  <BoxIcon
                    iconClass={item.iconClass}
                    className="mb-4 block text-3xl text-[#6d73ff]"
                  />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                </article>
              ))}
            </section>
          </div>
        )

      case 'common-fixes':
        return (
          <div className="grid gap-6">
            {commonFixes.map((item) => (
              <article key={item.title} className={`${panelClass} overflow-hidden`}>
                <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(109,115,255,0.12),rgba(255,255,255,0.03))] px-4 py-4 sm:px-6">
                  <h3 className="flex items-start gap-3 text-lg font-semibold text-white sm:items-center sm:text-xl">
                    <BoxIcon iconClass={item.iconClass} className="text-2xl text-[#d7daff]" />
                    <span>{item.title}</span>
                  </h3>
                </div>
                <div className="space-y-4 px-4 py-5 sm:px-6">
                  <div>
                    <h4 className="mb-2 font-semibold text-zinc-100">What usually causes it</h4>
                    <p className="text-zinc-400">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-zinc-100">What to do next</h4>
                    <p className="text-zinc-400">{item.action}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pb-12 text-zinc-100 sm:pb-16">
      <div className="relative overflow-hidden border-b border-white/10 surface-dark px-4 py-10 sm:px-6 sm:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(255,216,77,0.16),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-display mb-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Getting Started
          </h1>
          <p className="text-base text-zinc-400 sm:text-lg">
            Set up Dokploy, choose the right deployment path, and avoid the first-release mistakes that waste time.
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-x-auto">
            <div className="flex gap-2 py-3 sm:py-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={navButtonClass(activeSection === section.id)}
                >
                  <BoxIcon iconClass={section.iconClass} className="text-lg" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">{renderContent()}</div>
    </div>
  )
}
