"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const plans = [
  {
    name: "Standard",
    price: "₹1,499",
    period: "/month",
    description: "Perfect for independent hotels and boutique stays.",
    features: [
      "QR Guest Login",
      "Commission-free Booking Engine",
      "Basic Inventory Management",
      "Guest Requests System",
      "Staff PWA (Basic)",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹25k–40k",
    period: "/month",
    description: "Full-suite control for luxury and 5-star properties.",
    features: [
      "Everything in Standard",
      "OTP Guest Login",
      "VIP Guest Intelligence",
      "Operations Command Center",
      "Pricing Guardrails",
      "PMS Integration (Oracle, etc.)",
      "Dedicated Success Manager",
      "24/7 Priority Support",
    ],
    cta: "Contact Sales",
    popular: true,
  },
];

const featuresComparison = [
  { feature: "Commission-free Bookings", standard: true, enterprise: true },
  { feature: "QR Guest Check-in", standard: true, enterprise: true },
  { feature: "Staff Mobile App", standard: "Basic", enterprise: "Advanced" },
  { feature: "Guest Data Ownership", standard: true, enterprise: true },
  { feature: "VIP Profiling", standard: false, enterprise: true },
  { feature: "Dynamic Pricing Guardrails", standard: false, enterprise: true },
  { feature: "PMS 2-Way Sync", standard: false, enterprise: true },
  { feature: "Multi-property Support", standard: false, enterprise: true },
  { feature: "Custom Branding", standard: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <ScrollAnimation variant="slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            </ScrollAnimation>
            <ScrollAnimation variant="slide-up" delay={0.1}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your property size and needs. No hidden fees.
              </p>
            </ScrollAnimation>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {plans.map((plan, index) => (
              <StaggerItem
                key={index}
                variant="scale"
                className={`h-full`}
              >
                <Card className={`relative flex flex-col h-full ${plan.popular ? "border-blue-500 shadow-xl" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Comparison Table */}
          <ScrollAnimation variant="slide-up" className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="p-4 text-left font-medium">Feature</th>
                    <th className="p-4 text-center font-medium">Standard</th>
                    <th className="p-4 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {featuresComparison.map((row, index) => (
                    <tr key={index} className="bg-background">
                      <td className="p-4 text-sm font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-sm">
                        {row.standard === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : row.standard === false ? (
                          <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                        ) : (
                          <span>{row.standard}</span>
                        )}
                      </td>
                      <td className="p-4 text-center text-sm">
                        {row.enterprise === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span>{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <CTA />
    </div>
  );
}
