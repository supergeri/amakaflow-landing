import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, CheckCircle2, Loader2, Mail, Instagram } from "lucide-react";

export function Waitlist() {
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
    <section id="signup" className="bg-slate-900 text-white">
      {/* Waitlist Section */}
      <div className="py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {!submitted ? (
            <>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Get Early Access
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Be the first to know when AmakaFlow launches.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 whitespace-nowrap disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Signing up...
                      </>
                    ) : (
                      <>
                        Get Notified
                        <ArrowRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="mt-3 text-red-400 text-sm">{error}</p>
                )}
              </form>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>No spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </>
          ) : (
            <div className="py-8">
              <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
                <CheckCircle2 className="size-12 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">You're on the list!</h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Thanks for signing up. We'll email you when AmakaFlow is ready.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">AmakaFlow</div>
              <p className="text-slate-500 text-sm">
                Your workouts. Your watch. Zero manual entry.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <a
                href="mailto:hello@amakaflow.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="size-4" />
                <span>hello@amakaflow.com</span>
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                  <Instagram className="size-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            © 2025 AmakaFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
}
