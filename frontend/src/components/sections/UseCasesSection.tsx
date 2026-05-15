"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Package, Truck, Store } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Building2,
      title: "Hotel & Restaurant Vendors",
      desc: "Daily deliveries to hotels? Instantly generate bulk invoices for perishable goods without touching a computer.",
    },
    {
      icon: Package,
      title: "Wholesalers & Distributors",
      desc: "Manage multiple retail clients, track payments, and send branded quotations in seconds.",
    },
    {
      icon: Truck,
      title: "Transporters",
      desc: "Create instant trip receipts and e-way bill summaries directly from your truck using voice notes.",
    },
    {
      icon: Store,
      title: "Local Manufacturers",
      desc: "Keep track of raw material purchases and finished goods sales with simple conversational commands.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Built for Indian Businesses
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From hotel suppliers to distributors, Elzoha adapts to your workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 transition-colors"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="w-6 h-6 text-[var(--color-brand)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{useCase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
