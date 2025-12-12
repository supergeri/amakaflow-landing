import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/80 to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 mb-8">
              <Sparkles className="size-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">Coming Soon</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              AmakaFlow
            </h1>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-yellow-400">
              Turn Any Workout Into Watch-Ready Training
            </h2>
            
            <p className="text-xl sm:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto lg:mx-0">
              AmakaFlow converts workouts from YouTube, Instagram, TikTok, or ChatGPT into structured training — then syncs them directly to your Garmin or Apple Watch. No more manual entry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                onClick={scrollToSignup}
                className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 px-8 py-6 text-lg"
              >
                Get Notified
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToHowItWorks}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                See How It Works
              </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-8 text-purple-200">
              <div className="flex items-center gap-2">
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>Apple Watch</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span>Garmin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Instant Sync</span>
              </div>
            </div>
          </div>

          {/* Device Mockups */}
          <div className="relative hidden lg:block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full" />

            {/* Desktop Browser Mockup */}
            <div className="relative z-10 mb-8">
              <div className="bg-slate-800 rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-slate-600 rounded px-3 py-1 text-xs text-slate-400 ml-4">
                    app.amakaflow.com
                  </div>
                </div>
                {/* Screenshot */}
                <img
                  src="/images/desktop/welcome.png"
                  alt="AmakaFlow Web App - Welcome screen showing 4-step workflow"
                  className="w-full"
                />
              </div>
            </div>

            {/* Phone Mockups - Below Desktop */}
            <div className="flex items-center justify-center gap-0 relative z-20 -mt-8">
              {/* iPhone 1 - Sources */}
              <div className="transform -rotate-3 hover:rotate-0 transition-transform drop-shadow-2xl -mr-4">
                <img
                  src="/images/mobile/sources.png"
                  alt="AmakaFlow iOS App - Sources and integrations"
                  className="w-40 h-auto mix-blend-lighten"
                />
              </div>

              {/* iPhone 2 - Workouts */}
              <div className="transform rotate-3 hover:rotate-0 transition-transform drop-shadow-2xl">
                <img
                  src="/images/mobile/workouts.png"
                  alt="AmakaFlow iOS App - Workouts list"
                  className="w-40 h-auto mix-blend-lighten"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}