"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/80 to-blue-600/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <ScrollAnimation variant="scale">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to take back control?
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation variant="slide-up" delay={0.1}>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join hundreds of hotels that have already switched to OwnMyHotel.
            Stop renting your guests. Start owning them.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation variant="slide-up" delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg h-14 px-8">
                Get Started Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8">
                Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
