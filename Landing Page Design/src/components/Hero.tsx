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
    <section className="bg-slate-50">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-orange-500">AmakaFlow</div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side - Laptop */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/desktop/amakaflowmainpage-front.png"
              alt="AmakaFlow Web App"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Right side - Content & Waitlist */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Turn any workout into{" "}
              <span className="text-orange-500">watch-ready training</span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-md">
              Import from YouTube, Instagram, or TikTok. AI structures it. Sync to Apple Watch or Garmin. Done.
            </p>

            {/* Waitlist Box */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-md">
              {!submitted ? (
                <>
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Join the Waitlist
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Be among the first to try AmakaFlow when we launch.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 px-4 bg-slate-50 border-slate-300 text-slate-900 text-base placeholder:text-slate-400 rounded-lg focus:border-orange-500 focus:ring-orange-500"
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 bg-orange-500 text-white text-base font-semibold hover:bg-orange-600 rounded-lg"
                    >
                      {loading ? (
                        <Loader2 className="size-5 animate-spin" />
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="ml-2 size-5" />
                        </>
                      )}
                    </Button>
                  </form>
                  {error && (
                    <p className="mt-3 text-red-500 text-sm">{error}</p>
                  )}
                  <p className="mt-4 text-slate-400 text-xs text-center">
                    Join 100+ athletes waiting. No spam, ever.
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle2 className="size-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    You're on the list!
                  </h2>
                  <p className="text-slate-500">
                    We'll email you when AmakaFlow is ready.
                  </p>
                </div>
              )}
            </div>

            {/* Platform badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Apple Watch
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Garmin
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                iOS App
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
