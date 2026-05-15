"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCheck, ChevronLeft, Phone, Video, Mic, FileText, Send, MoreVertical, Battery, Wifi, Signal } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  type: "user" | "ai" | "system";
  content?: string;
  isVoiceNote?: boolean;
  isTranscribing?: boolean;
  transcription?: string;
  isPdf?: boolean;
  pdfData?: { name: string; size: string; pages: number };
  time?: string;
  status?: "sent" | "delivered" | "read";
};

// SVG Background Pattern for WhatsApp chat
const WhatsAppBackground = () => (
  <div className="absolute inset-0 z-0 opacity-[0.06] bg-[#e5ddd5]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10c0-5.5 4.5-10 10-10h60c5.5 0 10 4.5 10 10v60c0 5.5-4.5 10-10 10H20c-5.5 0-10-4.5-10-10V10z' fill='none' stroke='%23000' stroke-width='2' opacity='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: "400px"
    }}
  />
);

// iPhone Status Bar
const StatusBar = () => (
  <div className="w-full h-12 bg-[#F6F6F6] text-black px-6 flex justify-between items-center text-xs font-semibold z-20 relative rounded-t-[2.5rem]">
    <span>9:41</span>
    <div className="flex items-center gap-1.5">
      <Signal className="w-3.5 h-3.5" />
      <Wifi className="w-3.5 h-3.5" />
      <div className="w-5 h-2.5 border border-black rounded-[3px] p-[1px] relative flex items-center">
        <div className="bg-black w-[80%] h-full rounded-[1px]"></div>
        <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1px] h-1 bg-black"></div>
      </div>
    </div>
  </div>
);

// WhatsApp Header
const ChatHeader = () => (
  <div className="w-full bg-[#F6F6F6] border-b border-gray-200 px-3 py-2 flex items-center justify-between z-20 relative">
    <div className="flex items-center gap-3">
      <div className="flex items-center text-[#007AFF]">
        <ChevronLeft className="w-6 h-6 -ml-1" />
        <div className="w-9 h-9 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-white font-bold text-sm ml-1 flex-shrink-0">
          E
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-[15px] leading-tight text-black">Elzoha AI</h3>
        <p className="text-[11px] text-gray-500 font-medium">online</p>
      </div>
    </div>
  </div>
);

// Typing Indicator
const TypingIndicator = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, originX: 0 }}
    className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm w-fit border border-gray-100 mt-2 mb-2"
  >
    <div className="flex items-center gap-1.5">
      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
    </div>
  </motion.div>
);

// Voice Note Waveform
const VoiceWaveform = ({ playing }: { playing: boolean }) => {
  const bars = Array.from({ length: 24 });
  return (
    <div className="flex items-center gap-[2px] h-6">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          animate={playing ? { height: [4, Math.random() * 16 + 4, 4] } : { height: 4 }}
          transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5, ease: "easeInOut" }}
          className="w-[2px] bg-gray-500 rounded-full"
        />
      ))}
    </div>
  );
};

