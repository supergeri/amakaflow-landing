import { AlertCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Spending 10+ minutes manually entering workout intervals",
    "Losing workout plans from social media in your camera roll",
    "Copy-pasting between apps just to get workouts on your watch",
    "Missing key training details during manual entry"
  ];

  const solutions = [
    "Instant conversion from any format to structured workouts",
    "Store and organize all your workouts in one place",
    "One-click sync directly to Apple Watch or Garmin",
    "AI preserves every detail: intervals, pace, heart rate zones"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            Stop Wasting Time on Manual Entry
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            TraininQ eliminates the friction between finding great workouts and actually doing them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-red-100">
                <AlertCircle className="size-6 text-red-600" />
              </div>
              <h3 className="text-2xl text-red-900">The Problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex gap-3 text-slate-700">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle2 className="size-6 text-green-600" />
              </div>
              <h3 className="text-2xl text-green-900">The Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="size-5 text-green-500 mt-1 shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
