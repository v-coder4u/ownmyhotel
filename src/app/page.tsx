import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Benefits } from "@/components/sections/benefits";
import { TargetAudience } from "@/components/sections/target-audience";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Benefits />
      <TargetAudience />
      <CTA />
    </div>
  );
}
