"use client";

import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[var(--color-brand)] rounded-3xl p-10 sm:p-16 text-center shadow-xl relative overflow-hidden">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-black pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to upgrade your business?
            </h2>
            <p className="text-lg text-green-50 max-w-2xl mx-auto mb-10 font-medium">
              Join hundreds of vendors who have stopped wasting time on complicated dashboards and started running their business on WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onOpenWaitlist}
                className="bg-white text-[var(--color-brand-dark)] font-bold rounded-full px-8 h-14 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 text-[var(--color-brand)]" />
                Get Priority Access
              </button>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full px-8 h-14 flex items-center justify-center gap-2 transition-all"
              >
                Book a Live Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-green-100 text-sm mt-8">
              Setup takes 2 minutes. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
