import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import BoxIcon from './components/BoxIcon'
import HomePage from './pages/HomePage'
import VideoGridPage from './pages/VideoGridPage'
import DocumentationPage from './pages/DocumentationPage'
import GettingStartedPage from './pages/GettingStartedPage'
import TroubleshootingPage from './pages/TroubleshootingPage'
import BestPracticesPage from './pages/BestPracticesPage'
import APIReferencePage from './pages/APIReferencePage'

const navLinks = [
  { label: 'Home', href: '/', dropdown: false },
  { label: 'Docs', href: '/docs', dropdown: false },
  { label: 'Getting Started', href: '/getting-started', dropdown: false },
  { label: 'Best Practices', href: '/best-practices', dropdown: false },
  { label: 'Troubleshooting', href: '/troubleshooting', dropdown: false },
  { label: 'API Reference', href: '/api', dropdown: false },
  { label: 'Videos', href: '/videos', dropdown: false },
]

function ChevronDown({ className = 'h-3 w-3' }) {
  return <BoxIcon iconClass="bx bx-chevron-down" className={`text-[14px] ${className}`} />
}

function ArrowRight({ className = 'h-4 w-4' }) {
  return <BoxIcon iconClass="bx bx-right-arrow-alt" className={`text-[18px] ${className}`} />
}

function MenuToggleIcon({ isOpen, className = 'h-5 w-5' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <>
          <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
          <path d="M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
        </>
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
          <path d="M4 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
          <path d="M4 17H15" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
        </>
      )}
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

function Header() {
  const location = useLocation()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const isActiveRoute = (href) => href.startsWith('/') && location.pathname === href

  useEffect(() => {
    if (!isMobileNavOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileNavOpen])

  const getDesktopNavLinkClassName = (href) => {
    const isActive = isActiveRoute(href)

    return isActive
      ? 'group relative inline-flex h-12 items-center px-1 text-[0.95rem] font-medium tracking-[0.02em] text-white'
      : 'group relative inline-flex h-12 items-center px-1 text-[0.95rem] font-medium tracking-[0.02em] text-zinc-400 transition-colors duration-200 hover:text-white'
  }

  const getDesktopNavIndicatorClassName = (href) => {
    const isActive = isActiveRoute(href)

    return isActive
      ? 'absolute inset-x-1 bottom-[0.15rem] h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(255,216,77,0.98),rgba(255,255,255,0.92))]'
      : 'absolute inset-x-3 bottom-[0.15rem] h-[2px] origin-center scale-x-0 rounded-full bg-[linear-gradient(90deg,rgba(255,216,77,0.82),rgba(255,255,255,0.72))] opacity-0 transition duration-200 group-hover:scale-x-100 group-hover:opacity-100'
  }

  return (
    <>
      <header className="sticky top-0 z-50 isolate px-2 pt-2 sm:px-4 sm:pt-4">
        <div className="glass-shell mx-auto flex max-w-[1320px] items-center gap-3 rounded-[30px] px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
          <Link
            to="/"
            aria-label="Dokploy home"
            className="shrink-0 text-white transition hover:opacity-90"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <DokployGlyph className="h-8 w-8 animate-float-slow sm:h-9 sm:w-9" />
              </span>
              <div className="hidden sm:block">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Deploy Command
                </p>
                <p className="font-display text-lg font-semibold tracking-[-0.04em] text-white">
                  Dokploy
                </p>
              </div>
            </div>
          </Link>

          <div className="ml-8 hidden flex-1 items-center justify-center lg:flex">
            <nav
              aria-label="Primary navigation"
              className="flex items-center gap-5 xl:gap-7"
            >
              {navLinks.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={getDesktopNavLinkClassName(item.href)}
                  >
                    <span className="flex items-center gap-1.5 leading-none">
                      <span>{item.label}</span>
                      {item.dropdown ? <ChevronDown className="text-[13px] text-current" /> : null}
                    </span>
                    <span
                      aria-hidden="true"
                      className={getDesktopNavIndicatorClassName(item.href)}
                    />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={getDesktopNavLinkClassName(item.href)}
                  >
                    <span className="flex items-center gap-1.5 leading-none">
                      <span>{item.label}</span>
                      {item.dropdown ? <ChevronDown className="text-[13px] text-current" /> : null}
                    </span>
                    <span
                      aria-hidden="true"
                      className={getDesktopNavIndicatorClassName(item.href)}
                    />
                  </a>
                )
              ))}
            </nav>
          </div>

          <div className="ml-auto hidden items-center gap-3 xl:flex">
            <a
              href="#best-shots"
              className="lift-hover animate-sheen inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffd84d,#ffe79d)] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-95"
            >
              <span>Best Shots</span>
            </a>
            <span className="text-lg text-zinc-700">/</span>
            <a
              href="#use-cases"
              className="lift-hover inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Use Cases
            </a>
            <a
              href="https://dokploy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lift-hover animate-sheen inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              <span>Visit Dokploy</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-sidebar"
            aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileNavOpen((value) => !value)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          >
            <MenuToggleIcon isOpen={isMobileNavOpen} className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isMobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation overlay"
          onClick={() => setIsMobileNavOpen(false)}
          className={`absolute inset-0 bg-black/72 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileNavOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          id="mobile-sidebar"
          className={`glass-shell absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col rounded-l-[32px] border-l border-white/10 p-5 shadow-[-20px_0_70px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setIsMobileNavOpen(false)}
              className="inline-flex items-center gap-3 text-white"
            >
              <DokployGlyph className="h-9 w-9" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Navigate
                </p>
                <p className="text-sm font-semibold text-zinc-100">Dokploy Pages</p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileNavOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]"
            >
              <MenuToggleIcon isOpen className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Sidebar navigation"
            className="stagger-fade mt-8 flex flex-col gap-3"
          >
            {navLinks.map((item) => {
              const isActive = isActiveRoute(item.href)
              const itemClassName = isActive
                ? 'border-white/0 bg-white text-black shadow-[0_16px_40px_rgba(255,255,255,0.14)]'
                : 'border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08]'

              return item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`lift-hover inline-flex items-center justify-between rounded-[22px] border px-4 py-3 text-sm font-medium transition ${itemClassName}`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`lift-hover inline-flex items-center justify-between rounded-[22px] border px-4 py-3 text-sm font-medium transition ${itemClassName}`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )
            })}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            {location.pathname === '/' ? (
              <a
                href="#features"
                onClick={() => setIsMobileNavOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffd84d] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95 lift-hover animate-sheen"
              >
                <span>Jump to Features</span>
              </a>
            ) : null}

            <a
              href="https://dokploy.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileNavOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 lift-hover animate-sheen"
            >
              <span>Visit Dokploy</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}

function AppContent() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <Header />
      <div className="page-shell">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/getting-started" element={<GettingStartedPage />} />
          <Route path="/best-practices" element={<BestPracticesPage />} />
          <Route path="/troubleshooting" element={<TroubleshootingPage />} />
          <Route path="/api" element={<APIReferencePage />} />
          <Route path="/videos" element={<VideoGridPage />} />
        </Routes>
      </div>
      <footer className="mx-auto flex max-w-[1320px] flex-col gap-3 px-4 pb-8 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 animate-fade-soft">
        <p>Dokploy feature landing page concept</p>
        <p>Focused on applications, Compose stacks, databases, and release automation</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
