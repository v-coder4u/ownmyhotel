"use client";

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ClipboardList, Clock, AlertTriangle, BarChart3, Users, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Smart Task Routing",
    description: "Automatically assign housekeeping and maintenance tasks based on staff location and availability.",
    icon: ClipboardList,
    color: "text-blue-500",
  },
  {
    title: "SLA Escalations",
    description: "Set timers for every request type. If a towel isn't delivered in 15 mins, the manager gets alerted.",
    icon: Clock,
    color: "text-red-500",
  },
  {
    title: "Real-time Visibility",
    description: "See exactly what's happening in your hotel right now. Room status, active requests, and staff locations.",
    icon: BarChart3,
    color: "text-indigo-500",
  },
  {
    title: "Staff Attendance",
    description: "Geo-fenced attendance tracking. Know who is on shift and who is on break.",
    icon: Users,
    color: "text-green-500",
  },
];

export default function OperationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollAnimation variant="slide-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Run your hotel on <br />
                  <span className="text-blue-600">Autopilot</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation variant="slide-up" delay={0.1}>
                <p className="text-xl text-muted-foreground mb-8">
                  Eliminate chaos. OwnMyHotel's operations layer ensures every request is tracked, assigned, and completed on time.
                </p>
              </ScrollAnimation>
              <div className="flex gap-4">
                 <Button size="lg" className="bg-blue-600 hover:bg-blue-700">See It in Action</Button>
              </div>
            </div>
            
            <ScrollAnimation variant="fade" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                  <h3 className="font-bold text-lg">Live Operations Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground uppercase font-medium">System Online</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { room: "304", req: "Extra Towels", time: "2m ago", status: "In Progress", color: "bg-blue-100 text-blue-700" },
                    { room: "201", req: "AC Repair", time: "15m ago", status: "Escalated", color: "bg-red-100 text-red-700" },
                    { room: "105", req: "Room Service", time: "5m ago", status: "Pending", color: "bg-yellow-100 text-yellow-700" },
                    { room: "402", req: "Checkout", time: "1m ago", status: "Completed", color: "bg-green-100 text-green-700" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-sm">
                          {item.room}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{item.req}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Operational Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools designed to help your staff work smarter, not harder.
            </p>
          </div>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <StaggerItem
                key={index}
                variant="fade"
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation variant="slide-right">
              <div>
                <h2 className="text-3xl font-bold mb-6">Staff App</h2>
                <p className="text-primary-foreground/80 mb-8">
                  Your staff carries the hotel operations in their pocket. They can update room status, receive tasks, and report maintenance issues instantly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Push notifications for new tasks",
                    "Offline mode for basements",
                    "Photo uploads for maintenance",
                    "One-tap status updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant="slide-left" delay={0.2}>
              <div className="flex justify-center">
                <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[280px]">
                  <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[252px] h-[472px] bg-white dark:bg-gray-900">
                    <div className="p-4 bg-green-600 text-white">
                      <div className="font-bold">Staff Portal</div>
                      <div className="text-xs opacity-90">Housekeeping - Jane</div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-800/30">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-sm">Clean Room 304</span>
                          <span className="bg-orange-200 text-orange-800 text-[10px] px-1.5 py-0.5 rounded">HIGH</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Guest checking in at 2 PM</p>
                        <Button size="sm" className="w-full mt-2 h-7 text-xs bg-orange-600 hover:bg-orange-700">Start Task</Button>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-sm">Clean Room 102</span>
                          <span className="bg-gray-200 text-gray-800 text-[10px] px-1.5 py-0.5 rounded">NORMAL</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Checkout completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
