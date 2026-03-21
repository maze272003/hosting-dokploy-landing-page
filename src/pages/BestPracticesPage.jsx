import { useState } from 'react'
import BoxIcon from '../components/BoxIcon'

export default function BestPracticesPage() {
  const [activeCategory, setActiveCategory] = useState('deployment')

  const panelClass =
    'rounded-[30px] border border-white/10 panel-dark shadow-[0_28px_90px_rgba(0,0,0,0.42)]'
  const navButtonClass = (isActive) =>
    `whitespace-nowrap flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm ${
      isActive
        ? 'bg-white text-black shadow-[0_12px_40px_rgba(255,255,255,0.12)]'
        : 'border border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
    }`

  const categories = [
    { id: 'deployment', label: 'Deployment', iconClass: 'bx bx-rocket' },
    { id: 'security', label: 'Security', iconClass: 'bx bx-shield-quarter' },
    { id: 'performance', label: 'Performance', iconClass: 'bx bx-tachometer' },
    { id: 'operation', label: 'Operations', iconClass: 'bx bx-cog' },
    { id: 'devops', label: 'DevOps', iconClass: 'bx bx-git-branch' },
    { id: 'architecture', label: 'Architecture', iconClass: 'bx bx-buildings' },
  ]

  const deploymentBestPractices = [
    {
      practice: 'Use Environment-specific Configuration',
      description: 'Maintain separate config for development, staging, and production',
      implementation: 'Use .env files with environment variables, never hardcode secrets',
      benefits: 'Security, flexibility, consistency across environments',
      complexity: 'Low',
    },
    {
      practice: 'Implement Blue-Green Deployment',
      description: 'Run two identical production environments, switch traffic between them',
      implementation: 'Deploy to inactive environment, run tests, then route traffic',
      benefits: 'Zero downtime, easy rollback, testing in production environment',
      complexity: 'High',
    },
    {
      practice: 'Use Version Control for Everything',
      description: 'Store infrastructure code, configuration, and application code in Git',
      implementation: 'GitOps workflow with automatic deployments from repo',
      benefits: 'Auditability, traceability, collaboration, disaster recovery',
      complexity: 'High',
    },
    {
      practice: 'Automate Testing Before Deployment',
      description: 'Run full test suite (unit, integration, e2e) before production',
      implementation: 'CI/CD pipeline with automated tests on every push',
      benefits: 'Catches bugs early, prevents regressions, quick feedback',
      complexity: 'Medium',
    },
    {
      practice: 'Implement Gradual Rollouts',
      description: 'Deploy to percentage of users gradually (canary deployment)',
      implementation: 'Route 5% to 10% to 50% to 100% based on metrics',
      benefits: 'Reduces blast radius, allows quick rollback, real-world testing',
      complexity: 'High',
    },
  ]

  const securityBestPractices = [
    {
      practice: 'Never Commit Secrets to Version Control',
      description: 'Keep API keys, passwords, tokens in secure secret management',
      implementation: 'Use Dokploy secrets, HashiCorp Vault, AWS Secrets Manager',
      benefits: 'Prevents credential exposure, controls access, enables rotation',
      complexity: 'Low',
    },
    {
      practice: 'Implement RBAC (Role-Based Access Control)',
      description: 'Grant users minimum required permissions for their role',
      implementation: 'Define roles (admin, developer, viewer) with specific permissions',
      benefits: 'Principle of least privilege, easier access management, audit trails',
      complexity: 'Medium',
    },
    {
      practice: 'Enable Audit Logging for All Actions',
      description: 'Log all user actions and system events for compliance and debugging',
      implementation: 'Enable audit logging, store logs in centralized location (ELK, Splunk)',
      benefits: 'Compliance, security investigation, debugging, accountability',
      complexity: 'Medium',
    },
    {
      practice: 'Use HTTPS Everywhere',
      description: 'Encrypt all traffic between clients and servers',
      implementation: "Enable SSL/TLS, use automatic certificates (Let's Encrypt)",
      benefits: 'Data protection in transit, trust indicators, SEO benefits',
      complexity: 'Low',
    },
    {
      practice: 'Implement Network Segmentation',
      description: 'Isolate services and databases in separate network segments',
      implementation: 'Use VPC, security groups, firewalls, network policies',
      benefits: 'Limits lateral movement, defense in depth, compliance ready',
      complexity: 'High',
    },
    {
      practice: 'Keep Software Updated',
      description: 'Regularly patch applications and infrastructure',
      implementation: 'Automated dependency updates, security patches, OS updates',
      benefits: 'Reduces vulnerabilities, performance improvements, compliance',
      complexity: 'Medium',
    },
  ]

  const performanceBestPractices = [
    {
      practice: 'Implement Caching Strategy',
      description: 'Cache frequently accessed data at multiple levels',
      implementation: 'Redis for session/app cache, CDN for static content, database query cache',
      benefits: 'Faster response times, reduced database load, lower costs',
      complexity: 'Medium',
    },
    {
      practice: 'Database Query Optimization',
      description: 'Write efficient queries, use proper indexing',
      implementation: 'Use EXPLAIN plans, create indexes on frequently filtered columns, connection pooling',
      benefits: 'Faster queries, reduced CPU/memory, better scalability',
      complexity: 'Medium',
    },
    {
      practice: 'Use Content Delivery Networks (CDN)',
      description: 'Serve static content from edge locations near users',
      implementation: 'Cloudflare, AWS CloudFront, or similar service',
      benefits: 'Faster loads, reduced origin load, geographically distributed',
      complexity: 'Low',
    },
    {
      practice: 'Implement Load Balancing',
      description: 'Distribute traffic across multiple application instances',
      implementation: 'Round-robin, least connections, or IP-hash algorithms',
      benefits: 'Handles high traffic, prevents single point of failure, easy scaling',
      complexity: 'Medium',
    },
    {
      practice: 'Monitor and Profile Performance',
      description: 'Continuously monitor performance metrics and profile bottlenecks',
      implementation: 'Use APM tools (New Relic, Datadog), profilers, custom metrics',
      benefits: 'Identify bottlenecks, data-driven optimization, prevents regressions',
      complexity: 'Medium',
    },
    {
      practice: 'Optimize Asset Compression',
      description: 'Compress HTML, CSS, JavaScript, and images',
      implementation: 'GZIP compression, minification, image optimization (WebP)',
      benefits: 'Smaller payloads, faster downloads, reduced bandwidth costs',
      complexity: 'Low',
    },
  ]

  const operationsBestPractices = [
    {
      practice: 'Backup Everything Regularly',
      description: 'Automated, tested backups for all critical data',
      implementation: 'Daily full backups + hourly incremental, offsite storage, test restores',
      benefits: 'Disaster recovery, data protection, business continuity',
      complexity: 'Medium',
    },
    {
      practice: 'Implement Monitoring and Alerting',
      description: 'Monitor critical metrics and alert on anomalies',
      implementation: 'Prometheus/Grafana for metrics, alert on thresholds, incident escalation',
      benefits: 'Early problem detection, quick response, less downtime',
      complexity: 'Medium',
    },
    {
      practice: 'Maintain Infrastructure as Code',
      description: 'Define all infrastructure in code for reproducibility',
      implementation: 'Terraform, CloudFormation, or Docker Compose',
      benefits: 'Consistency, version control, disaster recovery, easy scaling',
      complexity: 'High',
    },
    {
      practice: 'Document Everything',
      description: 'Maintain thorough documentation of systems and processes',
      implementation: 'Runbooks, architecture diagrams, deployment guides, troubleshooting docs',
      benefits: 'Easier onboarding, faster resolution, knowledge preservation',
      complexity: 'Medium',
    },
    {
      practice: 'Implement Disaster Recovery Plan',
      description: 'Have a tested plan for recovering from major incidents',
      implementation: 'RTO/RPO targets, failover procedures, regular drills',
      benefits: 'Business continuity, faster recovery, confidence',
      complexity: 'High',
    },
  ]

  const devopsBestPractices = [
    {
      practice: 'Implement CI/CD Pipeline',
      description: 'Automate build, test, and deployment processes',
      implementation: 'GitHub Actions, Jenkins, GitLab CI, Circle CI',
      benefits: 'Faster releases, fewer manual errors, consistent deployments',
      complexity: 'Medium',
    },
    {
      practice: 'Containerize Applications',
      description: 'Use Docker containers for consistent deployment',
      implementation: 'Create Dockerfile, use container registries, orchestrate with Docker Compose',
      benefits: 'Consistency across environments, easy scaling, simplified deployments',
      complexity: 'Medium',
    },
    {
      practice: 'Implement GitOps',
      description: 'Use Git as single source of truth for infrastructure and apps',
      implementation: 'Use ArgoCD, Flux, or similar tools',
      benefits: 'Simplified deployments, pull request based workflow, auditability',
      complexity: 'High',
    },
    {
      practice: 'Use Infrastructure as Code',
      description: 'Define infrastructure declaratively in code',
      implementation: 'Terraform, Pulumi, CloudFormation, Helm charts',
      benefits: 'Version control, reproducibility, scalability, disaster recovery',
      complexity: 'High',
    },
  ]

  const architectureBestPractices = [
    {
      practice: 'Design for Scalability',
      description: 'Build systems that grow with demand',
      implementation: 'Stateless applications, separate database, use managed services',
      benefits: 'Handles growth, no reengineering, cost efficient',
      complexity: 'Medium',
    },
    {
      practice: 'Implement Microservices (When Appropriate)',
      description: 'Break monolith into independently deployable services',
      implementation: 'Service boundaries, API contracts, orchestration',
      benefits: 'Independent scaling, team autonomy, faster updates',
      complexity: 'High',
    },
    {
      practice: 'Build for Resilience',
      description: 'Design systems to handle failures gracefully',
      implementation: 'Circuit breakers, retries, graceful degradation, health checks',
      benefits: 'Higher availability, better user experience, reduced cascading failures',
      complexity: 'High',
    },
    {
      practice: 'Use Database Replication',
      description: 'Ensure data availability with master-replica setup',
      implementation: 'Configure primary-replica replication, automatic failover',
      benefits: 'High availability, read scaling, disaster recovery',
      complexity: 'Medium',
    },
  ]

  const getBestPractices = () => {
    switch (activeCategory) {
      case 'deployment':
        return deploymentBestPractices
      case 'security':
        return securityBestPractices
      case 'performance':
        return performanceBestPractices
      case 'operation':
        return operationsBestPractices
      case 'devops':
        return devopsBestPractices
      case 'architecture':
        return architectureBestPractices
      default:
        return []
    }
  }

  const renderContent = () => {
    const practices = getBestPractices()

    return (
      <div className="space-y-8">
        {practices.map((practice) => (
          <div key={practice.practice} className={`${panelClass} overflow-hidden`}>
            <div className="border-b border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6">
              <h3 className="text-lg font-semibold text-white sm:text-xl">{practice.practice}</h3>
              <p className="mt-1 text-zinc-400">{practice.description}</p>
            </div>

            <div className="space-y-4 px-4 py-4 sm:px-6">
              <div>
                <h4 className="mb-2 font-semibold text-zinc-100">Implementation</h4>
                <p className="text-zinc-400">{practice.implementation}</p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-zinc-100">Benefits</h4>
                <p className="text-zinc-400">{practice.benefits}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-zinc-200">Complexity:</span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${
                    practice.complexity === 'High'
                      ? 'border-rose-400/20 bg-rose-500/15 text-rose-200'
                      : practice.complexity === 'Medium'
                      ? 'border-amber-400/20 bg-amber-500/15 text-amber-200'
                      : 'border-emerald-400/20 bg-emerald-500/15 text-emerald-200'
                  }`}
                >
                  {practice.complexity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-12 text-zinc-100 sm:pb-16">
      <div className="relative overflow-hidden border-b border-white/10 surface-dark px-4 py-10 sm:px-6 sm:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(255,216,77,0.16),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-display mb-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Best Practices
          </h1>
          <p className="text-base text-zinc-400 sm:text-lg">
            Proven strategies for deployment, security, performance, and operations.
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-x-auto">
            <div className="flex gap-2 py-3 sm:py-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={navButtonClass(activeCategory === cat.id)}
                >
                  <BoxIcon iconClass={cat.iconClass} className="text-lg" />
                  <span className="hidden sm:inline">{cat.label}</span>
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
