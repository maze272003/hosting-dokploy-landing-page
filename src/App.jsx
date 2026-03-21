import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VideoGridPage from './pages/VideoGridPage'

const navLinks = [
  { label: 'Features', href: '#features', dropdown: true },
  { label: 'Workflow', href: '#workflow', dropdown: true },
  { label: 'Best Shots', href: '#best-shots', dropdown: true },
  { label: 'Use Cases', href: '#use-cases', dropdown: true },
  { label: 'Video Tutorials', href: '/videos', dropdown: false },
]

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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-6 py-4">
        <Link
          to="/"
          aria-label="Dokploy home"
          className="shrink-0 text-white transition hover:opacity-80"
        >
          <DokployGlyph className="h-10 w-10 sm:h-11 sm:w-11" />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-[15px] font-medium text-zinc-200 lg:flex"
        >
          {navLinks.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>{item.label}</span>
                {item.dropdown ? <ChevronDown /> : null}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>{item.label}</span>
                {item.dropdown ? <ChevronDown /> : null}
              </a>
            )
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

        {location.pathname === '/' && (
          <a
            href="#features"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:hidden"
          >
            <span>Features</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="border-t border-white/5 lg:hidden">
        <div className="mx-auto max-w-[1320px] overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex min-w-max items-center gap-6 text-sm font-medium text-zinc-300"
          >
            {navLinks.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>{item.label}</span>
                  {item.dropdown ? <ChevronDown /> : null}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>{item.label}</span>
                  {item.dropdown ? <ChevronDown /> : null}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function AppContent() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoGridPage />} />
      </Routes>
      <footer className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 pb-8 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
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
