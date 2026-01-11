"use client";

import { AlertCircle, TrendingDown, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const problems = [
  {
    icon: TrendingDown,
    title: "High OTA Commissions",
    description: "Losing 15-30% of revenue on every booking to third-party platforms.",
  },
  {
    icon: Users,
    title: "No Guest Ownership",
    description: "OTAs own the guest relationship and data. You're just a fulfillment center.",
  },
  {
    icon: AlertCircle,
    title: "Loss of Control",
    description: "Pricing parity rules and lack of direct communication limit your flexibility.",
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <ScrollAnimation variant="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Silent Killer of Hotel Profits</h2>
          </ScrollAnimation>
          <ScrollAnimation variant="slide-up" delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hotels are becoming commodities on OTA shelves. It's time to take back control.
            </p>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <StaggerItem
              key={index}
              variant="scale"
            >
              <Card className="h-full border-none shadow-lg bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 text-red-600 dark:text-red-400">
                    <problem.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
