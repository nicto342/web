import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.svg" alt="Mag. Hanno Prettner Logo" className="h-10 w-10" />
              <div>
                <div className="text-xl font-bold">Mag. Hanno Prettner</div>
                <div className="text-sm text-gray-400">Therapiepraxis</div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Professionelle psychotherapeutische Betreuung in vertrauensvoller Atmosphäre. Ihre Gesundheit und Ihr
              Wohlbefinden stehen im Mittelpunkt meiner Arbeit.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#00674f]" />
                <span className="text-gray-400">+43 660 19 87 27 5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#00674f]" />
                <span className="text-gray-400">kontakt@pt-prettner.at</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#00674f] mt-1" />
                <div className="text-gray-400">
                  <div>Alter Platz 16</div>
                  <div>9020 Klagenfurt</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link href="/impressum" className="block text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="block text-gray-400 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Therapiepraxis Mag. Hanno Prettner. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
