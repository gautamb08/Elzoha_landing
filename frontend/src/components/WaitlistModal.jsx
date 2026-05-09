import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyLtLjXtmZ2xsnfG_qEjCEFPQ9Hp7Aap8Aa6oQ67anJ4rHKtj0cjYr6mJOWF9AxKpeaVQ/exec";

export default function WaitlistModal({ open, onOpenChange }) {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    businessType: "",
    monthlyInvoices: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const updateField = (field, value) => {
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

  const handleOpenChange = (val) => {
    if (!val && status !== "loading") {
      // Reset form when closing
      setTimeout(() => {
        setForm({ name: "", businessName: "", whatsapp: "", businessType: "", monthlyInvoices: "" });
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        data-testid="waitlist-modal"
        className="bg-[#0A0A0A] border-zinc-800 max-w-md sm:max-w-lg rounded-2xl p-0 overflow-hidden"
      >
        {/* Gradient header */}
        <div className="relative px-6 pt-8 pb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
          <DialogHeader className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center glow-emerald">
                <span className="text-black font-bold text-sm font-['Outfit']">E</span>
              </div>
              <span className="text-lg font-bold text-zinc-50 font-['Outfit']">Elzoha</span>
            </div>
            <DialogTitle className="text-2xl font-bold text-zinc-50 font-['Outfit'] tracking-tight">
              {status === "success" ? "You're on the list!" : "Join the Early Access Waitlist"}
            </DialogTitle>
            <DialogDescription className="text-sm text-zinc-400 mt-2">
              {status === "success"
                ? "We'll reach out when your early access is ready. Welcome aboard!"
                : "Be among the first vendors to experience the future of business operations on WhatsApp."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {status === "success" ? (
          <div className="px-6 pb-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-sm text-zinc-400 text-center">
              Thank you, <span className="text-zinc-200 font-medium">{form.name}</span>! We've added you to the waitlist.
            </p>
            <Button
              data-testid="waitlist-done-btn"
              onClick={() => handleOpenChange(false)}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full px-8 h-11"
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="px-6 pb-8 space-y-4">
            <div>
              <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Full Name *</label>
              <input
                data-testid="waitlist-name-input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Business Name</label>
              <input
                data-testid="waitlist-business-input"
                type="text"
                placeholder="Your business name"
                value={form.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-400 mb-1.5 block">WhatsApp Number *</label>
              <input
                data-testid="waitlist-phone-input"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Business Type</label>
                <select
                  data-testid="waitlist-type-select"
                  value={form.businessType}
                  onChange={(e) => updateField("businessType", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all appearance-none"
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
                <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Monthly Invoices</label>
                <select
                  data-testid="waitlist-invoices-select"
                  value={form.monthlyInvoices}
                  onChange={(e) => updateField("monthlyInvoices", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all appearance-none"
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
              <p data-testid="waitlist-error-msg" className="text-xs text-red-400 text-center">
                {errorMsg}
              </p>
            )}

            <Button
              data-testid="waitlist-submit-btn"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full h-12 text-base glow-emerald transition-all duration-300 mt-2 group disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-1" />
                  Join Early Access Waitlist
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-[11px] text-zinc-600 text-center mt-3">
              No spam. We'll reach out when your early access is ready.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
