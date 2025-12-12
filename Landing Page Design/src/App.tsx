import { Hero } from "./components/Hero";
import { ProductExplainer } from "./components/ProductExplainer";
import { ProblemSolution } from "./components/ProblemSolution";
import { HowItWorks } from "./components/HowItWorks";
import { AppPreview } from "./components/AppPreview";
import { Integrations } from "./components/Integrations";
import { Features } from "./components/Features";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductExplainer />
      <ProblemSolution />
      <HowItWorks />
      <AppPreview />
      <Integrations />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}