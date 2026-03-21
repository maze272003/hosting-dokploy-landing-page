import BoxIcon from '../components/BoxIcon'

export default function VideoGridPage() {
  const videos = [
    {
      id: 1,
      title: 'Dokploy Introduction and Setup Tutorial',
      description: 'Official Dokploy introduction and setup guide showing the basics of deployment and platform features.',
      url: 'https://www.youtube.com/embed/mznYKPvhcfw',
      duration: '15:32',
      category: 'Getting Started',
    },
    
    {
      id: 2,
      title: 'How to Deploy a Web App on Dokploy Using GitHub',
      description: 'Learn how to replace Vercel and Heroku with Dokploy for complete control over your deployments.',
      url: 'https://www.youtube.com/embed/j9r2mdzBZcQ?si=dkR5r5jCYZlFbJH7',
      duration: '22:45',
      category: 'Deployment',
    },
    
    // {
    //   id: 3,
    //   title: 'Database Management in Dokploy',
    //   description: 'Set up and manage Postgres, MySQL, MongoDB, and Redis databases with backups and monitoring.',
    //   url: 'https://www.youtube.com/embed/mznYKPvhcfw',
    //   duration: '18:20',
    //   category: 'Databases',
    // },
    
    // {
    //   id: 4,
    //   title: 'Docker Compose Stacks on Dokploy',
    //   description: 'Deploy multi-service applications with Docker Compose for complex production workloads.',
    //   url: 'https://www.youtube.com/embed/j9r2mdzBZcQ?si=dkR5r5jCYZlFbJH7',
    //   duration: '25:10',
    //   category: 'Advanced',
    // },
    
    // {
    //   id: 5,
    //   title: 'Domain Configuration and SSL Setup',
    //   description: 'Configure custom domains, set up SSL certificates, and manage routing with Traefik.',
    //   url: 'https://www.youtube.com/embed/mznYKPvhcfw',
    //   duration: '12:55',
    //   category: 'Networking',
    // },
    
    // {
    //   id: 6,
    //   title: 'CI/CD Automation with Dokploy',
    //   description: 'Set up automated deployments with webhooks, Auto Deploy, and the Dokploy API.',
    //   url: 'https://www.youtube.com/embed/j9r2mdzBZcQ?si=dkR5r5jCYZlFbJH7',
    //   duration: '20:30',
    //   category: 'Automation',
    // },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dokploy opacity-30" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(circle_at_top,rgba(109,115,255,0.15),transparent_50%)]" />
        <div className="absolute left-[10%] top-[15%] hidden h-16 w-16 rotate-12 bg-white/[0.02] lg:block" />
        <div className="absolute right-[15%] top-[25%] hidden h-24 w-24 -rotate-6 bg-white/[0.02] lg:block" />
        <div className="absolute bottom-[20%] left-[20%] hidden h-14 w-14 rotate-12 bg-white/[0.02] xl:block" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-zinc-300 mb-6">
            <BoxIcon iconClass="bx bx-video" className="text-base text-[#6d73ff]" />
            Video Tutorials
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white mb-6">
            Master Dokploy with
            <span className="relative block text-white mt-2">
              Expert Video Guides
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 left-1/2 hidden h-8 w-[70%] -translate-x-1/2 text-[#6d73ff]/40 md:block"
                fill="none"
                viewBox="0 0 400 30"
              >
                <path
                  d="M4 20C68 8 148 8 200 15C252 22 332 25 396 18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive video tutorials covering everything from initial setup to advanced deployment strategies. Learn at your own pace.
          </p>
        </div>

        {/* Category Filter Pills */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                category === 'All'
                  ? 'bg-[#6d73ff] text-white shadow-[0_8px_30px_rgba(109,115,255,0.3)]'
                  : 'border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08] hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 py-6 px-8 rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <div className="text-center">
            <p className="font-display text-3xl font-semibold text-white">{videos.length}</p>
            <p className="text-sm text-zinc-400 mt-1">Video Tutorials</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-semibold text-white">38m</p>
            <p className="text-sm text-zinc-400 mt-1">Total Content</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          {/* <div className="text-center">
            <p className="font-display text-3xl font-semibold text-white">6</p>
            <p className="text-sm text-zinc-400 mt-1">Categories</p>
          </div> */}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <article
              key={video.id}
              className="group rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[#6d73ff]/10 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video Thumbnail Container */}
              <div className="relative w-full pb-[56.25%] overflow-hidden">
                <iframe
                  src={video.url}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#6d73ff]/90 flex items-center justify-center shadow-[0_8px_30px_rgba(109,115,255,0.4)]">
                    <BoxIcon iconClass="bx bx-play" className="ml-1 text-3xl text-white" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {video.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Category Badge */}
                <span className="inline-flex w-fit rounded-full bg-[#6d73ff]/14 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#d7daff] mb-3">
                  {video.category}
                </span>
                
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-white mb-2 group-hover:text-[#d7daff] transition-colors duration-300">
                  {video.title}
                </h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                  {video.description}
                </p>
                
                {/* Watch Now Link */}
                <div className="mt-4 pt-4 border-t border-white/6">
                  <a
                    href={video.url.replace('/embed/', '/watch?v=')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#6d73ff] hover:text-[#8589ff] transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <BoxIcon iconClass="bx bx-right-arrow-alt" className="text-lg" />
                </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_right_top,rgba(109,115,255,0.15),transparent_30%),linear-gradient(135deg,rgba(12,13,19,0.98),rgba(5,5,7,0.98))] p-8 sm:p-10 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-white mb-4">
              Ready to start deploying?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using Dokploy to deploy their applications with complete control and ownership.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                <BoxIcon iconClass="bx bx-home-alt-2" className="text-xl" />
                <span>Back to Home</span>
              </a>
              <a
                href="https://dokploy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#6366f1] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(79,85,218,0.34)] transition hover:bg-[#7277ff]"
              >
                <span>Get Started Free</span>
                <BoxIcon iconClass="bx bx-right-arrow-alt" className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
