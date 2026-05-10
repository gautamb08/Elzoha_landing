import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mic, Globe, Zap } from "lucide-react";

const badges = [
  { icon: Globe, text: "Built for Indian Vendors" },
  { icon: MessageSquare, text: "WhatsApp-First Workflows" },
  { icon: Mic, text: "Voice-Note Friendly" },
  { icon: Zap, text: "AI-Powered Operations" },
];

export default function SocialProofSection() {
  return (
    <section data-testid="social-proof-section" className="relative py-16 sm:py-20">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl px-5 py-6 text-center hover:border-emerald-500/20 transition-all duration-300 group"
            >
              <badge.icon className="w-6 h-6 text-emerald-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-zinc-300">{badge.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
