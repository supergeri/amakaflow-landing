import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { AppPreview } from "./components/AppPreview";
import { Integrations } from "./components/Integrations";
import { Waitlist } from "./components/Waitlist";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <AppPreview />
      <Integrations />
      <Waitlist />
    </div>
  );
}