"use client";

import { Button } from "@/components/ui/button";
import { Shield, Lock, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

export default function EnterprisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation variant="slide-up">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-8">
                FOR LUXURY & 5-STAR HOTELS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                The Brand & Experience <br />
                <span className="text-gradient-gold">Control Layer</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation variant="slide-up" delay={0.1}>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                Luxury isn't just about the property. It's about the experience. 
                OwnMyHotel gives you the digital infrastructure to match your physical excellence.
              </p>
              <div className="flex justify-center gap-6">
                <Link href="/contact">
                  <Button className="bg-gold text-black hover:bg-gold/90 text-lg px-8 h-12">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-12">
            <StaggerItem variant="scale" className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Brand Protection</h3>
              <p className="text-white/60">
                Never let an OTA undercut your direct price. Our guardrails automatically adjust rates to ensure your site always offers the best value.
              </p>
            </StaggerItem>
            <StaggerItem variant="scale" className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-400">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Operational Excellence</h3>
              <p className="text-white/60">
                Enforce SLAs on every guest request. If room service takes longer than 20 minutes, management is notified immediately.
              </p>
            </StaggerItem>
            <StaggerItem variant="scale" className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Data Sovereignty</h3>
              <p className="text-white/60">
                Your guest data belongs to you. We provide enterprise-grade security and full exportability, compliant with global standards.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation variant="slide-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Guest Experience Command Center
              </h2>
              <p className="text-lg text-white/60 mb-8">
                A single pane of glass for your entire hotel operation. Watch requests come in real-time, monitor staff locations, and track sentiment analysis.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time sentiment tracking",
                  "Staff efficiency metrics",
                  "VIP arrival alerts",
                  "Predictive maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gold">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            <ScrollAnimation variant="scale" delay={0.2} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-2 h-[400px] flex items-center justify-center relative overflow-hidden">
               {/* Abstract UI representation */}
               <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
               <div className="text-center">
                 <div className="text-6xl font-bold text-white/10">COMMAND CENTER</div>
                 <div className="mt-4 text-gold/50">UI Placeholder</div>
               </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Secure your legacy.</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg h-14 px-10">
              Contact Enterprise Sales <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
