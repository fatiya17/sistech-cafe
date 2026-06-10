"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LoginPage() {
  const btnRef = useRef(null);

  const { contextSafe } = useGSAP();

  const onBtnEnter = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });

  const onBtnLeave = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  });

  return (
    <main className="min-h-screen pt-20 md:pt-12 pb-12 px-6 flex items-start justify-center gradient-hero dark:bg-none">
      <div className="container-form w-full flex flex-col p-4 md:p-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-text-primary dark:text-white mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-text-body dark:text-text-muted text-sm md:text-base">Please log in to your account</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary dark:text-white">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-md border border-border bg-white/40 dark:bg-black/20 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary dark:text-white">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-3 rounded-md border border-border bg-white/40 dark:bg-black/20 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          
          <div className="flex justify-end">
            <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
          </div>

          <div 
            className="w-full mt-10 md:mt-12"
            ref={btnRef}
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnLeave}
          >
            <Button variant="secondary" className="w-full rounded-md h-12 md:h-14 text-base border-none shadow-md hover:shadow-lg">
              Log In
            </Button>
          </div>
        </form>

        <p className="text-center mt-8 text-sm md:text-base text-text-body dark:text-text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
