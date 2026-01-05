import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Therapiepraxis Mag. Hanno Prettner",
}

export default function ImpressumPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Angaben gemäß § 5 TMG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Praxisinhaber:</h3>
                <p className="text-gray-700">
                  Mag. Hanno Prettner
                  <br />
                  Psychotherapeut in Fachausbildung unter Lehrsupervision
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Anschrift:</h3>
                <p className="text-gray-700">
                  Alter Platz 16
                  <br />
                  9020 Klagenfurt
                  <br />
                  Österreich
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Kontakt:</h3>
                <p className="text-gray-700">
                  Telefon: <a href="tel:+436601987275" className="text-gray-700 hover:text-[#00674f] transition-colors cursor-pointer">+43 660 19 87 27 5</a>
                  <br />
                  E-Mail: <a href="mailto:praxis@psychotherapie-prettner.at" className="text-gray-700 hover:text-[#00674f] transition-colors cursor-pointer">praxis@psychotherapie-prettner.at</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Berufsrechtliche Angaben</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Berufsbezeichnung:</h3>
                <p className="text-gray-700">Psychotherapeut in Fachausbildung unter Lehrsupervision</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Zuständige Aufsichtsbehörde:</h3>
                <p className="text-gray-700">
                  Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz (BMSGPK)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Approbation erteilt durch:</h3>
                <p className="text-gray-700">
                  Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz (BMSGPK)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Berufsrechtliche Regelungen:</h3>
                <p className="text-gray-700">Psychotherapiegesetz (PThG 2024)</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Haftung für Inhalte:</h3>
                <p className="text-gray-700 text-sm">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                  und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Haftung für Links:</h3>
                <p className="text-gray-700 text-sm">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Urheberrecht:</h3>
                <p className="text-gray-700 text-sm">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österr.
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
