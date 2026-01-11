"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Layers, Shield, Zap } from "lucide-react";

export function Solution() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             {/* Abstract visual representation of the solution */}
             <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-blue-600/5 border border-blue-500/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                
                {/* Floating Elements Animation */}
                <div className="relative w-full h-full">
                  <ScrollAnimation variant="scale" delay={0.2} className="absolute top-1/4 left-1/4 bg-background shadow-xl p-4 rounded-xl border border-border/50 z-20">
                    <Layers className="h-8 w-8 text-blue-500 mb-2" />
                    <div className="h-2 w-16 bg-muted rounded mb-1" />
                    <div className="h-2 w-10 bg-muted/50 rounded" />
                  </ScrollAnimation>
                  
                  <ScrollAnimation variant="scale" delay={0.4} className="absolute bottom-1/4 right-1/4 bg-background shadow-xl p-4 rounded-xl border border-border/50 z-10">
                    <Shield className="h-8 w-8 text-gold mb-2" />
                    <div className="h-2 w-16 bg-muted rounded mb-1" />
                    <div className="h-2 w-10 bg-muted/50 rounded" />
                  </ScrollAnimation>

                  <ScrollAnimation variant="scale" delay={0.6} className="absolute top-1/3 right-1/3 bg-background shadow-xl p-4 rounded-xl border border-border/50 z-30">
                    <Zap className="h-8 w-8 text-purple-500 mb-2" />
                    <div className="h-2 w-16 bg-muted rounded mb-1" />
                    <div className="h-2 w-10 bg-muted/50 rounded" />
                  </ScrollAnimation>
                  
                  {/* Connecting lines could be SVG here, keeping it simple for now */}
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <ScrollAnimation variant="slide-left">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">The Solution</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
                Your Hotel's Operating System
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation variant="slide-left" delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stop stitching together disconnected tools. OwnMyHotel unifies your booking engine, guest communication, and staff operations into a single, powerful platform.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation variant="slide-left" delay={0.2}>
              <ul className="space-y-4 mb-8">
                {[
                  "Unified Guest Profile",
                  "Automated Upselling",
                  "Real-time Analytics"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            
            <ScrollAnimation variant="slide-left" delay={0.3}>
              <Link href="/product">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
