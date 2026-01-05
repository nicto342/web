import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Euro } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description: "Übersicht über alle Therapieleistungen und Preise in der Praxis Mag. Hanno Prettner.",
}

export default function LeistungenPage() {
  const services = [
    {
      title: "Therapeutisches Erstgespräch",
      duration: "50 Min.",
      price: "65",
      description: "Unverbindliches Kennenlerngespräch und erste Einschätzung.",
      features: [], // No specific features listed in the new text
      popular: false,
    },
    {
      title: "Therapeutisches Einzelgespräch",
      duration: "50 Min.",
      price: "85",
      description: "Individuelle psychotherapeutische Behandlung in Einzelsitzungen.",
      features: [],
      popular: true,
    },
    {
      title: "Biofeedback & Neurofeedback",
      duration: "50 Min.",
      price: "85",
      description: "Lernen Sie, unbewusste Körperfunktionen bewusst wahrzunehmen und zu kontrollieren.",
      features: [],
      popular: false,
    },
    {
      title: "Gesundheitscoaching",
      duration: "50 Min.",
      price: "85",
      description: "Unterstützung zur Förderung Ihrer physischen und psychischen Gesundheit (auch online).",
      features: [],
      popular: false,
    },
    {
      title: "Tinnitus-Erstuntersuchung",
      duration: "75 Min.",
      price: "110",
      description: "Analyse und Therapiekonzept.",
      features: [],
      popular: false,
    },
    {
      title: "Tinnitus-Behandlung & Beratung",
      duration: "50 Min.",
      price: "85",
      description: "Biofeedback, Achtsamkeits- & Entspannungstraining, Beratung",
      features: [],
      popular: false,
    },
    {
      title: "Hörwahrnehmungstraining",
      duration: "30 Min.",
      price: "40",
      description: "Verbesserung der auditiven Wahrnehmung.",
      features: [],
      popular: false,
    },

  ]

  const costSubsidyInfo = [
    {
      type: "ÖGK",
      amount: "€ 33,70",
    },
    {
      type: "BVAEB",
      amount: "€ 48,80",
    },
    {
      type: "SVS",
      amount: "€ 45,00",
    },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Leistungen & Preise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Therapiesitzungen finden idealerweise wöchentlich statt. Profitieren Sie von kostengünstigen Preisen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative bg-[#f1e0c5] shadow-lg ${service.popular ? "ring-2 ring-[#00674f]" : ""}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00674f] text-white">Beliebt</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-[#1c1c1e]">{service.title}</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-[#00674f]" />
                    <span className="text-sm text-[#1c1c1e]">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Euro className="h-5 w-5 text-[#00674f]" />
                    <span className="text-2xl font-bold text-[#00674f]">{service.price}</span>
                  </div>
                </div>
                <p className="text-[#1c1c1e]">{service.description}</p>
              </CardHeader>
              {/* Removed features list as per new text */}
            </Card>
          ))}
        </div>

        {/* Cost Subsidy Information */}
        {/* 
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Kostenzuschuss für Psychotherapie</h2>
          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg text-[#1c1c1e] leading-relaxed">
                Erhalten Sie einen Teil der Kosten für die Psychotherapie von Ihrer Krankenversicherung refundiert,
                insofern eine Diagnose nach ICD vorliegt:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {costSubsidyInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-[#00674f] flex-shrink-0" />
                    <span className="text-lg font-semibold text-[#1c1c1e]">
                      {info.type}: {info.amount}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-[#1c1c1e] leading-relaxed">
                Sie können die ersten 10 Sitzungen ohne Antrag in Anspruch nehmen. Für die Beantragung des Zuschusses
                benötigen Sie eine Bestätigung eines Arztes (z. B. Hausarzt, Allgemeinmediziner oder Psychiater, vor der
                2. Sitzung - nach Erstgespräch), dass Psychotherapie medizinisch indiziert ist. Spätestens ab der 11.
                Sitzung ist ein Antrag bei der Krankenversicherung notwendig.
              </p>
              <h3 className="text-xl font-bold text-[#1c1c1e] mt-6">Kosten für die Antragserstellung</h3>
              <p className="text-lg text-[#1c1c1e] leading-relaxed">
                Für die Erstellung eines Antrags verrechne ich € 30, welche Ihnen von der Krankenversicherung
                rückerstattet werden.
              </p>
              <p className="text-lg text-[#1c1c1e] leading-relaxed">
                Unabhängig davon können Sie jederzeit unbegrenzt die kostengünstigen "in Ausbildung unter
                Supervision"-Tarife privat in Anspruch nehmen.
              </p>
            </CardContent>
          </Card>
        </div>
        */}

        {/* CTA Section */}
        <div className="text-center bg-[#00674f] rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Haben Sie Fragen zu den Leistungen?</h3>
          <p className="text-xl text-[#f1e0c5] mb-6 max-w-2xl mx-auto">
          Gerne berate ich Sie über die für Sie passenden Behandlungsmöglichkeiten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/kontakt">Termin vereinbaren</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
