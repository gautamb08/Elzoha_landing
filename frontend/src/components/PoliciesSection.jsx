import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const examples = [
  {
    input: "payment advance mein hoga",
    output:
      "Full advance payment is required before order processing. No credit terms are available.",
  },
  {
    input: "delivery 3 din mein karenge, late hua toh discount denge",
    output:
      "Standard delivery within 3 business days. A discount will be applied in case of any delivery delays.",
  },
  {
    input: "return sirf 7 din ke andar accept karenge",
    output:
      "Returns accepted within 7 days of delivery. Items must be in original condition with proof of purchase.",
  },
];

export default function PoliciesSection() {
  return (
    <section data-testid="policies-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
          >
            Business Policies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit']"
          >
            Simple text in, <span className="gradient-text">professional policy out.</span>
          </motion.h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-zinc-600 mb-1.5 block">
                    You write
                  </span>
                  <p className="text-sm text-zinc-400 italic">"{ex.input}"</p>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-500 flex-shrink-0 hidden sm:block mt-6" />
                <div className="flex-1">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-emerald-600 mb-1.5 block">
                    AI generates
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed">{ex.output}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
