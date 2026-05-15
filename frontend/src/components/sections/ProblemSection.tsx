"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, MonitorX } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 rounded-3xl p-8 lg:p-16 border border-red-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Business software was never built for how Indian vendors actually work.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most vendors already manage orders and clients on WhatsApp. Elzoha helps you handle invoices, quotations, and operations the same way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-red-50"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <MonitorX className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Requires a Laptop</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Most accounting tools force you to be at a desk. When you're in the market or warehouse, you only have your phone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-red-50"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Too Many Menus</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Creating one invoice means clicking through 5 different screens, selecting dropdowns, and filling forms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-red-50"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Training</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your staff already knows how to use WhatsApp. Teaching them new software takes weeks and leads to errors.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
