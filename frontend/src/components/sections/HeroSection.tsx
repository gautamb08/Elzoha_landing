"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Check, FileText } from "lucide-react";
import AnimatedWhatsAppMock from "@/components/ui/AnimatedWhatsAppMock";

export default function HeroSection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-[var(--background)] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
              <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-brand-dark)]">
                WhatsApp-First Business AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]"
            >
              Talk to your business <br className="hidden lg:block" />
              <span className="text-[var(--color-brand)]">on WhatsApp.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
            >
              Generate invoices, quotations, reminders, and client communication — without learning complicated software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onOpenWaitlist}
                className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-semibold rounded-full px-8 h-12 flex items-center justify-center gap-2 shadow-sm transition-all group"
              >
                Get Priority Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-semibold rounded-full px-8 h-12 flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <PlayCircle className="w-5 h-5 text-gray-400" />
                Watch AI Invoice Demo
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium"
            >
              <div className="flex items-center gap-1.5 flex-wrap">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> 
                <span><span className="font-bold text-gray-800">Supports Hindi, Hinglish and regional languages.</span></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" /> GST Ready
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> Professional Policies
              </div>
            </motion.div>
          </div>

          {/* Right: WhatsApp Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-sm mx-auto"
          >
            {/* Glow effect behind phone */}
            <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            
            <AnimatedWhatsAppMock />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute -right-6 top-12 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">PDF Ready</p>
                <p className="text-[10px] text-gray-500">in 2 seconds</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
