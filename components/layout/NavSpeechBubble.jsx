"use client";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

export default function NavSpeechBubble({ isVisible, title, description }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0, y: 10 }}
          animate={{ opacity: 1, scaleY: 1, y: 0 }}
          exit={{ opacity: 0, scaleY: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-md p-4 shadow-[0_8px_24px_rgba(87,73,51,0.12)] border border-border origin-top z-50 pointer-events-none"
        >
          {/* Pointer/Triangle */}
          <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-border"></div>
          
          <div className="relative z-10 text-left">
            <h4 className="text-sm font-semibold text-text-primary mb-1">{title}</h4>
            <p className="text-[11px] leading-tight text-text-muted">{description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
