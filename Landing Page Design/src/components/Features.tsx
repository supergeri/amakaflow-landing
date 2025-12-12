import { Link as LinkIcon, Youtube, Watch, Sparkles, MessageSquare, Smartphone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: LinkIcon,
      title: "Paste Any Workout Link",
      description: "YouTube, Instagram, TikTok, or any URL. AmakaFlow extracts the workout automatically."
    },
    {
      icon: Sparkles,
      title: "AI-Powered Conversion",
      description: "Our AI reads the content and structures it into sets, reps, intervals, and rest periods."
    },
    {
      icon: Watch,
      title: "Export to Garmin",
      description: "Send workouts directly to Garmin Connect. They appear on your watch, ready to start."
    },
    {
      icon: Watch,
      title: "Export to Apple Watch",
      description: "Sync to Apple Watch via our companion app. Follow along with audio cues."
    },
    {
      icon: MessageSquare,
      title: "Works with ChatGPT",
      description: "Paste workout text from ChatGPT, trainers, or PDFs. AmakaFlow structures it for you."
    },
    {
      icon: Smartphone,
      title: "iOS Companion App",
      description: "Schedule workouts, follow along on your phone, or sync to your watch. Coming to App Store."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            What AmakaFlow Does
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to convert and sync workouts effortlessly
          </p>
        </div>

        {/* Image showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwcnVubmluZ3xlbnwxfHx8fDE3NjMyNjMxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Apple Watch workout tracking"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762014594439-3271cc8a7e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwY3ljbGluZyUyMHdvcmtvdXR8ZW58MXx8fHwxNzYzMjYzMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Athlete cycling training"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzMjEzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gym workout training"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}