"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

export function TargetAudience() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <ScrollAnimation variant="slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Every Stage of Growth</h2>
          </ScrollAnimation>
          <ScrollAnimation variant="slide-up" delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're an independent boutique or a luxury enterprise, we have the tools you need.
            </p>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Independent / 2-4 Star */}
          <StaggerItem
            variant="scale"
            className="bg-background rounded-2xl p-8 shadow-xl border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
            <h3 className="text-2xl font-bold mb-2">Independent & Boutique</h3>
            <p className="text-muted-foreground mb-6">For 2-4 Star Hotels looking to modernize.</p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Instant QR Guest Login",
                "Commission-free Booking Engine",
                "Digital Menu & Requests",
                "Staff Task Management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/pricing">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Plans</Button>
            </Link>
          </StaggerItem>

          {/* Enterprise / 5 Star */}
          <StaggerItem
            variant="scale"
            className="bg-black text-white rounded-2xl p-8 shadow-xl border border-gold/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold border border-gold/30">ENTERPRISE</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">Luxury & Enterprise</h3>
            <p className="text-white/70 mb-6">For 5-Star Hotels demanding perfection.</p>
            
            <ul className="space-y-4 mb-8">
              {[
                "VIP Guest Intelligence",
                "Advanced Pricing Guardrails",
                "Full PMS Integration",
                "Dedicated Success Manager",
                "White-label Branding"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/enterprise">
              <Button variant="outline" className="w-full border-gold/50 text-gold hover:bg-gold hover:text-black transition-colors">
                Explore Enterprise
              </Button>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
