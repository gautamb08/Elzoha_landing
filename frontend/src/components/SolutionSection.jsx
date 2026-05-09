import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Mic,
  Brain,
  Receipt,
  FileCheck,
  ScrollText,
  Bell,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Invoice Generation",
    desc: "Create professional GST-compliant invoices in seconds through simple messages.",
    span: "md:col-span-2",
  },
  {
    icon: Mic,
    title: "Voice-Note Workflows",
    desc: "Send Hindi or Hinglish voice notes — AI handles the rest.",
    span: "md:col-span-1",
  },
  {
    icon: Brain,
    title: "Client Memory System",
    desc: "AI remembers your clients, rates, and preferences automatically.",
    span: "md:col-span-1",
  },
  {
    icon: Receipt,
    title: "Automatic GST Handling",
    desc: "Never worry about tax calculations. GST applied intelligently.",
    span: "md:col-span-1",
  },
  {
    icon: FileCheck,
    title: "Professional Quotations",
    desc: "Generate branded quotations that win clients over.",
    span: "md:col-span-1",
  },
  {
    icon: ScrollText,
    title: "Business Policies",
    desc: "Turn casual text into formal business policies instantly.",
    span: "md:col-span-1",
  },
  {
    icon: Bell,
    title: "Payment Reminders",
    desc: "Automated follow-ups so you never miss a payment.",
    span: "md:col-span-1",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-Native",
    desc: "Everything works inside WhatsApp. No app downloads needed.",
    span: "md:col-span-2",
  },
];

export default function SolutionSection() {
  return (
    <section id="features" data-testid="solution-section" className="relative py-24 sm:py-32">
      <div className="gradient-radial-center absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
          >
            The Solution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit']"
          >
            Now your business runs through{" "}
            <span className="gradient-text">conversations.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`glass-card rounded-2xl p-6 hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group ${feature.span}`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 font-['Outfit'] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
