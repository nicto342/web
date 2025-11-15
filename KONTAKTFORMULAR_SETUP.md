# Kontaktformular Setup

Das Kontaktformular ist jetzt vollständig implementiert und funktioniert. Um E-Mails zu senden, müssen Sie die folgenden Schritte durchführen:

## 1. Dependencies installieren

Führen Sie folgenden Befehl aus, um die benötigten Pakete zu installieren:

```bash
npm install
```

## 2. Umgebungsvariablen konfigurieren

Erstellen Sie eine `.env.local` Datei im Hauptverzeichnis des Projekts mit folgenden Variablen:

```env
# SMTP E-Mail Konfiguration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@example.com
SMTP_PASSWORD=ihr-passwort
SMTP_FROM=ihre-email@example.com
CONTACT_EMAIL=praxis@psychotherapie-prettner.at
```

### Wichtige Hinweise:

#### Für Gmail:
1. Gehen Sie zu Ihrem Google Account > Sicherheit
2. Aktivieren Sie die 2-Schritt-Verifizierung (falls noch nicht aktiviert)
3. Erstellen Sie ein "App-Passwort":
   - Gehen Sie zu: https://myaccount.google.com/apppasswords
   - Wählen Sie "Mail" als App und "Andere" als Gerät
   - Geben Sie einen Namen ein (z.B. "Website Kontaktformular")
   - Verwenden Sie das generierte 16-stellige Passwort als `SMTP_PASSWORD`

#### Für andere E-Mail-Anbieter:
- **Outlook/Office365**: `smtp.office365.com`, Port `587`
- **Web.de**: `smtp.web.de`, Port `587`
- **GMX**: `smtp.gmx.net`, Port `587`
- **1&1/IONOS**: `smtp.ionos.com`, Port `587`

Die genauen SMTP-Einstellungen finden Sie in der Dokumentation Ihres E-Mail-Anbieters.

## 3. Server neu starten

Nach dem Erstellen der `.env.local` Datei, starten Sie den Development-Server neu:

```bash
npm run dev
```

## Funktionalität

Das Kontaktformular:
- ✅ Validiert alle Eingaben
- ✅ Sendet E-Mails direkt über die Website
- ✅ Zeigt Loading-Status während des Sendens
- ✅ Zeigt Erfolgs- oder Fehlermeldungen
- ✅ Setzt das Formular nach erfolgreichem Versand zurück
- ✅ Sendet E-Mails an die konfigurierte E-Mail-Adresse (`CONTACT_EMAIL`)

Die E-Mail enthält:
- Name des Absenders
- E-Mail-Adresse des Absenders (als Reply-To)
- Telefonnummer (falls angegeben)
- Nachricht

## Fehlerbehebung

Falls E-Mails nicht ankommen:
1. Überprüfen Sie die SMTP-Einstellungen in `.env.local`
2. Bei Gmail: Stellen Sie sicher, dass Sie ein App-Passwort verwenden, nicht Ihr normales Passwort
3. Überprüfen Sie die Firewall-Einstellungen (Port 587 muss offen sein)
4. Schauen Sie in die Server-Logs für detaillierte Fehlermeldungen

