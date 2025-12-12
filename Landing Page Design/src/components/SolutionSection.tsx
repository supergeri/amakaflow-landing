import { Card } from "./ui/card";
import { Upload, Sparkles, Watch } from "lucide-react";

const solutions = [
  {
    icon: Upload,
    title: "Import anything",
    description: "Copy text, paste a link, or snap a photo. We parse and convert instantly.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Sparkles,
    title: "Structured automatically",
    description: "Exercises, sets, reps, intervals, pacing — all mapped and formatted.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Watch,
    title: "Sync to your watch",
    description: "Supports Apple Watch (WorkoutKit) and Garmin (indirect or direct).",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
];

export function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
            The Solution
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            The first app that syncs ANY workout to your watch.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No more manual entry. No more screenshots. Just paste and go.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-2">
              <div className={`inline-flex p-4 rounded-2xl ${solution.bgColor} mb-6`}>
                <solution.icon className={`size-8 ${solution.color}`} />
              </div>
              <h3 className="text-2xl mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
