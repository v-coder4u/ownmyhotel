"use client";

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const stats = [
  {
    value: "30%",
    label: "Increase in Direct Bookings",
    description: "Stop paying commissions. Keep your revenue.",
  },
  {
    value: "100%",
    label: "Guest Data Ownership",
    description: "Build long-term relationships, not one-time transactions.",
  },
  {
    value: "24/7",
    label: "Automated Operations",
    description: "Seamless guest service even with reduced staff.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollAnimation variant="slide-right">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Designed for <span className="text-gold">Maximum ROI</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation variant="slide-right" delay={0.1}>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                OwnMyHotel isn't just software; it's a revenue engine. We help you shift dependency away from OTAs and build a loyal customer base that books directly with you, time and time again.
              </p>
            </ScrollAnimation>
            
            <StaggerContainer className="grid sm:grid-cols-2 gap-8">
              <StaggerItem variant="slide-up" className="border-l-2 border-gold pl-6">
                <h4 className="text-xl font-semibold mb-2">Brand Protection</h4>
                <p className="text-sm text-primary-foreground/70">Ensure your pricing integrity across all channels.</p>
              </StaggerItem>
              <StaggerItem variant="slide-up" className="border-l-2 border-gold pl-6">
                <h4 className="text-xl font-semibold mb-2">Guest Intelligence</h4>
                <p className="text-sm text-primary-foreground/70">Know your VIPs before they even walk in the door.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <StaggerContainer className="grid gap-8">
            {stats.map((stat, index) => (
              <StaggerItem
                key={index}
                variant="slide-left"
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <p className="text-primary-foreground/60">{stat.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
