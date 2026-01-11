import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xs">
                O
              </div>
              <span className="text-lg font-bold tracking-tight">OwnMyHotel</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The hotel-first direct booking and operations platform. Own your guests, control your pricing.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/product" className="hover:text-primary transition-colors">Booking Engine</Link></li>
              <li><Link href="/product" className="hover:text-primary transition-colors">Guest PWA</Link></li>
              <li><Link href="/enterprise" className="hover:text-primary transition-colors">Enterprise</Link></li>
              <li><Link href="/operations" className="hover:text-primary transition-colors">Operations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OwnMyHotel. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
