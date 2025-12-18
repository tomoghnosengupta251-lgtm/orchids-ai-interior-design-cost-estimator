import { Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-black text-background mb-3 sm:mb-4">
              My Interio World
            </h3>
            <p className="text-background/70 leading-relaxed text-sm sm:text-base">
              Premium interior design and construction services in Kolkata.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold text-background mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-background/70 hover:text-background transition-colors text-sm sm:text-base">
                Home
              </Link>
              <Link href="/services" className="block text-background/70 hover:text-background transition-colors text-sm sm:text-base">
                Services
              </Link>
              <Link href="/about" className="block text-background/70 hover:text-background transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link href="/contact" className="block text-background/70 hover:text-background transition-colors text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-background mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:09007307197" className="flex items-start gap-2 text-background/70 hover:text-background transition-colors text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span>090073 07197</span>
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Boral Main Road, Kolkata 700103</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-background mb-3 sm:mb-4">Hours</h4>
            <p className="text-background/70 text-xs sm:text-sm">
              Monday - Saturday<br />
              9:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-background/10 text-center text-background/50 text-xs sm:text-sm">
          © 2025 My Interio World. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
