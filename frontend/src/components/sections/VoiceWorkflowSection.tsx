"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Waves } from "lucide-react";

export default function VoiceWorkflowSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#075E54] rounded-3xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 p-10 lg:p-16">
            
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6">
                <Mic className="w-4 h-4" /> Voice Notes
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Working in the market or warehouse? <br className="hidden sm:block" /> Use voice notes.
              </h2>
              <p className="text-lg text-green-50 mb-8 max-w-md">
                Elzoha accurately transcribes your voice notes in Hindi, Hinglish, or English. It extracts the client name, items, and quantities to instantly generate an invoice or quotation.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Hindi", "Hinglish", "Kannada", "Marathi", "Telugu", "Tamil", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Voice animation */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm"
              >
                <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-brand)] flex items-center justify-center shrink-0">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Recording voice note...</div>
                    <div className="text-xs text-gray-500">0:04</div>
                  </div>
                </div>

                {/* Animated waveform */}
                <div className="flex items-center gap-1 h-12 mb-4 justify-center">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-[var(--color-brand)] rounded-full waveform-bar"
                      style={{
                        height: `${Math.random() * 40 + 8}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 relative">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">AI Transcription</span>
                  <p className="text-gray-800 text-sm font-medium italic">
                    "Bhai, Agarwal Traders ko 50 boxes of tile adhesive ka bill bhej do with 18% GST."
                  </p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
