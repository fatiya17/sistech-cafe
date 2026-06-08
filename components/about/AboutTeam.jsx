"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const team = [
  {
    name: "Sarah Wijaya",
    role: "Co-Founder & CEO",
    description: "Visioner di balik konsep kenyamanan Sistech Cafe.",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Sarah1&mouth=smile&hair=full,pixie&facialHairProbability=0&baseColor=f9c9b6,f2d3b1&backgroundColor=F3E9DC"
  },
  {
    name: "Nadia Putri",
    role: "Co-Founder & Head Roaster",
    description: "Ahli meracik biji kopi dengan presisi tingkat dewa.",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Nadia4&mouth=smile&hair=full,pixie&facialHairProbability=0&baseColor=f9c9b6,f2d3b1&backgroundColor=EBC5DA"
  },
  {
    name: "Rina Kartika",
    role: "Project Manager",
    description: "Memastikan semua operasional berjalan mulus setiap hari.",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Rina2&mouth=smile&hair=full,pixie&facialHairProbability=0&baseColor=f9c9b6,f2d3b1&backgroundColor=FFEBF7"
  },
  {
    name: "Alya",
    role: "Senior Barista",
    description: "Pembuat latte art paling estetik di kota ini.",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Alya3&mouth=smile&hair=full,pixie&facialHairProbability=0&baseColor=f9c9b6,f2d3b1&backgroundColor=c2e0c6"
  },
  {
    name: "Dina",
    role: "Pastry Chef",
    description: "Pencipta kue-kue manis pendamping kopimu.",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Dina5&mouth=smile&hair=full,pixie&facialHairProbability=0&baseColor=f9c9b6,f2d3b1&backgroundColor=fce1e4"
  }
];

export default function AboutTeam() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".team-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.25,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary font-medium mb-4">
            meet the team
          </h2>
          <p className="text-text-body font-medium max-w-[500px] mx-auto">
            Orang-orang hebat di balik layar yang siap menyajikan yang terbaik untukmu.
          </p>
        </div>
        
        {/* Founders Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.slice(0, 2).map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>

        {/* Rest of the team */}
        <div className="flex flex-wrap justify-center gap-8">
          {team.slice(2).map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div className="team-card group relative flex flex-col items-center w-[260px] text-center cursor-pointer">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 relative border-4 border-white shadow-lg transition-all duration-[1s] group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:scale-105">
        <img 
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-[1s] group-hover:rotate-3"
        />
      </div>
      <h3 className="font-heading text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
        {member.name}
      </h3>
      <span className="text-sm font-semibold text-secondary mb-3 px-3 py-1 bg-secondary/10 rounded-full">
        {member.role}
      </span>
      <p className="text-sm font-medium text-text-muted px-4 mb-4">
        {member.description}
      </p>
      
      {/* Socials on hover */}
      <div className="flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <button className="p-2 bg-surface rounded-full shadow-sm text-text-body hover:text-primary hover:bg-primary-light transition-colors">
          <FaInstagram size={16} />
        </button>
        <button className="p-2 bg-surface rounded-full shadow-sm text-text-body hover:text-primary hover:bg-primary-light transition-colors">
          <FaXTwitter size={16} />
        </button>
      </div>
    </div>
  );
}
