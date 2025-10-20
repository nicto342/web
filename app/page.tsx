import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
      <div>
        {/* Hero Section with Background Image */}
        <section className="min-h-screen flex items-center relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
                src="/images/naturhintergrund.jpg"
                alt="Natürliche Umgebung"
                fill
                className="object-cover brightness-110 contrast-110 saturate-110"
                priority
                quality={95}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/70" />
          </div>

          {/* Content */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#1c1c1e] sm:text-6xl">
                Willkommen in meiner <span className="text-[#00674f]">Therapiepraxis</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#1c1c1e]/80 mx-auto max-w-3xl">
                In meiner Praxis biete ich Ihnen einen geschützten Raum, um Ihre Herausforderungen zu besprechen und
                gemeinsam Wege zu finden, die zu mehr Wohlbefinden und Lebensqualität führen. Ich begleite Sie einfühlsam
                und professionell auf Ihrem Weg zu innerer Stärke und persönlichem Wachstum.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="bg-[#00674f] hover:bg-[#00674f]/90 text-white">
                  <Link href="/kontakt">Termin vereinbaren</Link>
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-white/80 backdrop-blur-sm"
                >
                  <Link href="/therapie">Mehr erfahren</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      {/* Pages Preview Section */}
      <section className="space-y-2">
        {/* 1: Die Therapie */}
        <div className="py-2 bg-gradient-to-br from-[#f1e0c5] to-[#cf9452]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#1c1c1e] mb-1">Die Therapie</h2>
                <p className="text-base text-[#1c1c1e]/80 mb-1">
                  Erhalten Sie einen Einblick in meine psychotherapeutischen Methoden und Ansätze
                </p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Meine Ausbildung und Qualifikationen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Beruflicher Werdegang</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Meine therapeutische Philosophie</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent"
                >
                  <Link href="/therapie">Mehr zur Therapie</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/hanno-prettner-psychologe-therapie.jpeg"
                  alt="Therapieraum"
                  width={400}
                  height={80}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2: Wer bin ich */}
        <div className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div className="lg:order-2">
                <h2 className="text-2xl font-bold text-[#1c1c1e] mb-1">Wo Sie mich finden</h2>
                <p className="text-base text-[#1c1c1e]/80 mb-1">
                  Der Ort für Schutz, Raum & Halt - Informationen zu meiner Praxis und Kontaktmöglichkeiten
                </p>
                <ul className="space-y-2 mb-2">

                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Existenzanalyse & Logotherapie</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Verhaltenstherapeutische Ansätze</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Gesprächspsychotherapie</span>
                  </li>

                </ul>
                <Button
                    asChild
                    variant="outline"
                    className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent"
                >
                  <Link href="/kontakt">Zur Praxis</Link>
                </Button>

              </div>
              <div className="relative lg:order-1">
                <Image
                    src="/images/wegweiser.jpg"
                    alt="Therapieraum"
                    width={400}
                    height={80}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3: Wo Sie sich finden */}
        <div className="py-2 bg-gradient-to-br from-[#f1e0c5] to-[#cf9452]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#1c1c1e] mb-1">Wer bin ich?</h2>
                <p className="text-base text-[#1c1c1e]/80 mb-1">
                  Lernen Sie mich schon kurz vorab anhand meines Steckbriefes kennen
                </p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Praxisadresse und Anfahrt</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Öffnungszeiten und Terminvereinbarung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Kontaktformular</span>
                  </li>
                </ul>
                <Button
                    asChild
                    variant="outline"
                    className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent"
                >
                  <Link href="/ueber-mich">Mehr über mich</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/hanno-prettner-psychologe-uebermich.jpeg"
                  alt="Praxis"
                  width={400}
                  height={80}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4: Leistungen & Preise */}
        <div className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div className="lg:order-2">
                <h2 className="text-2xl font-bold text-[#1c1c1e] mb-1">Leistungen & Preise</h2>
                <p className="text-base text-[#1c1c1e]/80 mb-1">
                  Therapiesitzungen finden idealerweise wöchentlich statt. Profitieren Sie von kostengünstigen Preisen.
                </p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Therapeutisches Erstgespräch & Einzelgespräch</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Biofeedback, Neurofeedback & Gesundheitscoaching</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#1c1c1e]/70">Tinnitus-Hörwahrnehmungstraining Audiva & Entspannungstraining</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent"
                >
                  <Link href="/leistungen">Zu den Leistungen</Link>
                </Button>
              </div>
              <div className="relative lg:order-1">
                <Image
                  src="/images/hanno-prettner-psychologe-kosten.jpg"
                  alt="Leistungen"
                  width={400}
                  height={80}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00674f] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für den ersten Schritt?</h2>
          <p className="text-xl text-[#f1e0c5] mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch. Gemeinsam finden wir den passenden Weg für Sie.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-[#f1e0c5] text-[#00674f] hover:bg-[#cf9452] hover:text-white"
          >
            <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
