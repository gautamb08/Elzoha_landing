import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const chatMessages = [
  {
    type: "user",
    text: "Taj Mumbai ke liye 50kg paneer ka invoice bana do",
    delay: 0.5,
  },
  {
    type: "ai",
    text: "Client detected: Taj Mumbai",
    delay: 2.0,
    isStatus: true,
  },
  {
    type: "ai",
    text: "Invoice #1247 generated\n50kg Paneer — ₹12,500\nGST @5% — ₹625\nTotal: ₹13,125",
    delay: 3.5,
  },
  {
    type: "ai",
    text: "Professional PDF ready. Send to client?",
    delay: 5.2,
    hasButtons: true,
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      <div className="w-2 h-2 rounded-full bg-emerald-500/60 typing-dot" />
      <div className="w-2 h-2 rounded-full bg-emerald-500/60 typing-dot" />
      <div className="w-2 h-2 rounded-full bg-emerald-500/60 typing-dot" />
    </div>
  );
}

function ChatBubble({ message, index }) {
  const isUser = message.type === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "chat-bubble-user text-zinc-100"
            : message.isStatus
            ? "text-emerald-400 text-xs tracking-wide font-medium px-4 py-1.5"
            : "chat-bubble-ai text-zinc-300"
        }`}
      >
        <span className="whitespace-pre-line">{message.text}</span>
        {message.hasButtons && (
          <div className="flex gap-2 mt-2.5">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
              Send Now
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
              Edit First
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function HeroSection({ onOpenWaitlist }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    let timeouts = [];
    chatMessages.forEach((msg, i) => {
      // Show typing before AI messages
      if (msg.type === "ai") {
        timeouts.push(
          setTimeout(() => setShowTyping(true), msg.delay * 1000 - 800)
        );
      }
      timeouts.push(
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
        }, msg.delay * 1000)
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs tracking-[0.15em] uppercase font-semibold text-emerald-400">
                AI-Powered Business Assistant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50 leading-[1.1] font-['Outfit']"
            >
              Run Your Business{" "}
              <span className="gradient-text">Through WhatsApp</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Generate invoices, quotations, reminders, and business workflows
              using simple WhatsApp messages and voice notes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                data-testid="hero-join-waitlist-btn"
                onClick={onOpenWaitlist}
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full px-8 h-12 text-base glow-emerald transition-all duration-300 group"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-book-demo-btn"
              >
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-zinc-50 hover:border-zinc-500 bg-transparent rounded-full px-8 h-12 text-base w-full sm:w-auto"
                >
                  Book Early Access Demo
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: WhatsApp Chat Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-3xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-xs font-['Outfit']">E</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-200">Elzoha AI</p>
                  <p className="text-xs text-emerald-400">Online</p>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-ring" />
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-3 min-h-[280px] sm:min-h-[320px]">
                {visibleMessages.map((msg, i) => (
                  <ChatBubble key={i} message={msg} index={i} />
                ))}
                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="chat-bubble-ai inline-block"
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="px-4 py-3 border-t border-zinc-800/50 flex items-center gap-3">
                <div className="flex-1 bg-zinc-900/50 rounded-full px-4 py-2 text-xs text-zinc-500">
                  Type a message...
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
