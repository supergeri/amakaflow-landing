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
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full" />
              
              {/* Placeholder for device mockups - in production, replace with actual app screenshots */}
              <div className="relative space-y-4">
                <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-3xl p-8 border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-video bg-slate-700/50 rounded-xl mb-4 flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💪</div>
                      <div className="text-sm">Workout Structure Editor</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-600/50 rounded w-3/4" />
                    <div className="h-3 bg-slate-600/50 rounded w-1/2" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 border border-white/10 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 -mt-8 ml-12">
                  <div className="aspect-[9/16] bg-slate-700/50 rounded-xl flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-sm">iOS Companion App</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}