import { useState } from 'react'
import BoxIcon from '../components/BoxIcon'
import DataTable from '../components/DataTable'

export default function APIReferencePage() {
  const [activeResource, setActiveResource] = useState('applications')

  const panelClass =
    'rounded-[30px] border border-white/10 panel-dark shadow-[0_28px_90px_rgba(0,0,0,0.42)]'
  const cardClass =
    'rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.35)]'
  const codeBlockClass =
    'overflow-x-auto rounded-[20px] border border-white/10 bg-black/60 p-4 font-mono text-sm text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
  const navButtonClass = (isActive) =>
    `whitespace-nowrap flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
      isActive
        ? 'bg-white text-black shadow-[0_12px_40px_rgba(255,255,255,0.12)]'
        : 'border border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
    }`

  const resources = [
    { id: 'applications', label: 'Applications', iconClass: 'bx bx-rocket' },
    { id: 'databases', label: 'Databases', iconClass: 'bx bx-server' },
    { id: 'domains', label: 'Domains', iconClass: 'bx bx-globe-alt' },
    { id: 'services', label: 'Services', iconClass: 'bx bx-cog' },
    { id: 'monitoring', label: 'Monitoring', iconClass: 'bx bx-signal-5' },
    { id: 'auth', label: 'Authentication', iconClass: 'bx bx-lock-alt' },
  ]

  const applicationEndpoints = [
    {
      endpoint: 'GET /api/applications',
      description: 'List all applications',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '30 seconds',
    },
    {
      endpoint: 'POST /api/applications',
      description: 'Create new application',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/applications/:id',
      description: 'Get application details',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '30 seconds',
    },
    {
      endpoint: 'PUT /api/applications/:id',
      description: 'Update application configuration',
      authentication: 'Required',
      rateLimit: '20 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'DELETE /api/applications/:id',
      description: 'Delete application',
      authentication: 'Required',
      rateLimit: '5 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'POST /api/applications/:id/deploy',
      description: 'Trigger application deployment',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/applications/:id/logs',
      description: 'Get application logs',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '1 minute',
    },
    {
      endpoint: 'POST /api/applications/:id/restart',
      description: 'Restart application',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
  ]

  const databaseEndpoints = [
    {
      endpoint: 'GET /api/databases',
      description: 'List all databases',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '30 seconds',
    },
    {
      endpoint: 'POST /api/databases',
      description: 'Create new database',
      authentication: 'Required',
      rateLimit: '5 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/databases/:id',
      description: 'Get database details and stats',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '1 minute',
    },
    {
      endpoint: 'PUT /api/databases/:id',
      description: 'Update database configuration',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'DELETE /api/databases/:id',
      description: 'Delete database',
      authentication: 'Required',
      rateLimit: '5 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'POST /api/databases/:id/backup',
      description: 'Create manual backup',
      authentication: 'Required',
      rateLimit: '5 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/databases/:id/backups',
      description: 'List database backups',
      authentication: 'Required',
      rateLimit: '50 req/min',
      cacheTime: '5 minutes',
    },
    {
      endpoint: 'POST /api/databases/:id/restore',
      description: 'Restore from backup',
      authentication: 'Required',
      rateLimit: '5 req/min',
      cacheTime: 'No cache',
    },
  ]

  const domainEndpoints = [
    {
      endpoint: 'GET /api/domains',
      description: 'List all domains',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '1 minute',
    },
    {
      endpoint: 'POST /api/domains',
      description: 'Add new domain',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/domains/:id',
      description: 'Get domain details',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '1 minute',
    },
    {
      endpoint: 'DELETE /api/domains/:id',
      description: 'Remove domain',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'POST /api/domains/:id/certificate',
      description: 'Request SSL certificate',
      authentication: 'Required',
      rateLimit: '5 req/min',
      cacheTime: 'No cache',
    },
  ]

  const serviceEndpoints = [
    {
      endpoint: 'GET /api/services/system',
      description: 'Get system information',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '5 minutes',
    },
    {
      endpoint: 'GET /api/services/health',
      description: 'Health check endpoint',
      authentication: 'Optional',
      rateLimit: 'Unlimited',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/services/stats',
      description: 'Get system resources stats',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: 'Real-time',
    },
    {
      endpoint: 'GET /api/services/version',
      description: 'Get Dokploy version',
      authentication: 'Optional',
      rateLimit: 'Unlimited',
      cacheTime: '1 hour',
    },
  ]

  const monitoringEndpoints = [
    {
      endpoint: 'GET /api/monitoring/metrics',
      description: 'Get system and application metrics',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: 'Real-time',
    },
    {
      endpoint: 'GET /api/monitoring/alerts',
      description: 'List configured alerts',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '1 minute',
    },
    {
      endpoint: 'POST /api/monitoring/alerts',
      description: 'Create new alert',
      authentication: 'Required',
      rateLimit: '20 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/monitoring/logs',
      description: 'Get system logs',
      authentication: 'Required',
      rateLimit: '50 req/min',
      cacheTime: '1 minute',
    },
  ]

  const authEndpoints = [
    {
      endpoint: 'POST /api/auth/login',
      description: 'User login, returns JWT token',
      authentication: 'Optional (Basic auth)',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'POST /api/auth/logout',
      description: 'User logout, invalidates token',
      authentication: 'Required',
      rateLimit: 'Unlimited',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'POST /api/auth/refresh',
      description: 'Refresh authentication token',
      authentication: 'Required (expired token)',
      rateLimit: '50 req/min',
      cacheTime: 'No cache',
    },
    {
      endpoint: 'GET /api/auth/me',
      description: 'Get current user information',
      authentication: 'Required',
      rateLimit: '100 req/min',
      cacheTime: '5 minutes',
    },
    {
      endpoint: 'POST /api/auth/api-keys',
      description: 'Create API key for programmatic access',
      authentication: 'Required',
      rateLimit: '10 req/min',
      cacheTime: 'No cache',
    },
  ]

  const getEndpoints = () => {
    switch (activeResource) {
      case 'applications':
        return applicationEndpoints
      case 'databases':
        return databaseEndpoints
      case 'domains':
        return domainEndpoints
      case 'services':
        return serviceEndpoints
      case 'monitoring':
        return monitoringEndpoints
      case 'auth':
        return authEndpoints
      default:
        return []
    }
  }

  const renderContent = () => {
    const endpoints = getEndpoints()

    return (
      <div className="space-y-8">
        <DataTable
          title="API Endpoints"
          description={`REST API endpoints for the ${resources.find((resource) => resource.id === activeResource)?.label} resource.`}
          columns={['Endpoint', 'Description', 'Authentication', 'Rate Limit', 'Cache Time']}
          data={endpoints}
          iconClass="bx bx-network-chart"
        />

        <section className={`${panelClass} p-8`}>
          <h2 className="mb-6 text-2xl font-semibold text-white">Authentication & Security</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">Authentication Methods</h3>
              <div className="space-y-3">
                <div className={`${cardClass} border-l-4 border-l-emerald-400/70 p-4`}>
                  <h4 className="font-semibold text-white">Bearer Token (JWT)</h4>
                  <p className="text-sm text-zinc-400">
                    Include in the Authorization header:
                    <code className="ml-2 rounded bg-black/60 px-2 py-1 text-zinc-100">Bearer {'{token}'}</code>
                  </p>
                </div>
                <div className={`${cardClass} border-l-4 border-l-sky-400/70 p-4`}>
                  <h4 className="font-semibold text-white">API Key</h4>
                  <p className="text-sm text-zinc-400">
                    Include in the request header:
                    <code className="ml-2 rounded bg-black/60 px-2 py-1 text-zinc-100">X-API-Key: {'{api_key}'}</code>
                  </p>
                </div>
                <div className={`${cardClass} border-l-4 border-l-violet-400/70 p-4`}>
                  <h4 className="font-semibold text-white">Basic Auth</h4>
                  <p className="text-sm text-zinc-400">
                    Primarily used for login flows:
                    <code className="ml-2 rounded bg-black/60 px-2 py-1 text-zinc-100">
                      Authorization: Basic {'{base64(username:password)}'}
                    </code>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">Request Example</h3>
              <div className={codeBlockClass}>
                <p>curl -X GET https://api.dokploy.com/api/applications \</p>
                <p>  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \</p>
                <p>  -H "Content-Type: application/json"</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">Response Format</h3>
              <div className={codeBlockClass}>
                <p>{'{'}</p>
                <p>  "success": true,</p>
                <p>  "data": {'{...}'},</p>
                <p>  "message": "Success"</p>
                <p>{'}'}</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">Error Handling</h3>
              <div className={`${cardClass} border-l-4 border-l-rose-400/70 p-4`}>
                <p className="mb-3 text-sm text-zinc-400">
                  Errors return appropriate HTTP status codes with structured details.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-3 font-mono text-xs text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p>{'{'}</p>
                  <p>  "success": false,</p>
                  <p>  "error": "Unauthorized",</p>
                  <p>  "statusCode": 401</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${panelClass} p-8`}>
          <h2 className="mb-4 text-2xl font-semibold text-white">HTTP Status Codes</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className={`${cardClass} bg-emerald-500/10 p-4`}>
              <h4 className="font-semibold text-emerald-200">Success</h4>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li><strong>200</strong> - OK</li>
                <li><strong>201</strong> - Created</li>
                <li><strong>204</strong> - No Content</li>
              </ul>
            </div>
            <div className={`${cardClass} bg-amber-500/10 p-4`}>
              <h4 className="font-semibold text-amber-200">Client Errors</h4>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li><strong>400</strong> - Bad Request</li>
                <li><strong>401</strong> - Unauthorized</li>
                <li><strong>403</strong> - Forbidden</li>
                <li><strong>404</strong> - Not Found</li>
                <li><strong>429</strong> - Rate Limited</li>
              </ul>
            </div>
            <div className={`${cardClass} bg-rose-500/10 p-4`}>
              <h4 className="font-semibold text-rose-200">Server Errors</h4>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li><strong>500</strong> - Internal Error</li>
                <li><strong>502</strong> - Bad Gateway</li>
                <li><strong>503</strong> - Service Unavailable</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-16 text-zinc-100">
      <div className="relative overflow-hidden border-b border-white/10 surface-dark px-4 py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="font-display mb-2 text-4xl font-semibold tracking-[-0.04em] text-white">
            API Reference
          </h1>
          <p className="text-lg text-zinc-400">
            Complete REST API documentation for Dokploy.
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-x-auto">
            <div className="flex gap-2 py-4">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => setActiveResource(resource.id)}
                  className={navButtonClass(activeResource === resource.id)}
                >
                  <BoxIcon iconClass={resource.iconClass} className="text-lg" />
                  <span className="hidden sm:inline">{resource.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {renderContent()}
      </div>
    </div>
  )
}
