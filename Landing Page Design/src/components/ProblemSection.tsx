import { Card } from "./ui/card";
import { Clock, FileImage, WatchOff } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Manual typing",
    description: "Re-entering ChatGPT workouts into other apps = 20 minutes wasted.",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: FileImage,
    title: "Screenshots",
    description: "Most people screenshot workouts and scroll through Photos at the gym.",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: WatchOff,
    title: "No watch support",
    description: "No platform lets you send custom workouts to Apple Watch or Garmin.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  }
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            How people sync workouts today… is broken.
          </h2>
          <p className="text-xl text-gray-600">
            The fitness tech ecosystem wasn't built for the AI era.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className={`inline-flex p-4 rounded-2xl ${problem.bgColor} mb-6`}>
                <problem.icon className={`size-8 ${problem.color}`} />
              </div>
              <h3 className="text-2xl mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
