"use client";

import { Smartphone, CalendarCheck, Users, BarChart3 } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const features = [
  {
    title: "Direct Booking Engine",
    description: "Commission-free bookings directly from your website. Best rate guarantee logic built-in.",
    icon: CalendarCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Guest PWA",
    description: "QR-based instant access. No app download required. Check-in, room service, and requests.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Staff PWA",
    description: "Empower your team with mobile tools. Real-time task assignment, housekeeping, and maintenance.",
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Operations Command",
    description: "Centralized dashboard for managers. Monitor pricing, inventory, and staff performance in real-time.",
    icon: BarChart3,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation variant="slide-up">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">The Platform</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Everything you need to run a modern hotel</h2>
          </ScrollAnimation>
          <ScrollAnimation variant="slide-up" delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unified ecosystem connecting your guests, staff, and operations seamlessly.
            </p>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <StaggerItem
              key={index}
              variant="scale"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl -z-10" />
              <div className="glass p-8 rounded-2xl h-full border border-white/10 hover:border-blue-500/30 transition-colors duration-300">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
