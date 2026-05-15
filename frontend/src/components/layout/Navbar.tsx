"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Demo", href: "#demo" },
  { label: "How it Works", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Elzoha
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenWaitlist}
              className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-semibold rounded-full px-5 py-2 text-sm transition-all shadow-sm flex items-center gap-2"
            >
              Join Elzoha
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-100 overflow-y-auto"
          >
            <div className="px-4 py-8 space-y-6 min-h-[calc(100vh-80px)] flex flex-col">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base text-gray-600 hover:text-gray-900 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="pt-6 mt-auto pb-8">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenWaitlist?.();
                  }}
                  className="flex items-center justify-center w-full bg-[var(--color-brand)] text-white font-semibold rounded-full h-12 text-base shadow-sm"
                >
                  Join Elzoha
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
