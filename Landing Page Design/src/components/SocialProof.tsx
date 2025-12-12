import { Users, Zap, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Beta Users",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Zap,
      value: "10k+",
      label: "Workouts Converted",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Clock,
      value: "30 sec",
      label: "Average Conversion Time",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "User Rating",
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            Trusted by Athletes Everywhere
          </h2>
          <p className="text-xl text-slate-600">
            Join hundreds of runners, cyclists, and triathletes who've eliminated manual workout entry
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-6 rounded-2xl bg-white shadow-lg mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="size-8 text-white" />
                  </div>
                </div>
                <div className={`text-5xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          {/* Community Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560073744-7643b964bdf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlcyUyMHJ1bm5pbmclMjBncm91cHxlbnwxfHx8fDE3NjMyNjMxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Athletes training together"
              className="w-full h-full object-cover min-h-96"
            />
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {[
              {
                quote: "I was spending 15 minutes before every run just entering intervals. TraininQ gave me my mornings back.",
                author: "Sarah M.",
                role: "Marathon Runner"
              },
              {
                quote: "The AI is scary good at parsing workouts. Even complex interval sessions sync perfectly to my Garmin.",
                author: "James L.",
                role: "Triathlete"
              },
              {
                quote: "Finally, a way to save all those Instagram workouts I screenshot. Game changer for my training.",
                author: "Alex K.",
                role: "Cyclist"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-yellow-400 text-3xl mb-4">"</div>
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <div className="text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}