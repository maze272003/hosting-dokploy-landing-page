export default function VideoGridPage() {
  const videos = [
    {
      id: 1,
      title: 'Dokploy Introduction and Setup Tutorial',
      description: 'Official Dokploy introduction and setup guide showing the basics of deployment and platform features.',
      url: 'https://www.youtube.com/embed/mznYKPvhcfw',
    },
    
    {
      id: 2,
      title: 'How to Deploy a Web App on Dokploy Using GitHub',
      description: 'Learn how to replace Vercel and Heroku with Dokploy for complete control over your deployments.',
      url: 'https://www.youtube.com/embed/j9r2mdzBZcQ?si=dkR5r5jCYZlFbJH7',
    },
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dokploy Video Tutorials
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive video guides to master Dokploy and deploy your applications
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:shadow-blue-500/20 flex flex-col"
            >
              {/* Video Container */}
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src={video.url}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-300 flex-grow">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
