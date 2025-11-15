import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Überprüfe Umgebungsvariablen
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD

    if (!smtpHost || !smtpUser || !smtpPassword) {
      return NextResponse.json(
        { error: 'E-Mail-Konfiguration fehlt. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      )
    }

    // Nodemailer Transporter konfigurieren
    // Diese Konfiguration verwendet Umgebungsvariablen
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true für 465, false für andere Ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // IONOS benötigt manchmal diese Optionen
      tls: {
        rejectUnauthorized: false,
      },
    })

    // E-Mail-Inhalt für die Praxis
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'praxis@psychotherapie-prettner.at',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ''}

Nachricht:
${message}
      `,
    }

    // E-Mail senden
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet!' },
      { status: 200 }
    )
  } catch (error: any) {
    // Detailliertere Fehlermeldung für verschiedene Fehlertypen
    let errorMessage = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentifizierungsfehler: Bitte überprüfen Sie Benutzername und Passwort in der Konfiguration.'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Verbindungsfehler: Der E-Mail-Server konnte nicht erreicht werden. Bitte überprüfen Sie die SMTP-Einstellungen.'
    } else if (error.response) {
      errorMessage = `E-Mail-Server-Fehler: ${error.response}`
    } else if (error.message) {
      errorMessage = `Fehler: ${error.message}`
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

