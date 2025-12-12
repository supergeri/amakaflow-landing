import { MessageSquare, Instagram, Youtube, Camera, Watch, Smartphone, Calendar as CalendarIcon, Apple } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Integrations() {
  const sources = [
    { icon: MessageSquare, name: "ChatGPT", color: "bg-green-100 text-green-600" },
    { icon: Instagram, name: "Instagram", color: "bg-pink-100 text-pink-600" },
    { icon: Youtube, name: "YouTube", color: "bg-red-100 text-red-600" },
    { icon: Camera, name: "Screenshots", color: "bg-blue-100 text-blue-600" }
  ];

  const devices = [
    { icon: Watch, name: "Apple Watch", color: "bg-slate-100 text-slate-900" },
    { icon: Smartphone, name: "Garmin", color: "bg-cyan-100 text-cyan-600" }
  ];

  return (
    <section id="integrations" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            Works With Everything You Use
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Import from any source, export to any device
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Sources */}
          <div className="space-y-4">
            <h3 className="text-2xl mb-6 text-center lg:text-right text-yellow-400">Import From</h3>
            {sources.map((source, index) => {
              const Icon = source.icon;
              return (
                <div key={index} className="flex items-center gap-4 lg:flex-row-reverse lg:justify-end">
                  <div className={`p-4 rounded-xl ${source.color}`}>
                    <Icon className="size-6" />
                  </div>
                  <span className="text-lg">{source.name}</span>
                </div>
              );
            })}
          </div>

          {/* Center - Phone Mockup */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 rounded-full" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 w-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwcGhvbmV8ZW58MXx8fHwxNzYzMjYzMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="TraininQ app interface"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl mb-2">AmakaFlow</div>
              <div className="text-sm text-purple-300">Instant Conversion</div>
            </div>
          </div>

          {/* Devices */}
          <div className="space-y-4">
            <h3 className="text-2xl mb-6 text-center lg:text-left text-yellow-400">Export To</h3>
            {devices.map((device, index) => {
              const Icon = device.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl ${device.color}`}>
                    <Icon className="size-6" />
                  </div>
                  <span className="text-lg">{device.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Badges Section */}
        <div className="space-y-8">
          <h3 className="text-2xl text-center text-yellow-400 mb-8">Supported Platforms & Services</h3>
          
          {/* Device Integration Row */}
          <div>
            <h4 className="text-sm text-purple-300 text-center mb-4">Device Integration</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Watch className="size-5" />
                <span>Apple Watch</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Smartphone className="size-5" />
                <span>Garmin</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
                <Apple className="size-5 text-yellow-400" />
                <span className="text-yellow-400">iOS App Store (Coming Soon)</span>
              </div>
            </div>
          </div>

          {/* Source Platforms Row */}
          <div>
            <h4 className="text-sm text-purple-300 text-center mb-4">Import Sources</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Youtube className="size-5" />
                <span>YouTube</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Instagram className="size-5" />
                <span>Instagram</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>TikTok</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <MessageSquare className="size-5" />
                <span>ChatGPT</span>
              </div>
            </div>
          </div>

          {/* Calendar Integration Row */}
          <div>
            <h4 className="text-sm text-purple-300 text-center mb-4">Calendar Sync</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Apple className="size-5" />
                <span>Apple Calendar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <CalendarIcon className="size-5" />
                <span>Google Calendar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <CalendarIcon className="size-5" />
                <span>Outlook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}