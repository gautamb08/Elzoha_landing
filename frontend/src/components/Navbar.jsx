import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onOpenWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" data-testid="logo" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center glow-emerald">
              <span className="text-black font-bold text-sm font-['Outfit']">E</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-50 font-['Outfit']">
              Elzoha
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-book-demo-btn"
            >
              <Button
                variant="outline"
                className="border-zinc-800 text-zinc-300 hover:text-zinc-50 hover:border-zinc-600 bg-transparent rounded-full px-5 h-9 text-sm"
              >
                Book Demo
              </Button>
            </a>
            <Button
              data-testid="nav-join-waitlist-btn"
              onClick={onOpenWaitlist}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full px-5 h-9 text-sm glow-emerald transition-all duration-300"
            >
              Early Access
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
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
            className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-[#050505] border-b border-zinc-800/50 overflow-y-auto"
          >
            <div className="px-4 py-8 space-y-6 min-h-[calc(100vh-80px)] flex flex-col">
              <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              </div>
              <div className="pt-6 mt-auto flex flex-col gap-3 pb-8">
                <Button
                  data-testid="mobile-join-waitlist-btn"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenWaitlist();
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full h-12 text-base glow-emerald"
                >
                  Early Access
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
