import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to install an app?",
    answer:
      "No. Everything works through WhatsApp. You don't need to download or install anything new. Just message Elzoha on WhatsApp and start managing your business.",
  },
  {
    question: "Can I use voice notes?",
    answer:
      "Yes! Hindi, Hinglish, and English voice notes are fully supported. Just record a voice note with your business request, and Elzoha will transcribe, understand, and execute it.",
  },
  {
    question: "Will GST be handled automatically?",
    answer:
      "Yes. The system automatically applies GST logic based on your product categories. You don't need to manually calculate tax — Elzoha handles it intelligently.",
  },
  {
    question: "Can I manage clients through Elzoha?",
    answer:
      "Absolutely. Elzoha's AI remembers your clients, their preferences, rates, and past transactions. You can also manage clients from the dashboard.",
  },
  {
    question: "How is Elzoha different from regular invoice software?",
    answer:
      "Elzoha is not software you need to learn. It's an AI assistant that lives on WhatsApp. You talk to it naturally in your language, and it handles invoices, quotations, reminders, and more — no training needed.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. Your data is encrypted and stored securely. We follow industry-standard security practices to protect your business information.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" data-testid="faq-section" className="relative py-16 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-semibold text-emerald-500 mb-4 block"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 font-['Outfit']"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="glass-card rounded-xl border-zinc-800/50 px-5 overflow-hidden"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left text-base font-medium text-zinc-200 hover:text-zinc-50 hover:no-underline py-5"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
