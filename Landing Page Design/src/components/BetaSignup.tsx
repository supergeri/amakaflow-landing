import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function BetaSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Beta signup:", email);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!submitted ? (
          <>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
              Join our beta and get early access to TraininQ. Limited spots available.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-purple-300"
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 px-8 py-6 text-lg whitespace-nowrap"
                >
                  Join Beta
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
              <p className="text-sm text-purple-300 mt-4">
                No credit card required. Cancel anytime.
              </p>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                <span>Early Access Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                <span>Priority Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                <span>Lifetime Beta Benefits</span>
              </div>
            </div>
          </>
        ) : (
          <div className="py-12">
            <div className="inline-flex p-6 rounded-full bg-green-500/20 mb-6">
              <CheckCircle2 className="size-16 text-green-400" />
            </div>
            <h2 className="text-4xl mb-4">You're On The List!</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Check your inbox for next steps. We'll send you access details soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
