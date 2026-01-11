"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BedDouble, 
  User, 
  AlertCircle, 
  SprayCan, 
  Clock, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Gift,
  Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- 1. Live Hotel Digital Twin ---
export function LiveHotelDigitalTwin() {
  // Simulate room states - Start with static state for hydration match
  const [rooms, setRooms] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 101,
      status: "free" as "free" | "occupied" | "cleaning" | "issue"
    }))
  );

  useEffect(() => {
    // Randomize after mount
    setRooms(prev => prev.map((_, i) => {
      const statuses = ["free", "occupied", "cleaning", "issue"] as const;
      return { 
        id: i + 101,
        status: statuses[Math.floor(Math.random() * statuses.length)] 
      };
    }));

    const interval = setInterval(() => {
      setRooms(prev => prev.map(room => {
        if (Math.random() > 0.8) {
          const statuses = ["free", "occupied", "cleaning", "issue"] as const;
          return { ...room, status: statuses[Math.floor(Math.random() * statuses.length)] };
        }
        return room;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "free": return "bg-green-500/20 border-green-500/50 text-green-500";
      case "occupied": return "bg-blue-500/20 border-blue-500/50 text-blue-500";
      case "cleaning": return "bg-yellow-500/20 border-yellow-500/50 text-yellow-500";
      case "issue": return "bg-red-500/20 border-red-500/50 text-red-500";
      default: return "bg-muted";
    }
  };

  return (
    <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10 w-full max-w-md mx-auto overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white/90 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live Operations View
        </h3>
        <span className="text-xs text-muted-foreground">Updated: Live</span>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "aspect-square rounded-md flex flex-col items-center justify-center border text-xs font-medium transition-colors duration-500",
              getStatusColor(room.status)
            )}
          >
            <span className="opacity-70">{room.id}</span>
            <div className="mt-1">
              {room.status === "free" && <BedDouble className="w-4 h-4" />}
              {room.status === "occupied" && <User className="w-4 h-4" />}
              {room.status === "cleaning" && <SprayCan className="w-4 h-4" />}
              {room.status === "issue" && <AlertCircle className="w-4 h-4 animate-pulse" />}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-between text-[10px] text-muted-foreground px-2">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> Free</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Occupied</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500" /> Cleaning</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /> Issue</div>
      </div>
    </Card>
  );
}

// --- 2. Smart ETA Demo ---
export function SmartETADemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Guest Request</div>
            <div className="text-xs text-muted-foreground">Room 402 • Just now</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 rounded-lg p-3 text-sm text-white/90">
          "Can I get some extra towels?"
        </div>

        <div className="space-y-2">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Sparkles className="w-3 h-3 text-gold animate-spin" />
                Analyzing staff availability...
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                key="calculating"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Clock className="w-3 h-3 text-blue-400" />
                Calculating route & load...
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-400">ETA: 6-8 mins</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}

// --- 3. One-Tap Make It Right Demo ---
export function MakeItRightDemo() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const actions = [
    { id: "late-checkout", label: "Late Checkout (1h)", icon: Clock },
    { id: "breakfast", label: "Comp Breakfast", icon: User },
    { id: "discount", label: "$25 Credit", icon: Gift },
  ];

  return (
    <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Alert: Unhappy Guest</span>
      </div>
      <h3 className="text-lg font-medium text-white mb-1">Room 505: Long Wait Time</h3>
      <p className="text-xs text-muted-foreground mb-6">Recover this guest experience instantly.</p>

      <div className="space-y-2">
        {actions.map((action) => (
          <Button
            key={action.id}
            variant="outline"
            className={cn(
              "w-full justify-start h-12 border-white/10 hover:bg-white/5 hover:text-white transition-all",
              selectedAction === action.id && "bg-green-500/20 border-green-500/50 text-green-400 hover:bg-green-500/20 hover:text-green-400"
            )}
            onClick={() => setSelectedAction(action.id)}
          >
            <action.icon className="w-4 h-4 mr-3" />
            {action.label}
            {selectedAction === action.id && (
              <motion.div
                layoutId="check"
                className="ml-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <CheckCircle2 className="w-4 h-4" />
              </motion.div>
            )}
          </Button>
        ))}
      </div>
      
      {selectedAction && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-xs text-green-400 text-center flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-3 h-3" />
          Recovery action sent to guest & staff.
        </motion.div>
      )}
    </Card>
  );
}
