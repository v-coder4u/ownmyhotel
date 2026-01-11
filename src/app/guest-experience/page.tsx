"use client";

import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { QrCode, MessageSquare, Bell, CreditCard } from "lucide-react";
import Link from "next/link";

export default function GuestExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 dark:bg-blue-900/10 rounded-l-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                Guest Experience Layer
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                No apps to download. <br />
                <span className="text-blue-600">Just instant service.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Give your guests a seamless, digital-first experience from the moment they check in. 
                Everything they need is one QR scan away.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get a Demo</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-900 relative">
                  {/* Mock UI */}
                  <div className="bg-blue-600 h-32 p-6 text-white">
                    <div className="font-bold text-lg">Welcome, Mr. Smith</div>
                    <div className="text-sm opacity-80">Room 304</div>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-4 -mt-8">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
                      <MessageSquare className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="text-xs font-medium">Requests</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
                      <CreditCard className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="text-xs font-medium">My Bill</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
                      <Bell className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="text-xs font-medium">Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
              <QrCode className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Scan & Go</h3>
              <p className="text-muted-foreground">
                Place a QR code in the room. Guests scan it to access the hotel portal instantly. No login barriers.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
              <MessageSquare className="h-10 w-10 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Digital Concierge</h3>
              <p className="text-muted-foreground">
                Guests can chat with the front desk, request extra pillows, or book a spa appointment without picking up the phone.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
              <Bell className="h-10 w-10 text-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Premium Service</h3>
              <p className="text-muted-foreground">
                For 5-star properties, offer exclusive VIP perks and personalized recommendations directly through the interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
