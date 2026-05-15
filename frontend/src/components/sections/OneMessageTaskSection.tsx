"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Receipt, FileText, Bell, Users } from "lucide-react";

const tasks = [
  {
    trigger: '"Invoice bana do"',
    result: "Professional PDF generated",
    icon: Receipt,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    trigger: '"Client ko quotation bhejo"',
    result: "AI quotation created",
    icon: FileText,
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    trigger: "Voice note",
    result: "AI extracts details",
    icon: Users,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    trigger: '"Payment reminder bhejo"',
    result: "Reminder sent",
    icon: Bell,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
];

export default function OneMessageTaskSection() {
  return (
    <section id="workflow" className="py-24 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          One message → Task completed
        </h2>
        <p className="text-lg text-gray-500 mb-16">
          Stop navigating through 10 different menus. Just ask Elzoha.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div className="flex flex-col items-start text-left gap-1">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  You Say
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {task.trigger}
                </span>
              </div>
              
              <div className="mx-4 text-gray-300">
                <ArrowRight className="w-6 h-6" />
              </div>

              <div className="flex flex-col items-end text-right gap-1">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Elzoha Does
                </span>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${task.color} font-semibold text-sm`}>
                  {task.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
