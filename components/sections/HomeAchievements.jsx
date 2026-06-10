"use client";

import React from "react";
import { motion } from "motion/react";

const achievements = [
  { name: "indonesia coffee festival", desc: "best espresso blend", year: "2024" },
  { name: "sistech culinary awards", desc: "most innovative cafe concept", year: "2023" },
  { name: "barista championship", desc: "top 3 latte art category", year: "2023" },
  { name: "local choice awards", desc: "favorite coffee shop in town", year: "2022" },
  { name: "green cafe initiative", desc: "best eco-friendly cafe", year: "2021" },
  { name: "red dot design awards", desc: "best interior design for cafe", year: "2020" },
];

export default function HomeAchievements() {
  return (
    <section className="w-full max-w-[1000px] mx-auto mb-20">
      <div className="flex flex-col mb-12">
        <div className="flex justify-between items-start mb-2">
          <p className="text-lg text-text-primary dark:text-white font-medium lowercase">jumlah penghargaan</p>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="bg-[#fef9c3] text-black px-2 py-1 rounded">2020</span>
            <span className="text-text-primary/40 dark:text-white/40">—</span>
            <span className="bg-[#fef9c3] text-black px-2 py-1 rounded">2025</span>
          </div>
        </div>
        <h2 className="text-[4rem] leading-none md:text-[5rem] font-bold text-text-primary dark:text-white font-heading">
          15+
        </h2>
      </div>

      <div className="flex flex-col border-t border-dotted border-text-primary/30 dark:border-white/30">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-center py-6 border-b border-dotted border-text-primary/30 dark:border-white/30 gap-2 md:gap-4 hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
          >
            <div className="flex-1 md:flex-[0.4]">
              <h3 className="text-lg font-medium text-text-primary dark:text-white lowercase">{item.name}</h3>
            </div>
            <div className="flex-1 md:flex-[0.5]">
              <p className="text-md text-text-primary/70 dark:text-white/70 lowercase">{item.desc}</p>
            </div>
            <div className="flex-1 md:flex-[0.1] text-left md:text-right">
              <span className="text-md text-text-primary/70 dark:text-white/70">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-[#fef9c3] overflow-hidden py-2 flex w-full">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap items-center gap-15 px-4 text-black font-bold text-2xl uppercase font-heading w-max"
        >
          {/* First set */}
          <span className="flex items-center text-[12px] gap-2">Sistech</span>
          <span className="flex items-center text-[12px] gap-2">Quality</span>
          <span className="flex items-center text-[12px] gap-2">himti.</span>
          <span className="flex items-center text-[12px] gap-2">Jakarta.</span>
          <span className="flex items-center text-[12px] gap-2 italic">brew</span>
          <span className="flex items-center text-[12px] gap-2">beans</span>
          <span className="flex items-center text-[12px] gap-2">Coffee</span>
          
          {/* Duplicate set for seamless loop */}
          <span className="flex items-center text-[12px] gap-2">Sistech</span>
          <span className="flex items-center text-[12px] gap-2">Quality</span>
          <span className="flex items-center text-[12px] gap-2">himti.</span>
          <span className="flex items-center text-[12px] gap-2">Jakarta.</span>
          <span className="flex items-center text-[12px] gap-2 italic">brew</span>
          <span className="flex items-center text-[12px] gap-2">beans</span>
          <span className="flex items-center text-[12px] gap-2">Coffee</span>
        </motion.div>
      </div>
    </section>
  );
}
