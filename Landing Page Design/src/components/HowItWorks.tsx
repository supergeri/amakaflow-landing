import { Upload, Wand2, Watch } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Import Your Workout",
      description: "Paste a ChatGPT workout, share from Instagram/YouTube, or upload a screenshot. We support any format.",
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: Wand2,
      title: "AI Structures It",
      description: "Our AI instantly parses intervals, paces, heart rate zones, and rest periods into a structured format.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Watch,
      title: "Sync to Your Watch",
      description: "One tap to send directly to Apple Watch or Garmin. Start training in seconds, not minutes.",
      color: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps from any workout source to your wrist
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 relative z-10`}>
                    <Icon className="size-8 text-white" />
                  </div>
                  <div className={`absolute -top-3 -left-3 size-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl`}>
                    {index + 1}
                  </div>
                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}