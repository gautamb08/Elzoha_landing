"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2 } from "lucide-react";

export default function InvoicePreviewSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Invoice Preview Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Desktop-like window wrapper */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto text-[10px] font-medium text-gray-400 bg-white px-2 py-0.5 rounded shadow-sm">
                  INV-1247_Royal_Palace.pdf
                </div>
              </div>
              
              {/* Fake Invoice PDF Content */}
              <div className="p-6 sm:p-8 bg-white aspect-[1/1.4] relative">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">INVOICE</h2>
                    <p className="text-xs text-gray-500">#INV-1247</p>
                  </div>
                  <div className="text-right">
                    <div className="w-10 h-10 rounded bg-[var(--color-brand)] text-white font-bold flex items-center justify-center text-xs ml-auto mb-2">E</div>
                    <p className="text-[10px] text-gray-500 font-bold">Your Business Name</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Billed To</p>
                    <p className="text-xs text-gray-900 font-semibold">Royal Palace Mumbai</p>
                    <p className="text-[10px] text-gray-500 mt-1">Apollo Bunder, Colaba<br/>Mumbai, Maharashtra 400001</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Date</p>
                    <p className="text-xs text-gray-900 font-semibold">Oct 24, 2023</p>
                  </div>
                </div>

                <table className="w-full text-left mb-6 border-t border-b border-gray-100">
                  <thead>
                    <tr>
                      <th className="py-2 text-[10px] font-bold text-gray-400 uppercase">Item</th>
                      <th className="py-2 text-[10px] font-bold text-gray-400 uppercase text-right">Qty</th>
                      <th className="py-2 text-[10px] font-bold text-gray-400 uppercase text-right">Price</th>
                      <th className="py-2 text-[10px] font-bold text-gray-400 uppercase text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 text-xs font-medium text-gray-900">Premium Paneer (Bulk)</td>
                      <td className="py-2 text-xs text-gray-600 text-right">50 kg</td>
                      <td className="py-2 text-xs text-gray-600 text-right">₹250</td>
                      <td className="py-2 text-xs text-gray-900 font-medium text-right">₹12,500</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end">
                  <div className="w-1/2">
                    <div className="flex justify-between py-1">
                      <span className="text-xs text-gray-500">Subtotal</span>
                      <span className="text-xs font-medium text-gray-900">₹12,500</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-xs text-gray-500">GST (5%)</span>
                      <span className="text-xs font-medium text-gray-900">₹625</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm font-bold text-gray-900">Total</span>
                      <span className="text-sm font-bold text-[var(--color-brand-dark)]">₹13,125</span>
                    </div>
                  </div>
                </div>

                {/* Floating Action Button on the preview */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="bg-white rounded-full p-2 shadow-md text-[var(--color-brand)] border border-gray-100">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-sm font-bold text-gray-900">GST Compliant</p>
                <p className="text-xs text-gray-500">Auto-calculated</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
              <FileText className="w-4 h-4" /> Beautiful PDFs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Professional invoices <br/> ready to send.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Elzoha generates beautiful, branded, and GST-compliant PDF invoices and quotations in seconds. Look professional to your clients without opening a single spreadsheet.
            </p>
            
            <ul className="space-y-4">
              {[
                "Auto-calculates GST based on product category",
                "Includes your business logo and details",
                "Remembers client addresses automatically",
                "Sends directly via WhatsApp in 1 click"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
