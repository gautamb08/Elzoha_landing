import React from "react";
import { motion } from "framer-motion";
import { Clock, FileX, Calculator, Users, MonitorX, MessageCircle } from "lucide-react";

const painPoints = [
  { icon: Clock, text: "Invoices take too much time" },
  { icon: FileX, text: "Quotations look unprofessional" },
  { icon: Calculator, text: "GST mistakes happen frequently" },
  { icon: Users, text: "Too much staff dependency" },
  { icon: MonitorX, text: "Software is too complicated" },
  { icon: MessageCircle, text: "Everything already happens on WhatsApp" },
];

export default function ProblemSection() {
  return (
    <section data-testid="problem-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/212fbafe-3367-4c55-9725-e52a2d15aa59/images/5c3690300e0d3bd801d41b19c417562a43d3cd662c1a8e7df192b48048e28038.png"
                alt="Indian business owner"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
            >
              The Problem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit'] mb-8"
            >
              Indian vendors still run businesses{" "}
              <span className="text-zinc-500">manually.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <point.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
