import {Brain, Users, Heart, Lightbulb, Shield, Clock, Accessibility, Ear} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Therapiemethoden",
  description: "Erfahren Sie mehr über meine Therapiemethoden: Existenzanalyse, Logotherapie, Biofeedback und mehr.",
}

export default function TherapiePage() {
  const therapyMethods = [
    {
      icon: Ear,
      title: "Tinnitus - Hörwahrnehmungstherapie",
      description:
          "Tinnitus kann das Leben stark beeinträchtigen – doch es gibt Wege, wieder Ruhe und Lebensqualität zu finden. In meiner Praxis steht am Beginn jeder Therapie eine umfassende Anamnese, um mögliche Ursachen und die individuelle Wahrnehmung des Ohrgeräusches zu erfassen.",
      details: [
        "Wissenschaftlich fundierte Therapiemethoden",
        "Ganzheitlicher Therapieansatz",
        "Gelassenheit trotz Ohrgeräusch",
        "Akustische Stimulation des Gehirns",
        "Konzentration auf angenehme Klänge, mittels medizinischer Kopfhörer",
        "Stressreduktion durch beruhigende Wirkung",
        "Aufbau neuronaler Netzwerke",

      ],
    },
      {
      icon: Brain,
      title: "Existenzanalyse & Logotherapie",
      description:
        "Der österreichische Neurologe und Psychiater Dr. Viktor Frankl war der Begründer der Existenzanalyse und Logotherapie. Im 2. Weltkrieg wurde er in vier Konzentrationslager deportiert und verlor zu alledem am Tage der Befreiung seine geliebte Frau. Von diesen Schicksalsschlägen gekennzeichnet, war es speziell der Sinn, der Frankl verhalf, weiter am Leben festzuhalten.",
      details: [
        "Sinn-zentrierter Beratungs- und Behandlungsansatz",
        "Sinnfindung in schwierigsten Situationen und Lebenskrisen",
        "Neuorientierung in allen Lebenssituationen",
        "JA, zum Lebensagen!",
        "Einfühlsame verstehende phänomenologische Vorgehensweise",
      ],
      questions: ["Kann ich (so) leben?", "Mag ich (so) leben?", "Darf ich (so) leben?", "Soll ich (so) leben?"],
    },
    {
      icon: Heart,
      title: "Biofeedback & Neurofeedback",
      description:
        "Biofeedback ist eine therapeutische Methode, bei der Menschen lernen, unbewusste Körperfunktionen des vegetativen Nervensystems wie zum Beispiel Herzschlag, Atmung, Hautleitwert oder Muskelspannung bewusst wahrzunehmen und zu kontrollieren. Mittels Neurofeedback kann die Regulationsfähigkeit des Gehirns verbessert werden.",
      details: [
        "Bewusste Wahrnehmung von unbewussten Körperfunktionen",
        "Kontrolle über vegetatives Nervensystem",
        "Einsatz bei Stress, Angst und Depression",
        "Behandlung chronischer Schmerzen und Migräne",
        "Wahrnehmung und Training von Bewusstseinszuständen",
      ],
    },
    {
      icon: Lightbulb,
      title: "Gesundheitscoaching",
      description:
        "Als diplomierter Gesundheits- & Sportcoach berate ich Menschen dabei, ihre physische und psychische Gesundheit zu fördern und das allgemeine Wohlbefinden zu verbessern.",
      details: [
        "Entwicklung gesunder Gewohnheiten",
        "Besserer Umgang mit Stress",
        "Ernährungs- und Bewegungsberatung",
        "Verantwortung für eigene Gesundheit",
        "Langfristig gesünder und glücklicher leben",
      ],
    },
  ]

  const importantInfo = [
    {
      icon: Shield,
      title: "Verschwiegenheit",
      description:
        "Als Psychotherapeut unterliege ich der Verschwiegenheitspflicht. Alles Besprochene wird streng vertraulich behandelt.",
    },
    {
      icon: Clock,
      title: "Deine Zeit - Meine Zeit - Unsere Zeit",
      description:
        "Jedem kann einmal etwas unerwartet dazwischen kommen, aus gegenseitiger Rücksichtnahme bitte ich Sie darum, Absagen bis 24 Stunden vor dem Termin zu tätigen, da ich diesen ansonsten in Rechnung stellen muss. Ein verspätetes Erscheinen zum Termin verkürzt die Therapieeinheit.",
    },
    {
      icon: Accessibility,
      title: "Barrierefreiheit",
      description:
        "Die Praxis im denkmalgeschützten Haus ist zum Teil barrierefrei erreichbar - um Ihren Bedürfnissen größtmöglich gerecht zu werden, bitte ich Sie um Mitteilung vor dem persönlichen Erstgespräch.",
    },
  ]

  return (
    <div className="py-16 bg-white">
      {" "}
      {/* Changed background here */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1c1c1e] mb-6">Meine Therapiemethoden</h1>

          {/* Einleitungstext */}
          <div className="bg-[#f1e0c5] rounded-lg p-8 mb-12 shadow-lg">
            <p className=" text-[#1c1c1e] leading-relaxed text-left">
              Ein Problem (griech. „to problema") ist etwas, das einem das Leben vor die Füße wirft und das Gehen
              behindert. Unabhängig von Alter, Geschlecht oder sozialer Herkunft, eignet sich Psychotherapie überall
              dort, wo man am Lebensvollzug gehindert wird oder bereits prophylaktisch an sich arbeiten möchte. Dort, wo
              der Mensch unfrei ist, biete ich eine Unterstützung und Hilfestellung, um ihn wieder ein gutes und
              sinnerfülltes Leben zu ermöglichen.
            </p>
          </div>
        </div>

        {/* Therapy Methods - Untereinander */}
        <div className="space-y-8 mb-16">
          {therapyMethods.map((method, index) => (
            <div key={index} className="bg-[#f1e0c5] rounded-lg p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <method.icon className="h-8 w-8 text-[#00674f]" />
                <h2 className="text-2xl font-bold text-[#1c1c1e]">{method.title}</h2>
              </div>

              <p className="text-[#1c1c1e] mb-6 leading-relaxed">{method.description}</p>

              {/* Spezielle Behandlung für Existenzanalyse */}
              {method.title === "Tinnitus - Hörwahrnehmungstherapie" && (
                  <div className= "mb-6">
                    <p className="text-[#1c1c1e] mb-4 leading-relaxed">
                      Auf dieser Basis entwickeln wir gemeinsam ein maßgeschneidertes Therapiekonzept. Ziel ist es, nicht nur die Wahrnehmung des Tinnitus zu verändern, sondern auch zu lernen, trotz des Geräusches wieder ein erfülltes und sinnvolles Leben zu führen.
                      Darüber hinaus hilft Ihnen ein speziell dafür entwickeltes Gerät, besser mit Geräuschen umzugehen, indem die auditive Wahrnehmung verbessert und das Hören trainiert wird.</p>
                  </div>
              )}
              {method.title === "Existenzanalyse & Logotherapie" && (
                <div className="mb-6">
                  <p className="text-[#1c1c1e] mb-4 leading-relaxed">
                    Es geht weniger darum, die Fragen an das Leben zu stellen, warum gerade mir etwas widerfährt, als
                    vielmehr darum, sich vom Leben befragen zu lassen und darauf zu antworten, es zu verantworten, was
                    gerade jetzt die beste mögliche Handlungsalternative in der jeweiligen Situation ist.
                  </p>
                  <p className="text-[#1c1c1e] mb-4 leading-relaxed">
                    Frankls Schüler war der österr. Psychotherapeut, Arzt und klinische Psychologe Dr.Dr. Alfried
                    Längle, der die Theorien Frankls weiterentwickelte und die psychotherapeutische Richtung der
                    Existenzanalyse gründete. Was für Viktor Frankl so zentral wie der Sinn war, ist für die
                    Existenzanalyse die innere Zustimmung – das JA zum Leben.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-[#00674f]">
                    <h4 className="font-semibold text-[#00674f] mb-2">Die 4 Grundmotivationen des Lebens:</h4>
                    {method.questions?.map((question, idx) => {
                      const words = question.split(' ')
                      const firstWord = words[0]
                      const restOfQuestion = words.slice(1).join(' ')
                      return (
                        <p key={idx} className="text-[#1c1c1e] mb-1">
                          • <span className="underline decoration-1 underline-offset-2">{firstWord}</span> {restOfQuestion}
                        </p>
                      )
                    })}
                  </div>
                  <p className="text-[#1c1c1e] leading-relaxed">
                    Das JA zu jeder Grundmotivation zu finden, führt dann dazu, dass der Mensch von sich behaupten kann:
                    JA, ich <span className="underline decoration-1 underline-offset-2">will</span> (so) leben! Die Vorgehensweise ist hierbei einfühlsam und phänomenologisch. Es geht
                    darum, den Menschen in seiner Einmaligkeit und Einzigartigkeit zu verstehen und seine Freiheit zu
                    wecken, damit das Leben wieder mit Hingabe selbstbestimmt gelebt werden will.
                  </p>
                </div>
              )}

              {/* Tinnitus: Liste und Bild nebeneinander auf Desktop/Tablet, untereinander auf Mobile */}
              {method.title === "Tinnitus - Hörwahrnehmungstherapie" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch">
                  <ul className="space-y-2 md:h-full flex flex-col">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#1c1c1e]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center md:justify-end md:h-full">
                    <div className="relative w-full max-w-[200px] md:max-w-xs md:h-full">
                      <Image
                        src="/images/hanno-prettner-psychologe-Tinnitus.jpg"
                        alt="Tinnitus - Hörwahrnehmungstherapie"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-lg w-full md:h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <ul className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#00674f] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#1c1c1e]">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Foto Existenzanalyse */}
                  {method.title === "Existenzanalyse & Logotherapie" && (
                    <div className="mt-6 flex justify-center">
                      <div className="relative w-full max-w-md">
                        <Image
                          src="/images/hanno-prettner-psychologe-Existenzanalyse.jpg"
                          alt="Existenzanalyse & Logotherapie"
                          width={500}
                          height={350}
                          className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Foto Platz für Biofeedback */}
                  {method.title === "Biofeedback & Neurofeedback" && (
                    <div className="mt-6 flex justify-center">
                      <div className="relative w-full max-w-md">
                        <Image
                          src="/images/hanno-prettner-psychologe-Biofeedback.jpg"
                          alt="Biofeedback & Neurofeedback"
                          width={500}
                          height={350}
                          className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Important Information - Untereinander */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#1c1c1e] text-center mb-8">Wichtige Informationen</h2>
          {importantInfo.map((info, index) => (
            <div key={index} className="bg-[#f1e0c5] rounded-lg p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <info.icon className="h-8 w-8 text-[#00674f]" />
                <h3 className="text-2xl font-bold text-[#1c1c1e]">{info.title}</h3>
              </div>
              <p className="text-[#1c1c1e] leading-relaxed">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-[#00674f] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Bereit für den ersten Schritt?</h3>
            <p className="max-w-3xl mx-auto leading-relaxed mb-6">
              Therapie bedeutet für mich, gemeinsam nach Antworten auf das Leben zu suchen - nicht fertige Lösungen,
              sondern echte, persönliche Wege, die Sinn stiften und Halt geben. In einem ersten Gespräch lernen wir uns
              kennen und besprechen zusammen, welcher Weg für Sie der richtige ist.
            </p>
            <Button size="lg" asChild className="bg-white text-[#00674f] hover:bg-[#f1e0c5]">
              <Link href="/kontakt" scroll={true}>
                Termin vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
