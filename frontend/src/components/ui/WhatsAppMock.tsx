import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCheck, Mic, FileText, Download } from "lucide-react";
import clsx from "clsx";

export type MessageStatus = "sent" | "delivered" | "read";

export type Message = {
  id: string;
  type: "user" | "ai";
  text?: string;
  isTyping?: boolean;
  status?: MessageStatus;
  time?: string;
  attachment?: {
    type: "pdf" | "voice";
    title?: string;
    size?: string;
    duration?: string;
  };
};

interface WhatsAppMockProps {
  messages: Message[];
  typing?: boolean;
}

const Tick = ({ status }: { status?: MessageStatus }) => {
  if (!status) return null;
  if (status === "sent") return <Check className="w-[14px] h-[14px] text-gray-400" />;
  if (status === "delivered") return <CheckCheck className="w-[14px] h-[14px] text-gray-400" />;
  if (status === "read") return <CheckCheck className="w-[14px] h-[14px] text-blue-500" />;
  return null;
};

export const WhatsAppMock = ({ messages, typing }: WhatsAppMockProps) => {
  return (
    <div className="relative w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-[500px]">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3 z-10 shadow-sm">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">E</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium text-[15px] truncate leading-tight">Elzoha Assistant</h3>
          <p className="text-white/80 text-[12px] truncate leading-tight">
            {typing ? "typing..." : "online"}
          </p>
        </div>
      </div>

      {/* Chat Background */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--color-chat-bg)] relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>
        
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={clsx("flex relative z-10 w-full", msg.type === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={clsx(
                  "relative max-w-[85%] rounded-lg px-3 py-2 text-[14.5px] leading-[1.3] chat-bubble-shadow",
                  msg.type === "user" ? "bg-[var(--color-bubble-out)] rounded-tr-none" : "bg-[var(--color-bubble-in)] rounded-tl-none"
                )}
              >
                {/* PDF Attachment */}
                {msg.attachment?.type === "pdf" && (
                  <div className="bg-black/5 rounded-md p-2.5 mb-1.5 flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 rounded bg-red-100 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{msg.attachment.title}</p>
                      <p className="text-xs text-gray-500">{msg.attachment.size} • PDF</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 shrink-0" />
                  </div>
                )}
                
                {/* Voice Attachment */}
                {msg.attachment?.type === "voice" && (
                  <div className="flex items-center gap-3 w-48 mb-1">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <Mic className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div className="flex items-center gap-0.5 h-6 flex-1">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-[#25D366] rounded-full waveform-bar"
                          style={{
                            height: `${8 + Math.random() * 12}px`,
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <span className="text-gray-800 whitespace-pre-wrap">{msg.text}</span>
                
                {/* Time & Ticks */}
                <div className="float-right ml-2 mt-1 flex items-center gap-1 opacity-60 relative top-0.5">
                  <span className="text-[10px] leading-none whitespace-nowrap">{msg.time || "10:42 AM"}</span>
                  {msg.type === "user" && <Tick status={msg.status} />}
                </div>
                {/* Clear float */}
                <div className="clear-both"></div>
              </div>
            </motion.div>
          ))}

          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, originY: 0 }}
              className="flex justify-start relative z-10"
            >
              <div className="bg-[var(--color-bubble-in)] rounded-lg rounded-tl-none px-4 py-3 chat-bubble-shadow flex items-center gap-1.5 h-[36px]">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Fake input area */}
      <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2 border-t border-gray-200 shrink-0">
        <div className="flex-1 bg-white rounded-full h-10 flex items-center px-4 text-gray-400 text-sm shadow-sm">
          Type a message
        </div>
        <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shrink-0 shadow-sm">
          <Mic className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};
