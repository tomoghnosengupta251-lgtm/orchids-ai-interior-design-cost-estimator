import { Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text mb-4">
              My Interio World
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Premium interior design and construction services in Kolkata.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-400 hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-slate-400 hover:text-amber-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-slate-400 hover:text-amber-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:09007307197" className="flex items-start gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>090073 07197</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Boral Main Road, Kolkata 700103</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Hours</h4>
            <p className="text-slate-400 text-sm">
              Monday - Saturday<br />
              9:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © 2025 My Interio World. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
