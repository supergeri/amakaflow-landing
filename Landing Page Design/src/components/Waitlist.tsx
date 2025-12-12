import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend (Supabase + Resend)
    console.log("Email signup:", email);
    setSubmitted(true);
  };

  return (
    <section 
      id="signup"
      className="relative py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      {/* Background Image (optional subtle overlay) */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="figma:asset/2590045db80a0e04e01139deb0b7008bb4e04fad.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-slate-900/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!submitted ? (
          <>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 mb-6">
              <Sparkles className="size-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">Stay in the Loop</span>
            </div>

            <h2 className="text-4xl sm:text-5xl mb-6">
              Be the First to Know
            </h2>
            <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
              Sign up to receive updates when AmakaFlow launches. We'll share sneak peeks, feature announcements, and early access opportunities.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
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
                  Get Notified
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                <span>Launch announcements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                <span>Feature sneak peeks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
          </>
        ) : (
          <div className="py-12">
            <div className="inline-flex p-6 rounded-full bg-green-500/20 mb-6 animate-bounce">
              <CheckCircle2 className="size-16 text-green-400" />
            </div>
            <h2 className="text-4xl mb-4">✓ You're on the list!</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-6">
              Thanks for your interest in AmakaFlow! We'll send you updates as we get closer to launch.
            </p>
            <p className="text-lg text-purple-300 mb-4">
              Want to help shape the app? Take our 60-second survey →
            </p>
            <Button 
              variant="outline"
              className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
              onClick={() => window.open('#', '_blank')}
            >
              Take the Survey (Optional)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}