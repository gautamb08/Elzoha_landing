import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, CheckCircle2 } from "lucide-react";

const voiceSteps = [
  { text: "Voice note received...", delay: 0 },
  {
    text: 'Transcribed: "Sharma ji ke liye 100kg sugar ka invoice — advance payment le lena"',
    delay: 1.5,
  },
  { text: "Client: Sharma Trading Co.", delay: 3 },
  { text: "Item: 100kg Sugar — ₹4,200", delay: 3.8 },
  { text: "GST @5%: ₹210 | Total: ₹4,410", delay: 4.6 },
  { text: "Payment terms: Advance", delay: 5.2 },
  { text: "Invoice #1248 generated. Sending PDF...", delay: 6.0 },
];

export default function VoiceWorkflowSection() {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          voiceSteps.forEach((step, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, step]);
            }, step.delay * 1000);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("voice-workflow-trigger");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section data-testid="voice-workflow-section" className="relative py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
            >
              Voice Workflows
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit'] mb-4"
            >
              Just speak. <span className="gradient-text">AI does the rest.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-zinc-400 leading-relaxed mb-6 max-w-md"
            >
              Send voice notes in Hindi, Hinglish, or English. Elzoha transcribes,
              understands context, and executes your business workflows automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {["Hindi", "Hinglish", "English"].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-1.5 rounded-full text-xs font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/5"
                >
                  {lang} Supported
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Voice Demo */}
          <motion.div
            id="voice-workflow-trigger"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Voice Recording UI */}
              <div className="px-5 py-4 border-b border-zinc-800/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-200">Voice Note</p>
                  <p className="text-xs text-zinc-500">0:04</p>
                </div>
                {/* Waveform */}
                <div className="flex items-center gap-0.5 h-6">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-emerald-500/50 rounded-full waveform-bar"
                      style={{
                        height: `${8 + Math.random() * 16}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* AI Processing Steps */}
              <div className="p-5 space-y-3 min-h-[250px]">
                {visibleSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-300 leading-relaxed">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
