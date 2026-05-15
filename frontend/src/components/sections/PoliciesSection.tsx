"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

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
    <section className="relative py-24 bg-gray-50 border-y border-gray-100">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
              Business Policies
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight"
          >
            Simple text in, <br className="hidden sm:block" />
            <span className="text-[var(--color-brand)]">professional policy out.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Elzoha automatically converts your casual voice notes or Hinglish text into airtight, professional business terms.
          </motion.p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                <div className="flex-1 bg-gray-50 rounded-xl p-4 w-full">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-gray-500 mb-2 block flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    You Write (WhatsApp)
                  </span>
                  <p className="text-sm text-gray-700 font-medium font-mono">"{ex.input}"</p>
                </div>
                
                <div className="hidden sm:flex items-center justify-center bg-green-50 rounded-full p-2 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-[var(--color-brand)]" />
                </div>
                
                {/* Mobile arrow */}
                <div className="sm:hidden flex items-center justify-center w-full py-1">
                  <div className="w-px h-6 bg-green-100"></div>
                </div>

                <div className="flex-1 bg-green-50/50 border border-green-100/50 rounded-xl p-4 w-full">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-green-700 mb-2 block flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]"></span>
                    AI Generates (Invoice Policy)
                  </span>
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">{ex.output}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
