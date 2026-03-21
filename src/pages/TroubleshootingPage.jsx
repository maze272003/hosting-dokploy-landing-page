import { useState } from 'react'
import BoxIcon from '../components/BoxIcon'

export default function TroubleshootingPage() {
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
    { id: 'deployment', label: 'Deployment Issues', iconClass: 'bx bx-rocket' },
    { id: 'performance', label: 'Performance', iconClass: 'bx bx-tachometer' },
    { id: 'database', label: 'Database', iconClass: 'bx bx-server' },
    { id: 'networking', label: 'Networking', iconClass: 'bx bx-globe-alt' },
    { id: 'security', label: 'Security', iconClass: 'bx bx-lock-alt' },
    { id: 'backup', label: 'Backup & Recovery', iconClass: 'bx bx-save' },
  ]

  const deploymentIssues = [
    {
      issue: 'Build fails with timeout error',
      symptoms: 'Build process stops after N minutes, Docker build hangs',
      rootCauses: 'Large dependencies, network issues, slow resources',
      solutions: 'Increase timeout, optimize Dockerfile, check network, upgrade resources',
      severity: 'High',
    },
    {
      issue: 'Application container crashes immediately',
      symptoms: 'Container starts and exits, exit code 1',
      rootCauses: 'Missing env vars, missing dependencies, wrong entry point',
      solutions: 'Check logs, verify env vars, test locally, fix startup script',
      severity: 'Critical',
    },
    {
      issue: 'Port already in use',
      symptoms: 'Cannot bind to port, "Address already in use"',
      rootCauses: 'Another app using port, not released from previous run',
      solutions: 'Use different port, kill conflicting process, check port mapping',
      severity: 'High',
    },
    {
      issue: 'Deployment stuck in "deploying" state',
      symptoms: 'Deploy progress stuck, no updates for minutes',
      rootCauses: 'Resource exhaustion, build hang, network issue',
      solutions: 'Cancel and retry, check system resources, review logs, increase resources',
      severity: 'Medium',
    },
    {
      issue: 'Health check failing repeatedly',
      symptoms: 'Container fails health checks, restart loop',
      rootCauses: 'App not responding to health checks, slow startup',
      solutions: 'Increase health check timeout, fix app response, check logs',
      severity: 'High',
    },
  ]

  const performanceIssues = [
    {
      issue: 'Application response slow',
      symptoms: 'API responses take more than 1 second, pages slow to load',
      rootCauses: 'High CPU or memory usage, slow queries, no caching',
      solutions: 'Optimize code, add caching, scale resources, optimize queries',
      severity: 'Medium',
    },
    {
      issue: 'High CPU usage',
      symptoms: 'CPU consistently above 80%, notification alerts',
      rootCauses: 'Inefficient code, memory leaks, high traffic, inefficient queries',
      solutions: 'Profile app, fix leaks, optimize algorithms, enable auto-scaling',
      severity: 'High',
    },
    {
      issue: 'High memory usage',
      symptoms: 'Memory approaching limit, crashes when full',
      rootCauses: 'Memory leaks, oversized cache, large datasets',
      solutions: 'Fix leaks, limit cache size, implement pagination, upgrade resources',
      severity: 'High',
    },
    {
      issue: 'High disk usage',
      symptoms: 'Disk space warning, writes failing',
      rootCauses: 'Large logs, database bloat, cache accumulation',
      solutions: 'Clean up logs, optimize database, enable rotation, scale storage',
      severity: 'High',
    },
    {
      issue: 'High network I/O',
      symptoms: 'Bandwidth usage very high, network saturation',
      rootCauses: 'Large file transfers, uncompressed responses, inefficient queries',
      solutions: 'Enable compression, limit transfer size, optimize queries, use CDN',
      severity: 'Medium',
    },
  ]

  const databaseIssues = [
    {
      issue: 'Cannot connect to database',
      symptoms: 'Connection refused, timeout, authentication failed',
      rootCauses: 'Wrong credentials, network issue, database down',
      solutions: 'Verify connection string, check network, restart database, inspect firewall',
      severity: 'Critical',
    },
    {
      issue: 'Database performance degradation',
      symptoms: 'Queries are slow, response times climbing',
      rootCauses: 'Missing indexes, large scans, high concurrent connections',
      solutions: 'Add indexes, optimize queries, increase pool size, analyze slow queries',
      severity: 'High',
    },
    {
      issue: 'Database disk space full',
      symptoms: 'Insert errors, database unresponsive',
      rootCauses: 'Large tables, unoptimized data, stale records not cleaned up',
      solutions: 'Archive old data, vacuum database, optimize storage, upgrade volume size',
      severity: 'Critical',
    },
    {
      issue: 'Backup failures',
      symptoms: 'Backup process fails, errors appear in logs',
      rootCauses: 'Invalid credentials, storage full, permission issues',
      solutions: 'Verify credentials, check storage space, review permissions, test connectivity',
      severity: 'High',
    },
    {
      issue: 'Restore from backup fails',
      symptoms: 'Restore operation fails or hangs',
      rootCauses: 'Corrupted backup, version mismatch, insufficient resources',
      solutions: 'Verify backup integrity, check version compatibility, upgrade resources, test restore flow',
      severity: 'Critical',
    },
  ]

  const networkingIssues = [
    {
      issue: 'Domain not resolving',
      symptoms: 'Cannot reach domain, DNS lookup fails',
      rootCauses: 'DNS not pointing to server, DNS propagation delay',
      solutions: 'Check DNS records, verify A/AAAA records, wait for propagation, test with nslookup',
      severity: 'High',
    },
    {
      issue: 'SSL certificate not issued',
      symptoms: 'Certificate not generated, HTTPS not working',
      rootCauses: 'DNS not ready, challenge validation failing',
      solutions: 'Wait for propagation, verify domain ownership, confirm DNS records',
      severity: 'High',
    },
    {
      issue: 'CORS errors in browser',
      symptoms: '"Access-Control-Allow-Origin" errors in the console',
      rootCauses: 'CORS headers not configured, wrong origin allowed',
      solutions: 'Configure CORS headers, check allowed origins, whitelist the correct frontend',
      severity: 'Medium',
    },
    {
      issue: 'Firewall blocking traffic',
      symptoms: 'Cannot reach application, timeout errors',
      rootCauses: 'Port blocked by firewall, network rules, or security group misconfiguration',
      solutions: 'Open the port, review rules, verify network ACLs and ingress settings',
      severity: 'High',
    },
  ]

  const securityIssues = [
    {
      issue: 'Unauthorized access detected',
      symptoms: 'Suspicious login attempts, unauthorized access logs',
      rootCauses: 'Weak credentials, exposed secrets, or a security vulnerability',
      solutions: 'Rotate secrets, change passwords, scan for vulnerabilities, enable 2FA',
      severity: 'Critical',
    },
    {
      issue: 'SSL certificate warning',
      symptoms: 'Browser shows untrusted or invalid certificate warning',
      rootCauses: 'Self-signed certificate, expired cert, domain mismatch',
      solutions: 'Get a valid certificate, update DNS, regenerate the certificate',
      severity: 'High',
    },
    {
      issue: 'DDoS attack suspected',
      symptoms: 'Sudden traffic spike, service degradation, high resource usage',
      rootCauses: 'DDoS traffic, organic traffic spike, or resource exhaustion',
      solutions: 'Enable DDoS protection, rate limit, inspect traffic logs, scale carefully',
      severity: 'Critical',
    },
  ]

  const backupIssues = [
    {
      issue: 'Backup storage access denied',
      symptoms: 'Backup fails with authentication error',
      rootCauses: 'Invalid credentials, expired keys, wrong permissions',
      solutions: 'Verify credentials, refresh access keys, confirm bucket permissions',
      severity: 'High',
    },
    {
      issue: 'Backup storage full',
      symptoms: 'Backup fails with a space error',
      rootCauses: 'Old backups not deleted, insufficient quota',
      solutions: 'Delete old backups, increase quota, implement a retention policy',
      severity: 'High',
    },
    {
      issue: 'Restore process slow',
      symptoms: 'Restore takes hours to complete',
      rootCauses: 'Large backup file, slow network, limited resources',
      solutions: 'Upgrade resources, increase bandwidth, test with a smaller restore first',
      severity: 'Medium',
    },
  ]

  const getIssuesForCategory = () => {
    switch (activeCategory) {
      case 'deployment':
        return deploymentIssues
      case 'performance':
        return performanceIssues
      case 'database':
        return databaseIssues
      case 'networking':
        return networkingIssues
      case 'security':
        return securityIssues
      case 'backup':
        return backupIssues
      default:
        return []
    }
  }

  const renderContent = () => {
    const issues = getIssuesForCategory()

    return (
      <div className="grid gap-6">
        {issues.map((issue) => (
          <div key={issue.issue} className={`${panelClass} overflow-hidden`}>
            <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(248,113,113,0.14),rgba(255,255,255,0.03))] px-4 py-4 sm:px-6">
              <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold text-white sm:text-xl">
                {issue.issue}
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${
                    issue.severity === 'Critical'
                      ? 'border-rose-400/20 bg-rose-500/20 text-rose-100'
                      : issue.severity === 'High'
                      ? 'border-orange-400/20 bg-orange-500/20 text-orange-100'
                      : 'border-amber-400/20 bg-amber-500/20 text-amber-100'
                  }`}
                >
                  {issue.severity}
                </span>
              </h3>
            </div>

            <div className="space-y-4 px-4 py-4 sm:px-6">
              <div>
                <h4 className="mb-2 font-semibold text-zinc-100">Symptoms</h4>
                <p className="text-zinc-400">{issue.symptoms}</p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-zinc-100">Root Causes</h4>
                <p className="text-zinc-400">{issue.rootCauses}</p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-zinc-100">Solutions</h4>
                <p className="text-zinc-400">{issue.solutions}</p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <h4 className="mb-2 font-semibold text-zinc-100">Tips</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
                  <li>Check the application logs first.</li>
                  <li>Review system metrics before changing configuration.</li>
                  <li>Test fixes in staging when the issue is reproducible.</li>
                  <li>Keep a record of the exact change that resolved the incident.</li>
                </ul>
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
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.18),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-display mb-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Troubleshooting Guide
          </h1>
          <p className="text-base text-zinc-400 sm:text-lg">
            Solutions for common deployment, networking, database, and operational issues.
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
