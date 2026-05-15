"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to download an app?",
    answer: "No. Everything works directly inside your existing WhatsApp. There is no new app to download and no new software to learn.",
  },
  {
    question: "How does it handle GST?",
    answer: "Elzoha automatically calculates and applies the correct GST based on the product category and your business details. Your PDFs are always GST-ready.",
  },
  {
    question: "Can I use voice notes instead of typing?",
    answer: "Yes! You can send voice notes in Hindi, Hinglish, Kannada, Marathi, Telugu, Tamil, and English. Elzoha will transcribe them and generate the invoice or quotation automatically.",
  },
  {
    question: "Is my business data secure?",
    answer: "Absolutely. We use enterprise-grade encryption. Elzoha is an official verified WhatsApp Business partner, ensuring your data remains private and secure.",
  },
  {
    question: "How is this different from Tally or Vyapar?",
    answer: "Tally and Vyapar require you to sit at a laptop or navigate complex menus. Elzoha requires zero training—you just send a text or voice message on WhatsApp, and the work is done instantly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
