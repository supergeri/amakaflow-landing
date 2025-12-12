import { Monitor, Smartphone } from "lucide-react";

export function AppPreview() {
  const webAppScreens = [
    {
      title: "Structure any workout with drag & drop",
      description: "Build complex workouts with our intuitive editor",
      emoji: "🏗️",
      type: "web"
    },
    {
      title: "Convert social workouts instantly",
      description: "Paste a YouTube, TikTok, or Instagram URL",
      emoji: "📲",
      type: "web"
    },
    {
      title: "Plan your training week",
      description: "Calendar view with scheduled workouts",
      emoji: "📅",
      type: "web"
    },
    {
      title: "Send to your device in one click",
      description: "Export to Garmin or Apple Watch",
      emoji: "⚡",
      type: "web"
    }
  ];

  const mobileAppScreens = [
    {
      title: "Your daily training dashboard",
      description: "Today's workouts with Quick Start",
      emoji: "🏠",
      type: "mobile"
    },
    {
      title: "Follow along hands-free",
      description: "Active workout with timer and audio cues",
      emoji: "▶️",
      type: "mobile"
    },
    {
      title: "Schedule workouts to your calendar",
      description: "Month view with workout planning",
      emoji: "🗓️",
      type: "mobile"
    }
  ];

  const allScreens = [...webAppScreens, ...mobileAppScreens];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm mb-6">
            <Smartphone className="size-4" />
            <span>Coming Soon</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            What You'll Get
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A complete workout management system with web app and iOS companion
          </p>
        </div>

        {/* Screens Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allScreens.map((screen, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200"
            >
              {/* Screen Preview */}
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                <div className="relative text-center text-white z-10">
                  <div className="text-6xl mb-4">{screen.emoji}</div>
                  <div className="absolute top-4 right-4">
                    {screen.type === 'web' ? (
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Monitor className="size-4 text-white" />
                      </div>
                    ) : (
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Smartphone className="size-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
              </div>

              {/* Screen Info */}
              <div className="p-6">
                <h3 className="text-lg mb-2">{screen.title}</h3>
                <p className="text-slate-600 text-sm">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Tags */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <Monitor className="size-4 text-purple-600" />
            <span className="text-sm">Web App</span>
          </div>
          <div className="text-slate-400">+</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <Smartphone className="size-4 text-purple-600" />
            <span className="text-sm">iOS Companion</span>
          </div>
          <div className="text-slate-400">+</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <svg className="size-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-sm">Apple Watch</span>
          </div>
          <div className="text-slate-400">+</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <svg className="size-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span className="text-sm">Garmin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
