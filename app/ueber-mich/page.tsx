import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über Mag. Hanno Prettner",
  description: "Lernen Sie Mag. Hanno Prettner kennen - Ihr Psychotherapeut in Klagenfurt.",
}

export default function UeberMichPage() {
  const professionalExperience = [
    "Fit im Beruf",
    "Klinikum Klagenfurt Kabeg – Psychiatrie",
    "Privatkrankenhaus Humanomed Maria Hilf",
  ]

  return (
    <div className="py-16 bg-white">
      {" "}
      {/* Changed background here */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header mit Foto und Einleitung */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-[#1c1c1e] mb-6">Mag. Hanno Prettner</h1>
            <p className="text-xl text-[#1c1c1e]/80 mb-6">Psychotherapeut in Ausbildung unter Supervision</p>
            <p className="text-lg text-[#1c1c1e] leading-relaxed">
              1987 wurde ich in Klagenfurt am Wörthersee / Kärnten geboren, was ich heute auch meinen Wohn- und
              Arbeitssitz nennen darf. 2014 absolvierte ich meinen ABWL-Abschluss mit dem Schwerpunkt Marketing und
              Internationalem Management und der Spezialisierung auf Konsumentenverhalten an der Alpen Adria Universität
              Klagenfurt. Zeitgleich zu diesem Studium und der Anstellung als Medienmanager bei einer Marketingagentur
              erhielt ich mein Sport-Diplom und organisierte im Anschluss daran für 13 Jahre das betriebliche und
              schulische Gesundheitsmanagement in Kärnten für den ASKÖ-Landesverband.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/hanno-prettner-psychologe-werbinich.jpeg"
                alt="Mag. Hanno Prettner"
                width={500}
                height={350}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Psychotherapeutischer Werdegang */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1c1c1e] mb-8 text-center">Mein psychotherapeutischer Werdegang</h2>
          <Card className="bg-[#f1e0c5] shadow-lg">
            {" "}
            {/* Changed card background to beige */}
            <CardContent className="pt-6">
              <p className="text-lg text-[#1c1c1e] leading-relaxed mb-4">
                Die psychologischen Berührungspunkte aus dem Marketingbereich des Konsumentenverhaltens und das
                gemeinsame Herausarbeiten von Wünschen und Zielen mit Klienten und Sportlern veranlassten mich, im Jahr
                2021 das psychotherapeutische Propädeutikum zu beginnen. Durch das Kennenlernen der rund 23
                unterschiedlichen Therapierichtungen in Österreich, fiel meine Wahl auf die Humanistische
                Psychotherapie, um vorwiegend mit einer wertschätzenden verstehenden Haltung am Menschen zu sein.
              </p>
              <p className="text-lg text-[#1c1c1e] leading-relaxed mb-4">
                Seit 2023 bin ich als Biofeedback & Neurofeedbacktherapeut in der psychologischen Gemeinschaftspraxis
                „Fit im Beruf“ tätig. Meine Patienten erlernen hierbei binnen kürzester Zeit Werkzeuge der
                Selbstregulation. In den vertiefenden Einzelgesprächen werden dann die zu Grunde liegenden Probleme
                gemeinsam bearbeitet.
              </p>
              <p className="text-lg text-[#1c1c1e] leading-relaxed">
                Im März 2026 durfte ich neben meiner Anstellung auch meiner Berufung als selbstständiger Psychotherapeut
                in Ausbildung unter Supervision der humanistischen Therapierichtung Existenzanalyse & Logotherapie in
                eigener Praxis nachgehen.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Berufserfahrungen */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1c1c1e] mb-8 text-center">Berufserfahrungen</h2>
          <Card className="bg-[#f1e0c5] shadow-lg">
            {" "}
            {/* Changed card background to beige */}
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {professionalExperience.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-[#00674f] flex-shrink-0" />
                    <span className="text-lg text-[#1c1c1e]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Philosophie & Werte (Optional, falls gewünscht) */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1c1c1e] mb-8 text-center">Meine Philosophie</h2>
          <Card className="bg-[#f1e0c5] shadow-lg">
            {" "}
            {/* Changed card background to beige */}
            <CardContent className="pt-6">
              <p className="text-lg text-[#1c1c1e] leading-relaxed text-center max-w-4xl mx-auto">
                Ich glaube daran, dass jeder Mensch die Fähigkeit zur Heilung und zum Wachstum in sich trägt. Meine
                Rolle sehe ich darin, Sie dabei zu unterstützen, Ihre eigenen Ressourcen zu entdecken und zu stärken.
                Gemeinsam erarbeiten wir Lösungen, die zu Ihnen und Ihrer Lebenssituation passen. Dabei begegne ich
                Ihnen mit Respekt, Wertschätzung und ohne Vorurteile.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
