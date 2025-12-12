import { Instagram, Twitter, Mail } from "lucide-react";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-white text-2xl">AmakaFlow</div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30">
                <Sparkles className="size-3 text-yellow-400" />
                <span className="text-xs text-yellow-400">Coming Soon</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your workouts. Your watch. Zero manual entry.
            </p>
            <p className="text-xs italic text-purple-300">
              Built for athletes, by athletes
            </p>
            <div className="mt-4">
              <a href="mailto:hello@amakaflow.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="size-4" />
                <span>hello@amakaflow.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">Sign Up</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div>© 2025 AmakaFlow. All rights reserved.</div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <Twitter className="size-4" />
              <span>Twitter/X</span>
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <Instagram className="size-4" />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}