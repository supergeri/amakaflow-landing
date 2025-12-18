import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${import.meta.env.VITE_BUTTONDOWN_API_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="text-3xl font-bold text-orange-400 mb-6">AmakaFlow</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Turn any workout into{" "}
              <span className="text-orange-400">watch-ready training</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Import from YouTube, Instagram, or TikTok. AI structures it. Sync to Apple Watch or Garmin. Done.
            </p>

            {/* Waitlist Form */}
            {!submitted ? (
              <div className="max-w-md mx-auto lg:mx-0">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-lg"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-lg whitespace-nowrap"
                  >
                    {loading ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </form>
                {error && (
                  <p className="mt-2 text-red-400 text-sm">{error}</p>
                )}
                <p className="mt-3 text-slate-500 text-sm">
                  Join 100+ athletes waiting for early access
                </p>
              </div>
            ) : (
              <div className="max-w-md mx-auto lg:mx-0 flex items-center gap-3 text-green-400">
                <CheckCircle2 className="size-6" />
                <span className="text-lg">You're on the list! We'll be in touch.</span>
              </div>
            )}

            {/* Platform badges */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Apple Watch
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Garmin
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                iOS App
              </div>
            </div>
          </div>

          {/* Right side - Device Mockups */}
          <div className="relative order-1 lg:order-2">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />

            {/* Devices Container */}
            <div className="relative z-10 flex items-end justify-center">
              {/* Laptop Mockup */}
              <div className="relative flex-shrink-0" style={{ width: '90%' }}>
                <img
                  src="/images/desktop/amakaflowmainpage-front.png"
                  alt="AmakaFlow Web App on laptop"
                  className="w-full drop-shadow-2xl"
                />
              </div>

              {/* Phone Mockup - Standing beside laptop */}
              <div className="relative flex-shrink-0 -ml-12 mb-4" style={{ width: '30%' }}>
                <img
                  src="/images/mobile/iphonedash-portrait.png"
                  alt="AmakaFlow iOS App"
                  className="w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
