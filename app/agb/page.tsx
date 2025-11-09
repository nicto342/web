import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Therapiepraxis Mag. Hanno Prettner.",
}

export default function AgbPage() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardHeader>
              <CardTitle>1. Geltungsbereich</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen, die von Mag. Hanno Prettner,
                Psychotherapeut in Ausbildung unter Supervision, Alter Platz 16, 9020 Klagenfurt (im Folgenden
                "Therapeut" genannt), im Rahmen seiner psychotherapeutischen Praxis erbracht werden. Mit der
                Inanspruchnahme der Leistungen erklärt sich der Patient mit diesen AGB einverstanden.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardHeader>
              <CardTitle>2. Terminvereinbarung und Absagen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm">
                Termine werden nach individueller Vereinbarung getroffen. Im Falle einer Verhinderung ist der Patient
                verpflichtet, den vereinbarten Termin mindestens 24 Stunden im Voraus abzusagen. Erfolgt die Absage
                nicht fristgerecht oder erscheint der Patient nicht zum Termin, wird das Honorar für die versäumte
                Sitzung in voller Höhe in Rechnung gestellt.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardHeader>
              <CardTitle>3. Honorar und Zahlungsbedingungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm">
                Das Honorar für die psychotherapeutischen Leistungen wird vor Beginn der Therapie vereinbart und ist
                nach jeder Sitzung in bar oder per Überweisung zu entrichten. Bei Zahlungsverzug behält sich der
                Therapeut das Recht vor, Verzugszinsen und Mahngebühren zu erheben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardHeader>
              <CardTitle>4. Schweigepflicht</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Der Therapeut unterliegt der gesetzlichen Schweigepflicht gemäß Psychotherapiegesetz. Alle im Rahmen der
                Therapie besprochenen Inhalte werden streng vertraulich behandelt und nicht an Dritte weitergegeben, es
                sei denn, der Patient entbindet den Therapeuten ausdrücklich von der Schweigepflicht oder es besteht eine
                gesetzliche Offenbarungspflicht (z.B. bei akuter Eigen- oder Fremdgefährdung).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardHeader>
              <CardTitle>5. Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Die psychotherapeutische Behandlung ist eine eigenverantwortliche Leistung des Patienten. Der Therapeut
                übernimmt keine Haftung für Schäden, die durch unsachgemäße Anwendung der Therapieinhalte oder durch
                Nichtbeachtung von Anweisungen entstehen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f1e0c5] shadow-lg">
            <CardHeader>
              <CardTitle>6. Gerichtsstand und anwendbares Recht</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Es gilt österreichisches Recht. Gerichtsstand ist Klagenfurt am Wörthersee.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
