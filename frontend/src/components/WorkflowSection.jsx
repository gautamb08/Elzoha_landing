import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, UserCheck, FileText, Send } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    label: "Vendor Message",
    desc: "Send a WhatsApp message or voice note",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Brain,
    label: "AI Understanding",
    desc: "Elzoha processes your request instantly",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: UserCheck,
    label: "Client Confirmation",
    desc: "Auto-detects client & confirms details",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: FileText,
    label: "Invoice Generation",
    desc: "Creates professional GST invoice",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Send,
    label: "PDF Delivery",
    desc: "Sends polished PDF to your client",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" data-testid="workflow-section" className="relative py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit']"
          >
            From message to invoice in{" "}
            <span className="gradient-text">seconds.</span>
          </motion.h2>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-4 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-emerald-500/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex-1 text-center relative z-10"
            >
              <div
                className={`w-20 h-20 rounded-2xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-zinc-800/50`}
              >
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 font-['Outfit'] mb-1">
                {step.label}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-[140px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center border border-zinc-800/50`}
                >
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] h-6 bg-zinc-800 mt-2" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-200 font-['Outfit']">
                  {step.label}
                </h3>
                <p className="text-xs text-zinc-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
