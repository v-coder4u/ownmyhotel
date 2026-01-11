"use client";

import { CTA } from "@/components/sections/cta";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            We believe hotels should <span className="text-blue-600">own their guests</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            For too long, hotels have been held hostage by OTAs. Paying exorbitant commissions for guests that should be theirs. Losing control of the experience. 
            <br /><br />
            We built OwnMyHotel to change that.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide the digital infrastructure that empowers hotels to build direct relationships, maximize revenue, and deliver exceptional guest experiences without intermediaries.
              </p>
              <h2 className="text-3xl font-bold mb-6 mt-12">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A world where "Direct Booking" is the norm, not the exception. Where technology enhances hospitality rather than commoditizing it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <blockquote className="text-2xl font-medium italic mb-6">
                "We built the platform we wished we had when we were running hotels. No fluff, just tools that work and drive revenue."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20" />
                <div>
                  <div className="font-bold">Vaibhav Varshney</div>
                  <div className="text-white/70 text-sm">Founder, OwnMyHotel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
