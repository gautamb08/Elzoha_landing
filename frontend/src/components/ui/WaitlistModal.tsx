"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Loader2, X } from "lucide-react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyLtLjXtmZ2xsnfG_qEjCEFPQ9Hp7Aap8Aa6oQ67anJ4rHKtj0cjYr6mJOWF9AxKpeaVQ/exec";

export default function WaitlistModal({ open, onOpenChange }: { open: boolean, onOpenChange: (val: boolean) => void }) {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    businessType: "",
    monthlyInvoices: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") { setStatus("idle"); setErrorMsg(""); }
  };

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.whatsapp.trim()) {
      setErrorMsg("Please fill in at least your name and WhatsApp number.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          name: form.name,
          businessName: form.businessName,
          whatsapp: form.whatsapp,
          businessType: form.businessType,
          monthlyInvoices: form.monthlyInvoices,
        }),
      });
      setStatus("success");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    if (status !== "loading") {
      setTimeout(() => {
        setForm({ name: "", businessName: "", whatsapp: "", businessType: "", monthlyInvoices: "" });
        setStatus("idle");
        setErrorMsg("");
      }, 300);
      onOpenChange(false);
    }
  };

  // Prevent background scrolling when open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white max-w-md w-full rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="relative px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">Elzoha</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  {status === "success" ? "You're on the list!" : "Get Priority Access"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {status === "success"
                    ? "We'll reach out when your priority access is ready. Welcome aboard!"
                    : "Be among the first vendors to experience the future of business operations on WhatsApp."}
                </p>
              </div>

              {/* Body */}
              <div className="overflow-y-auto px-6 py-4 custom-scrollbar">
                {status === "success" ? (
                  <div className="py-8 flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Thank you, <span className="text-gray-900 font-bold">{form.name}</span>! We've added you to the priority access list.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-semibold rounded-full px-8 h-11 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 block">Business Name</label>
                      <input
                        type="text"
                        placeholder="Your business name"
                        value={form.businessName}
                        onChange={(e) => updateField("businessName", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 block">WhatsApp Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.whatsapp}
                        onChange={(e) => updateField("whatsapp", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 block">Business Type</label>
                        <select
                          value={form.businessType}
                          onChange={(e) => updateField("businessType", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        >
                          <option value="">Select type</option>
                          <option value="wholesale">Wholesale</option>
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="services">Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 block">Monthly Invoices</label>
                        <select
                          value={form.monthlyInvoices}
                          onChange={(e) => updateField("monthlyInvoices", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        >
                          <option value="">Estimate</option>
                          <option value="1-50">1 - 50</option>
                          <option value="51-200">51 - 200</option>
                          <option value="201-500">201 - 500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                    </div>

                    {errorMsg && (
                      <p className="text-sm font-medium text-red-500 text-center bg-red-50 p-2 rounded-lg">
                        {errorMsg}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              {status !== "success" && (
                <div className="p-6 pt-2 bg-white flex-shrink-0">
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-semibold rounded-full h-12 flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed group shadow-md"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Priority Access
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] font-medium text-gray-500 text-center mt-4">
                    No spam. We'll reach out when your priority access is ready.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
