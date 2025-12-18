import { Monitor, Smartphone } from "lucide-react";

export function AppPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-slate-900">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Build and customize your workouts in the web app, then sync to your watch
          </p>
        </div>

        {/* Desktop Screenshots */}
        <div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Add Sources Screen */}
            <div className="group">
              <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-slate-600 rounded px-3 py-1 text-xs text-slate-400 ml-4">
                    app.amakaflow.com/workflow
                  </div>
                </div>
                <img
                  src="/images/desktop/amakaflowyoutubeex.png"
                  alt="AmakaFlow - Add workout sources from YouTube, TikTok, Instagram"
                  className="w-full"
                />
              </div>
              <p className="text-center mt-4 text-slate-600">Import from YouTube, TikTok, or Instagram</p>
            </div>

            {/* Validate Screen */}
            <div className="group">
              <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-slate-600 rounded px-3 py-1 text-xs text-slate-400 ml-4">
                    app.amakaflow.com/validate
                  </div>
                </div>
                <img
                  src="/images/desktop/amakaflowmapping.png"
                  alt="AmakaFlow - Validate and map exercises to your device"
                  className="w-full"
                />
              </div>
              <p className="text-center mt-4 text-slate-600">Validate & map exercises for your device</p>
            </div>
          </div>
        </div>

        {/* Platform Tags */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <Monitor className="size-4 text-orange-600" />
            <span className="text-sm">Web App</span>
          </div>
          <div className="text-slate-400">+</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <Smartphone className="size-4 text-orange-600" />
            <span className="text-sm">iOS App</span>
          </div>
          <div className="text-slate-400">+</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <svg className="size-4 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-sm">Apple Watch</span>
          </div>
          <div className="text-slate-400">+</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
            <svg className="size-4 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span className="text-sm">Garmin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
