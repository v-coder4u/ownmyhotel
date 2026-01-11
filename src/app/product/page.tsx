"use client";

import { motion } from "framer-motion";
import { 
  CalendarCheck, 
  Smartphone, 
  Users, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Crown 
} from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

import { LiveHotelDigitalTwin, SmartETADemo, MakeItRightDemo } from "@/components/product/futuristic-demo";

const features = [
  {
    title: "Direct Booking Engine",
    description: "A seamless, mobile-first booking experience that lives on your website. Zero commissions. Best Rate Guarantee built-in to prevent OTA undercutting.",
    icon: CalendarCheck,
    color: "text-blue-500",
  },
  {
    title: "Inventory Management",
    description: "Centralized inventory control. Sync availability across channels (if you must) but prioritize direct bookings. Prevent overbooking with real-time locking.",
    icon: BarChart3,
    color: "text-indigo-500",
  },
  {
    title: "Guest PWA (QR Based)",
    description: "No app downloads. Guests scan a QR code to check in, order room service, request housekeeping, and view their bill. Frictionless experience.",
    icon: Smartphone,
    color: "text-purple-500",
  },
  {
    title: "Staff PWA",
    description: "Housekeeping and maintenance staff get their own app. Real-time task notifications, room status updates, and issue reporting.",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Google Hotel Pricing",
    description: "Push your direct rates to Google Hotel Ads automatically. Capture high-intent traffic without paying OTA commissions.",
    icon: Globe,
    color: "text-red-500",
  },
  {
    title: "Operations Center",
    description: "A bird's-eye view of your entire property. Track requests, SLA breaches, and staff performance in real-time.",
    icon: Zap,
    color: "text-orange-500",
  },
];

const enterpriseFeatures = [
  {
    title: "Guest Experience Command Center",
    description: "Monitor every guest interaction. Intervene in real-time if a VIP guest is unhappy.",
  },
  {
    title: "VIP Guest Intelligence",
    description: "Know your guest's preferences before they arrive. Surprise and delight with data-driven personalization.",
  },
  {
    title: "Brand-Safe Pricing Guardrails",
    description: "Automated rules to ensure your direct price is always the best, protecting your brand integrity.",
  },
];

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-background relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl -z-10" />
         
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <ScrollAnimation variant="slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">The Complete Hotel Operating System</h1>
            </ScrollAnimation>
            <ScrollAnimation variant="slide-up" delay={0.1}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From the moment a guest books to the moment they check out, OwnMyHotel powers every interaction.
              </p>
            </ScrollAnimation>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {features.map((feature, index) => (
              <StaggerItem
                key={index}
                variant="scale"
                className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Futuristic Features Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <ScrollAnimation variant="slide-up">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The Future of Hospitality</h2>
              </ScrollAnimation>
              <ScrollAnimation variant="slide-up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Build features that feel magical to guests and invisible to staff.
                </p>
              </ScrollAnimation>
            </div>

            <div className="space-y-32">
              {/* Feature 1: Digital Twin */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollAnimation variant="slide-right" className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500">
                    Live Digital Twin
                  </div>
                  <h3 className="text-3xl font-bold">A Command Center for Your Hotel</h3>
                  <p className="text-lg text-muted-foreground">
                    Managers see operations, not tables. A live, simplified map of occupancy, requests, and staff movement.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time room status visualization",
                      "Instant alert for pending issues",
                      "Track housekeeping progress live",
                      "Abstracted staff movement tracking"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation variant="scale" delay={0.2} className="flex justify-center lg:justify-end">
                  <LiveHotelDigitalTwin />
                </ScrollAnimation>
              </div>

              {/* Feature 2: Smart ETA */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollAnimation variant="slide-right" className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500">
                    Smart ETA
                  </div>
                  <h3 className="text-3xl font-bold">Uber-like Expectations</h3>
                  <p className="text-lg text-muted-foreground">
                    Stop the "when will it come?" calls. Give guests precise delivery estimates based on real-time staff availability.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Calculates based on staff load",
                      "Reduces repeat calls to front desk",
                      "Builds trust through transparency",
                      "Automatic updates if delayed"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation variant="scale" delay={0.2} className="flex justify-center lg:justify-end">
                  <SmartETADemo />
                </ScrollAnimation>
              </div>

              {/* Feature 3: One-Tap Make It Right */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollAnimation variant="slide-right" className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                    Luxury Touch
                  </div>
                  <h3 className="text-3xl font-bold">One-Tap "Make It Right"</h3>
                  <p className="text-lg text-muted-foreground">
                    Empower managers to recover unhappy guests instantly. Remove decision friction and save the relationship.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Instant compensation options",
                      "Brand-safe recovery protocols",
                      "Auto-suggested based on issue severity",
                      "Logs action for training & audit"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation variant="scale" delay={0.2} className="flex justify-center lg:justify-end">
                  <MakeItRightDemo />
                </ScrollAnimation>
              </div>
            </div>
          </div>

          {/* Enterprise Section */}
          <ScrollAnimation variant="slide-up" className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Crown className="h-8 w-8 text-gold" />
                <h2 className="text-3xl font-bold">Enterprise Exclusive</h2>
              </div>
              
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {enterpriseFeatures.map((feat, i) => (
                  <StaggerItem key={i} variant="scale" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-2 text-gold">{feat.title}</h3>
                    <p className="text-primary-foreground/80">{feat.description}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <CTA />
    </div>
  );
}
