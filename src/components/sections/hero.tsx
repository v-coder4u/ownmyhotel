"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-gold-foreground backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold mr-2 animate-pulse" />
            The Future of Hotel Operations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          >
            Own your bookings. <br />
            <span className="text-gradient-gold">Own your guests.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Direct booking, pricing control, and hotel operations in one platform. 
            Break free from OTA dependency and build your own brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8 bg-blue-600 hover:bg-blue-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Request Demo
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 flex items-center justify-center gap-8 text-muted-foreground opacity-60 grayscale"
          >
            {/* Placeholders for trusted hotels */}
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">LUXURY HOTELS</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">BOUTIQUE STAYS</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">RESORTS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
