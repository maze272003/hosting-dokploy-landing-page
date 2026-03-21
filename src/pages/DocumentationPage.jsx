import { useState } from 'react'
import BoxIcon from '../components/BoxIcon'
import DataTable from '../components/DataTable'

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const panelClass =
    'rounded-[30px] border border-white/10 panel-dark shadow-[0_28px_90px_rgba(0,0,0,0.42)]'
  const cardClass =
    'rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.35)]'
  const navButtonClass = (isActive) =>
    `whitespace-nowrap flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm ${
      isActive
        ? 'bg-white text-black shadow-[0_12px_40px_rgba(255,255,255,0.12)]'
        : 'border border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
    }`

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bx bx-book' },
    { id: 'deployment', label: 'Deployment Methods', icon: 'bx bx-rocket' },
    { id: 'databases', label: 'Databases', icon: 'bx bx-data' },
    { id: 'build', label: 'Build Methods', icon: 'bx bx-wrench' },
    { id: 'domains', label: 'Domain Management', icon: 'bx bx-globe' },
    { id: 'backup', label: 'Backup & Recovery', icon: 'bx bx-save' },
    { id: 'monitoring', label: 'Monitoring', icon: 'bx bx-line-chart' },
    { id: 'security', label: 'Security', icon: 'bx bx-lock' },
    { id: 'integration', label: 'Integrations', icon: 'bx bx-link' },
    { id: 'performance', label: 'Performance', icon: 'bx bx-bolt' },
  ]

  const deploymentMethods = [
    {
      name: 'Git Repository',
      description: 'Deploy from GitHub, GitLab, Bitbucket, Gitea, or generic Git repositories',
      complexity: 'Low',
      useCases: 'Web apps, APIs, Static sites',
      supportedLanguages: 'Node.js, Python, Ruby, Go, Java, PHP, .NET',
    },
    {
      name: 'Docker Image',
      description: 'Deploy from Docker Hub, private registries, or custom images',
      complexity: 'Medium',
      useCases: 'Containerized apps, Microservices, Legacy apps',
      supportedLanguages: 'All Languages',
    },
    {
      name: 'Docker Compose',
      description: 'Deploy multi-service applications with full Docker Compose support',
      complexity: 'High',
      useCases: 'SaaS apps, Complex stacks, Production workloads',
      supportedLanguages: 'All Languages',
    },
    {
      name: 'ZIP Upload',
      description: 'Upload application code directly as ZIP archive',
      complexity: 'Low',
      useCases: 'Simple apps, Testing, Quick deployments',
      supportedLanguages: 'All Languages',
    },
    {
      name: 'Raw Compose',
      description: 'Deploy using raw Docker Compose YAML definitions',
      complexity: 'Medium',
      useCases: 'Advanced users, Custom configurations, Migration',
      supportedLanguages: 'All Languages',
    },
  ]

  const databases = [
    {
      name: 'PostgreSQL',
      description: 'Advanced open-source relational database',
      version: '14, 15, 16',
      backupSupport: 'Yes',
      monitoringSupport: 'Yes',
      replicationSupport: 'Yes',
      useCases: 'Web apps, Analytics, Enterprise apps',
    },
    {
      name: 'MySQL',
      description: 'Popular open-source relational database',
      version: '5.7, 8.0',
      backupSupport: 'Yes',
      monitoringSupport: 'Yes',
      replicationSupport: 'Yes',
      useCases: 'CMS, E-commerce, Web apps',
    },
    {
      name: 'MariaDB',
      description: 'MySQL fork with enhanced features',
      version: '10.5, 10.6, 11.x',
      backupSupport: 'Yes',
      monitoringSupport: 'Yes',
      replicationSupport: 'Yes',
      useCases: 'Web apps, Open-source projects, High performance',
    },
    {
      name: 'MongoDB',
      description: 'Document-oriented NoSQL database',
      version: '5.0, 6.0, 7.0',
      backupSupport: 'Yes',
      monitoringSupport: 'Yes',
      replicationSupport: 'Yes',
      useCases: 'Content management, Real-time apps, Big data',
    },
    {
      name: 'Redis',
      description: 'In-memory data structure store',
      version: '6.x, 7.x',
      backupSupport: 'Yes',
      monitoringSupport: 'Yes',
      replicationSupport: 'Yes',
      useCases: 'Caching, Sessions, Real-time data',
    },
  ]

  const buildMethods = [
    {
      name: 'Docker',
      description: 'Build using Dockerfile',
      complexity: 'Medium',
      useCases: 'Custom builds, Multi-stage builds, Advanced users',
      speed: 'Variable',
      cacheSupport: 'Yes',
    },
    {
      name: 'Nixpacks',
      description: 'Smart buildpacks for modern apps',
      complexity: 'Low',
      useCases: 'Node.js, Python, Ruby, Go, Java',
      speed: 'Fast',
      cacheSupport: 'Yes',
    },
    {
      name: 'Heroku Buildpacks',
      description: 'Traditional Heroku buildpacks',
      complexity: 'Low',
      useCases: 'Legacy apps, Heroku migrations',
      speed: 'Fast',
      cacheSupport: 'Yes',
    },
    {
      name: 'Paketo Buildpacks',
      description: 'Cloud-native buildpacks',
      complexity: 'Low',
      useCases: 'Modern apps, Enterprise, Security-focused',
      speed: 'Fast',
      cacheSupport: 'Yes',
    },
  ]

  const domainFeatures = [
    {
      name: 'Custom Domains',
      description: 'Add your own domain names',
      complexity: 'Low',
      useCases: 'Production apps, Branding, SEO',
      multiDomain: 'Yes',
    },
    {
      name: 'SSL/TLS Certificates',
      description: "Automatic SSL/TLS certificate management with Let's Encrypt",
      complexity: 'Low',
      useCases: 'Security, HTTPS, Trust',
      autoRenewal: 'Yes',
    },
    {
      name: 'URL Redirects',
      description: 'Configure URL redirects and rewrites',
      complexity: 'Medium',
      useCases: 'Marketing, Legacy support, SEO',
      permanentRedirect: 'Yes',
    },
    {
      name: 'Custom Headers',
      description: 'Custom HTTP headers configuration',
      complexity: 'Medium',
      useCases: 'Security, Performance, Analytics',
      securityHeaders: 'Yes',
    },
    {
      name: 'Port Management',
      description: 'Configure port mappings and exposure',
      complexity: 'Medium',
      useCases: 'Networking, Load balancing, Security',
      dualPort: 'Yes',
    },
  ]

  const backupDestinations = [
    {
      name: 'AWS S3',
      description: 'Amazon Web Services S3 buckets',
      complexity: 'Medium',
      useCases: 'Enterprise, Scalability, Reliability',
      automatedBackup: 'Yes',
      encryption: 'Yes',
      costPerGB: '$0.023',
    },
    {
      name: 'Cloudflare R2',
      description: "Cloudflare's S3-compatible storage",
      complexity: 'Low',
      useCases: 'Performance, Cost-effective, Global',
      automatedBackup: 'Yes',
      encryption: 'Yes',
      costPerGB: '$0.015',
    },
    {
      name: 'Google Cloud Storage',
      description: 'Google Cloud Platform storage',
      complexity: 'Medium',
      useCases: 'Enterprise, Integration, Reliability',
      automatedBackup: 'Yes',
      encryption: 'Yes',
      costPerGB: '$0.020',
    },
    {
      name: 'Backblaze B2',
      description: 'Backblaze cloud storage',
      complexity: 'Low',
      useCases: 'Cost-effective, Simple, Reliable',
      automatedBackup: 'Yes',
      encryption: 'Yes',
      costPerGB: '$0.006',
    },
    {
      name: 'MinIO',
      description: 'Self-hosted S3-compatible storage',
      complexity: 'High',
      useCases: 'Self-hosted, Privacy, Control',
      automatedBackup: 'Yes',
      encryption: 'Yes',
      costPerGB: 'Self-hosted',
    },
  ]

  const monitoringMetrics = [
    {
      name: 'CPU Usage',
      description: 'Central Processing Unit utilization percentage',
      unit: '%',
      warningThreshold: '60%',
      criticalThreshold: '80%',
      frequency: 'Real-time',
    },
    {
      name: 'Memory Usage',
      description: 'RAM (Random Access Memory) utilization',
      unit: '%',
      warningThreshold: '70%',
      criticalThreshold: '90%',
      frequency: 'Real-time',
    },
    {
      name: 'Disk Space',
      description: 'Storage space utilization',
      unit: '%',
      warningThreshold: '80%',
      criticalThreshold: '95%',
      frequency: 'Every 5 minutes',
    },
    {
      name: 'Network I/O',
      description: 'Network input/output traffic',
      unit: 'MB/s',
      warningThreshold: '50MB/s',
      criticalThreshold: '100MB/s',
      frequency: 'Real-time',
    },
    {
      name: 'Request Rate',
      description: 'HTTP requests per second',
      unit: 'req/s',
      warningThreshold: '500',
      criticalThreshold: '1000',
      frequency: 'Real-time',
    },
    {
      name: 'Response Time',
      description: 'Average HTTP response time',
      unit: 'ms',
      warningThreshold: '500ms',
      criticalThreshold: '2000ms',
      frequency: 'Real-time',
    },
  ]

  const securityFeatures = [
    {
      name: 'Authentication',
      description: 'User access control and identity verification',
      methods: 'Password, OAuth, LDAP, SAML, 2FA',
      complexity: 'Medium',
      enforcement: 'Mandatory',
    },
    {
      name: 'Authorization',
      description: 'Permission and role management',
      methods: 'RBAC, ABAC, ACL',
      complexity: 'High',
      enforcement: 'Configurable',
    },
    {
      name: 'Audit Logging',
      description: 'Complete activity tracking and event logging',
      retention: '1 year',
      complexity: 'Medium',
      enforcement: 'Automatic',
    },
    {
      name: 'Data Encryption',
      description: 'Protect data at rest and in transit',
      methods: 'AES-256, TLS 1.3, End-to-end',
      complexity: 'High',
      enforcement: 'Default',
    },
    {
      name: 'Network Security',
      description: 'Network-level protection and isolation',
      features: 'Firewall, VPN, DDoS protection, Isolation',
      complexity: 'High',
      enforcement: 'Configurable',
    },
  ]

  const integrations = [
    {
      name: 'Git Providers',
      description: 'Source code management integration',
      providers: 'GitHub, GitLab, Bitbucket, Gitea',
      complexity: 'Low',
      useCases: 'Development, CI/CD, Automation',
    },
    {
      name: 'CI/CD Systems',
      description: 'Continuous integration and deployment',
      providers: 'Jenkins, GitHub Actions, GitLab CI, CircleCI',
      complexity: 'Medium',
      useCases: 'Automation, DevOps, Teams',
    },
    {
      name: 'Monitoring & Observability',
      description: 'System and application monitoring',
      providers: 'Prometheus, Grafana, Datadog, New Relic, Sentry',
      complexity: 'Medium',
      useCases: 'Operations, Performance, Troubleshooting',
    },
    {
      name: 'Logging Systems',
      description: 'Centralized log management',
      providers: 'ELK Stack, Splunk, Graylog, Loki, Fluentd',
      complexity: 'Medium',
      useCases: 'Operations, Security, Compliance',
    },
    {
      name: 'Notification Services',
      description: 'Alert and notification delivery',
      providers: 'Slack, Email, SMS, Webhook, PagerDuty',
      complexity: 'Low',
      useCases: 'Operations, Teams, Alerting',
    },
  ]

  const performanceOptimization = [
    {
      name: 'Caching',
      description: 'Multi-level caching strategies',
      types: 'Application, Database, CDN, Browser, Redis',
      complexity: 'Medium',
      improvementPotential: '50-80%',
    },
    {
      name: 'Load Balancing',
      description: 'Intelligent traffic distribution',
      types: 'Round Robin, Least Connections, IP Hash, Weighted',
      complexity: 'High',
      improvementPotential: 'Scales linearly',
    },
    {
      name: 'Database Optimization',
      description: 'Database performance tuning',
      techniques: 'Indexing, Query optimization, Connection pooling, Sharding',
      complexity: 'High',
      improvementPotential: '50-70%',
    },
    {
      name: 'CDN Integration',
      description: 'Content delivery network',
      providers: 'Cloudflare, AWS CloudFront, Fastly, Akamai',
      complexity: 'Medium',
      improvementPotential: '40-60%',
    },
    {
      name: 'Auto-scaling',
      description: 'Automatic resource scaling',
      types: 'Horizontal, Vertical, Scheduled, Predictive',
      complexity: 'High',
      improvementPotential: '100-300% capacity',
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <section className={`${panelClass} p-8`}>
              <h2 className="font-display mb-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                Welcome to Dokploy Documentation
              </h2>
              <p className="mb-4 text-lg text-zinc-400">
                Dokploy is a modern, open-source platform for deploying and managing applications and databases.
                This documentation covers the deployment surface, operational model, and the day-two details that
                usually get scattered across separate tools.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'Quick Start',
                    description: 'Get a service live fast, then expand into more advanced controls only when you need them.',
                  },
                  {
                    title: 'Full Documentation',
                    description: 'Work through application deployment, databases, monitoring, integrations, and recovery paths.',
                  },
                  {
                    title: 'Advanced Configuration',
                    description: 'Cover custom build systems, hardened setups, and the controls that matter in production.',
                  },
                  {
                    title: 'Best Practices',
                    description: 'Use patterns that stay maintainable under traffic, team growth, and operational pressure.',
                  },
                ].map((item) => (
                  <div key={item.title} className={`${cardClass} p-6`}>
                    <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-semibold text-white">Key Features</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  { iconClass: 'bx bx-globe', title: 'Multi-Platform', desc: 'Deploy to cloud providers or self-hosted infrastructure without changing the core workflow.' },
                  { iconClass: 'bx bxl-docker', title: 'Docker Native', desc: 'Run containerized applications and Compose stacks in the same operational surface.' },
                  { iconClass: 'bx bx-lock', title: 'Secure by Default', desc: 'Keep encryption, access control, and traceability close to the deployment path.' },
                  { iconClass: 'bx bx-line-chart', title: 'Full Monitoring', desc: 'Track system health, service metrics, and deployment behavior from one place.' },
                  { iconClass: 'bx bx-bolt', title: 'High Performance', desc: 'Work with scaling, caching, and runtime tuning instead of fixed defaults.' },
                  { iconClass: 'bx bx-dollar', title: 'Cost Effective', desc: 'Keep resource usage visible so teams can scale intentionally rather than reactively.' },
                ].map((feature) => (
                  <div key={feature.title} className={`${cardClass} p-6`}>
                    <BoxIcon
                      iconClass={feature.iconClass}
                      className="mb-3 block text-3xl text-[#6d73ff]"
                    />
                    <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )

      case 'deployment':
        return (
          <DataTable
            title="Deployment Methods"
            description="Different deployment methods available in Dokploy with complexity levels and use cases."
            columns={['Name', 'Description', 'Complexity', 'Supported Languages']}
            data={deploymentMethods}
            iconClass="bx bx-rocket"
          />
        )

      case 'databases':
        return (
          <DataTable
            title="Supported Databases"
            description="Supported databases with backup, monitoring, and replication features."
            columns={['Name', 'Description', 'Version', 'Backup Support', 'Monitoring Support', 'Replication Support']}
            data={databases}
            iconClass="bx bx-data"
          />
        )

      case 'build':
        return (
          <DataTable
            title="Build Methods"
            description="Available build methods for compiling and preparing your applications."
            columns={['Name', 'Description', 'Complexity', 'Use Cases', 'Speed', 'Cache Support']}
            data={buildMethods}
            iconClass="bx bx-wrench"
          />
        )

      case 'domains':
        return (
          <DataTable
            title="Domain & Network Management"
            description="Manage custom domains, SSL certificates, redirects, headers, and port configuration."
            columns={['Name', 'Description', 'Complexity', 'Use Cases']}
            data={domainFeatures}
            iconClass="bx bx-globe"
          />
        )

      case 'backup':
        return (
          <div className="space-y-8">
            <section className={`${cardClass} p-6`}>
              <h3 className="mb-2 text-xl font-semibold text-white">Backup Strategy</h3>
              <p className="text-zinc-400">
                Dokploy supports scheduled backups, multiple storage targets, and operational recovery flows without
                forcing a separate tooling surface for the basics.
              </p>
            </section>
            <DataTable
              title="Backup Destinations"
              description="Supported cloud and self-hosted storage destinations for database and application backups."
              columns={['Name', 'Description', 'Complexity', 'Use Cases', 'Automated Backup', 'Encryption']}
              data={backupDestinations}
              iconClass="bx bx-cloud"
            />
          </div>
        )

      case 'monitoring':
        return (
          <div className="space-y-8">
            <section className={`${cardClass} p-6`}>
              <h3 className="mb-2 text-xl font-semibold text-white">Monitoring & Analytics</h3>
              <p className="text-zinc-400">
                Real-time monitoring is only useful when teams can see thresholds, trends, and service pressure
                without bouncing between disconnected dashboards.
              </p>
            </section>
            <DataTable
              title="Monitored Metrics"
              description="System and application metrics with configurable thresholds."
              columns={['Name', 'Description', 'Unit', 'Warning Threshold', 'Critical Threshold', 'Frequency']}
              data={monitoringMetrics}
              iconClass="bx bx-line-chart"
            />
          </div>
        )

      case 'security':
        return (
          <div className="space-y-8">
            <section className={`${cardClass} p-6`}>
              <h3 className="mb-2 text-xl font-semibold text-white">Security-First Architecture</h3>
              <p className="text-zinc-400">
                Dokploy is structured around access control, encryption, and operational traceability instead of
                treating security as an optional add-on.
              </p>
            </section>
            <DataTable
              title="Security Features"
              description="Core security features for protecting applications, data, and infrastructure."
              columns={['Name', 'Description', 'Methods', 'Complexity', 'Enforcement']}
              data={securityFeatures}
              iconClass="bx bx-lock"
            />
          </div>
        )

      case 'integration':
        return (
          <div className="space-y-8">
            <section className={`${cardClass} p-6`}>
              <h3 className="mb-2 text-xl font-semibold text-white">Integration Ecosystem</h3>
              <p className="text-zinc-400">
                The platform works best when it fits the CI, monitoring, and notification stack the team already runs.
              </p>
            </section>
            <DataTable
              title="Supported Integrations"
              description="Third-party services and tools that integrate with Dokploy."
              columns={['Name', 'Description', 'Providers', 'Complexity', 'Use Cases']}
              data={integrations}
              iconClass="bx bx-link"
            />
          </div>
        )

      case 'performance':
        return (
          <div className="space-y-8">
            <section className={`${cardClass} p-6`}>
              <h3 className="mb-2 text-xl font-semibold text-white">Performance Optimization</h3>
              <p className="text-zinc-400">
                Runtime performance improves when scaling, caching, and data paths are treated as part of the deployment design.
              </p>
            </section>
            <DataTable
              title="Performance Features"
              description="Tools and techniques for optimizing application and database performance."
              columns={['Name', 'Description', 'Types', 'Complexity', 'Improvement Potential']}
              data={performanceOptimization}
              iconClass="bx bx-bolt"
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pb-12 text-zinc-100 sm:pb-16">
      <div className="relative overflow-hidden border-b border-white/10 surface-dark px-4 py-10 sm:px-6 sm:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(109,115,255,0.2),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-display mb-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Dokploy Documentation
          </h1>
          <p className="text-base text-zinc-400 sm:text-lg">
            Complete guide to deploying, managing, and scaling your applications.
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-x-auto">
            <div className="flex gap-2 py-3 sm:py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={navButtonClass(activeTab === tab.id)}
                >
                  <BoxIcon iconClass={tab.icon} className="text-lg" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {renderContent()}
      </div>
    </div>
  )
}
