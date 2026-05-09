import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "999",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Invoices & Quotations",
      "Voice Note Workflows",
      "Client Management",
      "Dashboard Access",
      "WhatsApp Integration",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "2,999",
    period: "/month",
    description: "For growing businesses",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Advanced Workflows",
      "Payment Reminders",
      "Auto Follow-ups",
      "Higher AI Usage",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "For heavy operations",
    features: [
      "Everything in Growth",
      "Heavy Workflows",
      "Dedicated Support",
      "Advanced Automation",
      "Custom Integrations",
      "SLA Guarantee",
    ],
    highlighted: false,
  },
];

export default function PricingSection({ onOpenWaitlist }) {
  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-24 sm:py-32">
      <div className="gradient-radial-center absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit'] mb-4"
          >
            Simple, <span className="gradient-text">premium pricing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 max-w-md mx-auto"
          >
            Invest in your business efficiency. No hidden charges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "pricing-highlight bg-zinc-900/80 border border-emerald-500/30 scale-[1.02]"
                  : "glass-card hover:border-zinc-700"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-500 text-black text-xs font-semibold glow-emerald">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-200 font-['Outfit'] mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-zinc-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-50 font-['Outfit']">
                  {plan.price === "Custom" ? "" : "₹"}
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-zinc-500 ml-1">{plan.period}</span>
                )}
              </div>

              <Button
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                onClick={onOpenWaitlist}
                className={`w-full rounded-full h-11 font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-emerald-500 hover:bg-emerald-600 text-black glow-emerald"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <div className="mt-6 pt-6 border-t border-zinc-800/50 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