export default function AnimatedWhatsAppMock() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSequence = async () => {
      setMessages([]);
      setIsTyping(false);

      const wait = (ms: number) => new Promise(resolve => { timeoutId = setTimeout(resolve, ms); });

      await wait(1000);

      // 1. Voice Note Send
      setMessages([{ id: "1", type: "user", isVoiceNote: true, time: "10:41 AM", status: "read" }]);
      
      await wait(1500);

      // 2. Transcribing State
      setMessages(prev => prev.map(m => m.id === "1" ? { ...m, isTranscribing: true } : m));

      await wait(2000);

      // 3. Transcribed Text
      setMessages(prev => prev.map(m => m.id === "1" ? { 
        ...m, 
        isTranscribing: false,
        transcription: "Royal Palace Mumbai ke liye 50kg paneer ka invoice bana do 260 per kg ke rate pe"
      } : m));

      await wait(1000);

      // 4. AI Typing
      setIsTyping(true);
      await wait(1200);
      setIsTyping(false);

      // 5. AI Client Detected
      setMessages(prev => [...prev, { id: "2", type: "ai", content: "Client detected: Royal Palace Mumbai", time: "10:42 AM" }]);

      await wait(800);
      setIsTyping(true);
      await wait(1500);
      setIsTyping(false);

      // 6. AI Invoice Generated
      setMessages(prev => [...prev, { 
        id: "3", 
        type: "ai", 
        content: "Invoice #1247 generated\n50kg Paneer — ₹13,000\nGST @5% — ₹650\n*Total: ₹13,650*", 
        time: "10:42 AM" 
      }]);

      await wait(1000);
      setIsTyping(true);
      await wait(1200);
      setIsTyping(false);

      // 7. AI PDF Ready Prompt
      setMessages(prev => [...prev, { id: "4", type: "ai", content: "Professional PDF ready. Send to client?", time: "10:42 AM" }]);

      await wait(600);

      // 8. AI PDF Preview
      setMessages(prev => [...prev, { 
        id: "5", 
        type: "ai", 
        isPdf: true,
        pdfData: { name: "INV-1247_Royal_Palace.pdf", size: "124 KB", pages: 1 },
        time: "10:42 AM" 
      }]);

      // Wait before loop restarts
      await wait(7000);
      runSequence();
    };

    runSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-full max-w-[340px] mx-auto h-[680px]">
      {/* Background glow */}
      <div className="absolute -inset-4 bg-[var(--color-brand)]/20 rounded-full blur-[60px] opacity-60 pointer-events-none"></div>

      {/* iPhone CSS Frame */}
      <div className="relative w-full h-full rounded-[3rem] bg-black p-3 shadow-2xl z-10 border-[3px] border-[#333] shadow-[0_0_0_1px_#111,inset_0_0_0_1px_#000]">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2 h-2 rounded-full bg-[#111] mr-1"></div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#EFEAE2] rounded-[2.5rem] overflow-hidden flex flex-col">
          <WhatsAppBackground />
          <StatusBar />
          <ChatHeader />

          {/* Chat Area */}
          <div 
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 z-10 flex flex-col gap-2 custom-scrollbar pb-20 scroll-smooth"
          >
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className={`flex flex-col max-w-[85%] ${msg.type === "user" ? "self-end items-end" : "self-start items-start"}`}
                >
                  <div 
                    className={`
                      relative px-3 py-2 text-[15px] shadow-sm leading-snug
                      ${msg.type === "user" ? "bg-[#E2F7CB] text-black rounded-2xl rounded-tr-sm" : "bg-white text-black rounded-2xl rounded-tl-sm border border-gray-100"}
                      ${msg.isPdf ? "p-1 w-full" : ""}
                    `}
                  >
                    {/* Voice Note Handling */}
                    {msg.isVoiceNote && (
                      <div className="flex flex-col min-w-[200px]">
                        <div className="flex items-center gap-3 mb-1">
                          <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white">
                            <Mic className="w-5 h-5" />
                          </button>
                          <div className="flex-1">
                            <VoiceWaveform playing={true} />
                            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                              <span>0:04</span>
                            </div>
                          </div>
                        </div>
                        
                        <AnimatePresence>
                          {msg.isTranscribing && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-green-700 italic border-t border-green-200 pt-2 mt-1 flex items-center gap-1.5"
                            >
                              <div className="w-3 h-3 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                              Transcribing AI...
                            </motion.div>
                          )}
                          
                          {msg.transcription && !msg.isTranscribing && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-sm text-gray-800 bg-white/50 rounded-lg p-2 mt-2 border border-green-200"
                            >
                              <span className="font-medium text-green-700 text-xs uppercase tracking-wider block mb-1">Transcription</span>
                              {msg.transcription}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Standard Text */}
                    {msg.content && !msg.isVoiceNote && (
                      <div className="whitespace-pre-wrap pr-8">
                        {msg.content.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line.includes('*') ? (
                              <span className="font-bold">{line.replace(/\*/g, '')}</span>
                            ) : (
                              line
                            )}
                            {i !== msg.content!.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {/* PDF Preview */}
                    {msg.isPdf && msg.pdfData && (
                      <div className="bg-[#f0f2f5] rounded-xl overflow-hidden w-[220px]">
                        <div className="p-3 flex items-center gap-3 border-b border-white/50">
                          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">{msg.pdfData.name}</p>
                            <p className="text-[11px] text-gray-500 uppercase">{msg.pdfData.pages} page • {msg.pdfData.size} • PDF</p>
                          </div>
                        </div>
                        <div className="bg-white p-3 border-t border-gray-100 flex items-center justify-center">
                           <div className="w-full aspect-[1/1.4] bg-gray-50 border border-gray-200 rounded shadow-sm relative overflow-hidden flex flex-col">
                              {/* Fake PDF rendering */}
                              <div className="h-6 bg-[var(--color-brand)]/10 w-full mb-2"></div>
                              <div className="px-2 space-y-1.5 w-full">
                                <div className="h-2 bg-gray-200 w-1/2 rounded"></div>
                                <div className="h-2 bg-gray-200 w-1/3 rounded"></div>
                                <div className="h-2 bg-gray-200 w-1/4 rounded"></div>
                              </div>
                              <div className="mt-auto p-2 w-full border-t border-gray-100">
                                <div className="h-8 bg-gray-100 w-full rounded"></div>
                              </div>
                           </div>
                        </div>
                      </div>
                    )}

                    {/* Time & Read Ticks */}
                    <div className="absolute right-2 bottom-1 flex items-center gap-1">
                      <span className="text-[10px] text-gray-400">{msg.time}</span>
                      {msg.type === "user" && msg.status === "read" && (
                        <CheckCheck className="w-[14px] h-[14px] text-blue-500" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && <TypingIndicator key="typing" />}
            </AnimatePresence>
          </div>

          {/* Chat Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-2 pb-6 bg-[#F6F6F6] flex items-end gap-2 z-20">
            <div className="flex-1 bg-white rounded-full h-[40px] flex items-center px-4 shadow-sm border border-gray-200">
              <span className="text-gray-400 text-sm">Message</span>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[var(--color-brand)] flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <Mic className="w-5 h-5" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
