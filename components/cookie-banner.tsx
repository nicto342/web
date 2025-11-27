"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { X, Settings } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Immer aktiv
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Prüfe, ob der Benutzer bereits zugestimmt hat
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      // Zeige den Banner nach kurzer Verzögerung
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      // Lade gespeicherte Präferenzen
      const savedPreferences = localStorage.getItem("cookiePreferences")
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    localStorage.setItem("cookieConsent", "accepted")
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted))
    setPreferences(allAccepted)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      essential: true, // Immer aktiv
      analytics: false,
      marketing: false,
    }
    localStorage.setItem("cookieConsent", "declined")
    localStorage.setItem("cookiePreferences", JSON.stringify(allRejected))
    setPreferences(allRejected)
    setShowBanner(false)
  }

  const handleSaveSettings = () => {
    localStorage.setItem("cookieConsent", "accepted")
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    setShowBanner(false)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return // Essenzielle Cookies können nicht deaktiviert werden
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[#f1e0c5] border-2 border-[#00674f] rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {!showSettings ? (
          // Ebene 1: Banner
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1c1c1e]">
                Cookie-Einstellungen
              </h2>
              <button
                onClick={handleRejectAll}
                className="text-[#1c1c1e] hover:text-[#00674f] transition-colors"
                aria-label="Banner schließen"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-[#1c1c1e] leading-relaxed mb-8">
              Wir verwenden Cookies, um unsere Website zu betreiben und zu optimieren. Sie können optionalen Cookies zustimmen oder sie ablehnen. Weitere Informationen finden Sie in unseren{" "}
              <Link 
                href="/datenschutz" 
                className="text-[#00674f] hover:underline font-medium"
              >
                Datenschutzhinweisen
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAcceptAll}
                className="bg-[#00674f] hover:bg-[#004d3a] text-white flex-1"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent flex-1"
              >
                Alle ablehnen
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent flex-1"
              >
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
            </div>
          </div>
        ) : (
          // Ebene 2: Einstellungen
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1c1c1e]">
                Cookie-Einstellungen
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-[#1c1c1e] hover:text-[#00674f] transition-colors"
                aria-label="Zurück"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#00674f]">
                    <th className="text-left py-3 px-4 font-semibold text-[#1c1c1e]">Kategorie</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1c1c1e]">Zweck</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1c1c1e]">Anbieter</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1c1c1e]">Speicherdauer</th>
                    <th className="text-center py-3 px-4 font-semibold text-[#1c1c1e]">Opt-in</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#cf9452]/30">
                    <td className="py-4 px-4 text-[#1c1c1e] font-medium">Essenziell</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">Technisch notwendig</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">Websitebetreiber</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">Session</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-[#00674f] font-medium">nicht deaktivierbar</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#cf9452]/30">
                    <td className="py-4 px-4 text-[#1c1c1e] font-medium">Analyse (z. B. Google Analytics)</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">Reichweitenmessung</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">Google</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">2 Jahre</td>
                    <td className="py-4 px-4 text-center">
                      <Switch
                        checked={preferences.analytics}
                        onCheckedChange={() => togglePreference("analytics")}
                        className="data-[state=checked]:bg-[#00674f]"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#cf9452]/30">
                    <td className="py-4 px-4 text-[#1c1c1e] font-medium">Marketing</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">Personalisierte Werbung</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">z. B. Meta</td>
                    <td className="py-4 px-4 text-[#1c1c1e]">variable</td>
                    <td className="py-4 px-4 text-center">
                      <Switch
                        checked={preferences.marketing}
                        onCheckedChange={() => togglePreference("marketing")}
                        className="data-[state=checked]:bg-[#00674f]"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleSaveSettings}
                className="bg-[#00674f] hover:bg-[#004d3a] text-white flex-1"
              >
                Einstellungen speichern
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="border-[#00674f] text-[#00674f] hover:bg-[#00674f] hover:text-white bg-transparent flex-1"
              >
                Zurück
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
