"use client";

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Integrate with your existing PMS in one click. We sync availability and rates instantly.",
  },
  {
    number: "02",
    title: "Customize",
    description: "Configure your branding, room types, and upsell packages to match your hotel's vibe.",
  },
  {
    number: "03",
    title: "Convert",
    description: "Go live with your new booking engine and PWA. Watch direct bookings soar.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <ScrollAnimation variant="slide-up">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">Onboarding</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Go live in days, not months</h2>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0" />

          {steps.map((step, index) => (
            <StaggerItem
              key={index}
              variant="scale"
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center mb-6 relative group hover:border-blue-500/50 transition-colors duration-300">
                <span className="text-4xl font-bold text-blue-600/20 group-hover:text-blue-600/40 transition-colors">{step.number}</span>
                {index < steps.length - 1 && (
                   <ArrowDown className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/30 h-8 w-8 animate-bounce" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
