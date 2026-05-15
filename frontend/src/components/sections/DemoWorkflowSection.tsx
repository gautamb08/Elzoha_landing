"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, CheckCircle2 } from "lucide-react";

export default function DemoWorkflowSection() {
  return (
    <section id="demo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Just send a message.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Elzoha understands natural language. You don't need to fill out forms or navigate menus. Just tell it what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-10" />

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100">
              <MessageCircle className="w-8 h-8 text-[var(--color-brand)]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Send a message</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              "Send a quotation to Sharma Ji for 200 bags of cement, include 18% GST"
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <div className="relative">
                <span className="w-4 h-4 rounded-full bg-blue-400 animate-ping absolute -top-1 -right-1 opacity-75"></span>
                <span className="text-2xl font-bold text-blue-600 font-serif">AI</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Elzoha processes it</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              AI instantly extracts the client, product, quantity, and calculates the exact taxes.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-200">
              <FileText className="w-8 h-8 text-gray-700" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-white">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. PDF is ready</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              A professional, branded PDF is generated and sent back to you in seconds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
