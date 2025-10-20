"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image" // Import Image component again

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde die Formular-Logik implementiert werden
    console.log("Form submitted:", formData)
    alert("Vielen Dank für Ihre Nachricht! Ich melde mich zeitnah bei Ihnen.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const openingHours = [
    { day: "Dienstags", hours: "08:00 - 20:00" },
    { day: "Mittwochs", hours: "08:00 - 20:00" },
  ]

  return (
    <div className="py-16 bg-white">
      {" "}
      {/* Changed background here */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Praxis & Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bitte beachten Sie, dass es mir nicht immer möglich ist, Ihren Anruf sofort entgegenzunehmen. Gerne können
            Sie mir hier eine Nachricht zukommen lassen, welche ich zeitnah beantworten werde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Kontaktformular */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Kontaktformular</CardTitle>
              <p className="text-gray-600">
                Schreiben Sie mir eine Nachricht und ich melde mich zeitnah bei Ihnen zurück.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Kontaktinformationen */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kontaktdaten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#00674f] mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      Alter Platz 16
                      <br />
                      9020 Klagenfurt
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#00674f]" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-gray-600">+43 660 19 87 27 5</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#00674f]" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-gray-600">kontakt@pt-prettner.at</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <span>Öffnungszeiten</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-[#00674f]/10 rounded-lg">
                  <p className="text-sm text-[#00674f]">
                    <strong>Um Voranmeldung wird gebeten.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Karte */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">So finden Sie mich</h2>
          <div className="relative h-[400px] w-full rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Alter+Platz+16,+9020+Klagenfurt,+Austria&output=embed&t=k"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </div>
    </div>
  )
}
