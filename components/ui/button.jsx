"use client";
import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"
import gsap from "gsap";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-[10px] font-medium whitespace-nowrap transition-colors duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-primary-light text-foreground border-primary-light group-hover/button:text-primary-foreground",
        secondary: "bg-primary text-primary-foreground hover:bg-primary-light hover:text-foreground active:bg-[#f060a5] active:text-primary-foreground",
        ghost: "bg-transparent text-secondary border-[1.5px] border-secondary hover:bg-secondary hover:text-secondary-foreground",
        dark: "bg-primary-light text-secondary hover:bg-primary hover:text-primary-foreground",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border-border bg-background text-text-primary group-hover/button:text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-8 px-4 text-[8px]",
        lg: "h-12 px-8 text-xs",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  ...props
}, forwardedRef) => {
  const Comp = asChild ? Slot.Root : "button";
  const buttonRef = React.useRef(null);
  const flairRef = React.useRef(null);
  const xSet = React.useRef();
  const ySet = React.useRef();

  React.useImperativeHandle(forwardedRef, () => buttonRef.current);

  React.useEffect(() => {
    if (flairRef.current) {
      xSet.current = gsap.quickSetter(flairRef.current, "xPercent");
      ySet.current = gsap.quickSetter(flairRef.current, "yPercent");
      gsap.set(flairRef.current, { scale: 0 });
    }
  }, []);

  const handleMouseEnter = (e) => {
    if (!buttonRef.current || !flairRef.current || typeof xSet.current !== "function" || typeof ySet.current !== "function") return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    xSet.current(x);
    ySet.current(y);
    gsap.to(flairRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    if (!buttonRef.current || !flairRef.current || typeof xSet.current !== "function" || typeof ySet.current !== "function") return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    xSet.current(x);
    ySet.current(y);
    gsap.to(flairRef.current, { scale: 0, duration: 0.4, ease: "power2.out" });
    if (onMouseLeave) onMouseLeave(e);
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current || !flairRef.current || typeof xSet.current !== "function" || typeof ySet.current !== "function") return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    xSet.current(x);
    ySet.current(y);
    if (onMouseMove) onMouseMove(e);
  };

  let flairBg = "bg-primary";
  if (variant === "outline" || variant === "ghost") flairBg = "bg-secondary";
  else if (variant === "secondary") flairBg = "bg-primary-light";

  if (asChild) {
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={buttonRef}
      {...props}
    >
      <span className="relative z-10 w-full h-full flex items-center justify-center gap-2">
        {children}
      </span>
      <div 
        ref={flairRef} 
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none origin-top-left will-change-transform z-0"
      >
        <div className={cn("absolute top-0 left-0 w-[170%] aspect-square rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none", flairBg)} />
      </div>
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
