import React from "react";
import { motion } from "framer-motion";

export default function DashboardSection() {
  return (
    <section data-testid="dashboard-section" className="relative py-24 sm:py-32">
      <div className="gradient-radial-center absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
          >
            Dashboard
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit'] mb-4"
          >
            Your business, at a <span className="gradient-text">glance.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 max-w-lg mx-auto"
          >
            Manage invoices, quotations, clients, and policies from a premium
            dashboard — or keep using WhatsApp. Your choice.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-emerald-500/5 rounded-3xl blur-3xl" />
          <div className="relative rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
              alt="Elzoha Dashboard Preview"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
