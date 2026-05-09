import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function WaitlistModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="waitlist-modal"
        className="bg-[#0A0A0A] border-zinc-800 max-w-md sm:max-w-lg rounded-2xl p-0 overflow-hidden"
      >
        {/* Gradient header */}
        <div className="relative px-6 pt-8 pb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
          <DialogHeader className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center glow-emerald">
                <span className="text-black font-bold text-sm font-['Outfit']">E</span>
              </div>
              <span className="text-lg font-bold text-zinc-50 font-['Outfit']">Elzoha</span>
            </div>
            <DialogTitle className="text-2xl font-bold text-zinc-50 font-['Outfit'] tracking-tight">
              Join the Early Access Waitlist
            </DialogTitle>
            <DialogDescription className="text-sm text-zinc-400 mt-2">
              Be among the first vendors to experience the future of business
              operations on WhatsApp.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <div className="px-6 pb-8 space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Full Name</label>
            <input
              data-testid="waitlist-name-input"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Business Name</label>
            <input
              data-testid="waitlist-business-input"
              type="text"
              placeholder="Your business name"
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-400 mb-1.5 block">WhatsApp Number</label>
            <input
              data-testid="waitlist-phone-input"
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Business Type</label>
              <select
                data-testid="waitlist-type-select"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all appearance-none"
              >
                <option value="">Select type</option>
                <option value="wholesale">Wholesale</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="services">Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Monthly Invoices</label>
              <select
                data-testid="waitlist-invoices-select"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all appearance-none"
              >
                <option value="">Estimate</option>
                <option value="1-50">1 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-500">201 - 500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>

          <Button
            data-testid="waitlist-submit-btn"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full h-12 text-base glow-emerald transition-all duration-300 mt-2 group"
          >
            <Sparkles className="w-4 h-4 mr-1" />
            Join Early Access Waitlist
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-[11px] text-zinc-600 text-center mt-3">
            No spam. We'll reach out when your early access is ready.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
