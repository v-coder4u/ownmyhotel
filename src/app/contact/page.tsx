"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Need to create this
import { Textarea } from "@/components/ui/textarea"; // Need to create this
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk Business</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to modernize your hotel operations? Our team is here to help you get started.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">sales@ownmyhotel.com</p>
                  <p className="text-muted-foreground">support@ownmyhotel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Tower, Tech Park<br />
                    Bangalore, India 560001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-xl border-none">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Work Email</label>
                  <Input id="email" type="email" placeholder="john@hotelname.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hotel-name" className="text-sm font-medium">Hotel Name</label>
                  <Input id="hotel-name" placeholder="Grand Luxury Hotel" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Tell us about your requirements..." />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
