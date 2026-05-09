import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection({ onOpenWaitlist }) {
  return (
    <section data-testid="cta-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 gradient-radial-top pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-50 font-['Outfit'] mb-6"
        >
          Ready to run your business{" "}
          <span className="gradient-text">on WhatsApp?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto mb-8"
        >
          Join hundreds of vendors already on the waitlist for early access to
          Elzoha.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            data-testid="cta-join-waitlist-btn"
            onClick={onOpenWaitlist}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full px-8 h-12 text-base glow-emerald transition-all duration-300 group"
          >
            Join Waitlist
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="cta-book-demo-btn"
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:text-zinc-50 hover:border-zinc-500 bg-transparent rounded-full px-8 h-12 text-base w-full sm:w-auto"
            >
              Book a Live Demo
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
