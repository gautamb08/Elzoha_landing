import React from "react";
import { Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Early Access", "Demo"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

export default function FooterSection() {
  return (
    <footer data-testid="footer" className="relative border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <span className="text-black font-bold text-sm font-['Outfit']">E</span>
              </div>
              <span className="text-lg font-bold text-zinc-50 font-['Outfit']">Elzoha</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-xs">
              The future operating system for Indian vendors. AI-powered business
              operations on WhatsApp.
            </p>
            <a
              href="mailto:hello@elzoha.com"
              data-testid="footer-email-link"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@elzoha.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-zinc-500 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Elzoha. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                data-testid={`footer-social-${social.toLowerCase()}`}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
