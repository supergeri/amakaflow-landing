import { Link, Sparkles, Watch } from "lucide-react";

export function ProductExplainer() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6">
            What is AmakaFlow?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-xl text-slate-700 leading-relaxed">
            <p>
              AmakaFlow is a workout conversion and sync platform that eliminates 
              manual data entry between your favorite content and your fitness devices.
            </p>
            <p>
              Found a great workout on Instagram? Paste the link.<br />
              Got a routine from ChatGPT? Paste it in.<br />
              Screenshot from a PDF training plan? Upload it.
            </p>
            <p>
              AmakaFlow uses AI to extract the workout structure, then exports it 
              directly to your Garmin or Apple Watch — ready to follow.
            </p>
          </div>
        </div>

        {/* Key Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-6">
              <Link className="size-8 text-purple-600" />
            </div>
            <h3 className="text-2xl mb-4">Any Source</h3>
            <p className="text-slate-600 leading-relaxed">
              YouTube, Instagram, TikTok, ChatGPT, screenshots, or type it yourself.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-6">
              <Sparkles className="size-8 text-purple-600" />
            </div>
            <h3 className="text-2xl mb-4">AI-Powered</h3>
            <p className="text-slate-600 leading-relaxed">
              Our AI reads the workout and converts it to structured intervals, sets, and reps.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-6">
              <Watch className="size-8 text-purple-600" />
            </div>
            <h3 className="text-2xl mb-4">Direct to Watch</h3>
            <p className="text-slate-600 leading-relaxed">
              One-click export to Garmin Connect or Apple Watch. Start training immediately.
            </p>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-xl bg-white shadow-md mb-3">
              <div className="text-4xl">📱</div>
            </div>
            <p className="text-sm text-slate-700">Instagram Post</p>
          </div>
          
          <div className="text-purple-400 rotate-90 md:rotate-0">
            <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg mb-3">
              <Sparkles className="size-8 text-white" />
            </div>
            <p className="text-sm text-slate-700">AmakaFlow</p>
          </div>
          
          <div className="text-purple-400 rotate-90 md:rotate-0">
            <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-xl bg-white shadow-md mb-3">
              <div className="text-4xl">⌚</div>
            </div>
            <p className="text-sm text-slate-700">Garmin Watch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
