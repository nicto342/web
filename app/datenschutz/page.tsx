import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Therapiepraxis Mag. Hanno Prettner",
}

export default function DatenschutzPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Datenschutz auf einen Blick</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
              <p className="text-gray-700 text-sm mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Datenerfassung auf unserer Website</h3>
              <p className="text-gray-700 text-sm">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
                Sie dem Impressum dieser Website entnehmen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Datenschutz</h3>
                <p className="text-gray-700 text-sm">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-gray-700 text-sm">
                  Mag. Hanno Prettner
                  <br />
                  Alter Platz 16
                  <br />
                  9020 Klagenfurt
                  <br />
                  Telefon: +43 660 19 87 27 5
                  <br />
                  E-Mail: kontakt@pt-prettner.at
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Datenerfassung auf unserer Website</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kontaktformular</h3>
                <p className="text-gray-700 text-sm">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Server-Log-Dateien</h3>
                <p className="text-gray-700 text-sm">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
                  Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit
                  der Serveranfrage und IP-Adresse.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm mb-4">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                Sperrung oder Löschung dieser Daten zu verlangen.
              </p>

              <p className="text-gray-700 text-sm">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
                angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Schweigepflicht in der Psychotherapie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                Als Psychologische Psychotherapeutin unterliege ich der besonderen Schweigepflicht nach § 203 StGB. Alle
                Informationen aus therapeutischen Gesprächen werden streng vertraulich behandelt und nicht an Dritte
                weitergegeben. Die Dokumentation erfolgt entsprechend den berufsrechtlichen Vorgaben und wird sicher
                aufbewahrt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
