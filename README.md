# Duurzaamheid Quiz

Een interactieve duurzaamheidsquiz waar gebruikers QR codes moeten scannen om vragen te beantwoorden.

## Hoe het werkt

1. **Start scherm**: Gebruiker ziet uitleg en klikt "Start Quiz"
2. **QR Scanner**: Camera wordt geactiveerd om QR codes te scannen
3. **QR Code scan**: Gebruiker scant een QR code van een poster
4. **Vraag beantwoorden**: Specifieke vraag wordt getoond
5. **Correct antwoord**: Success scherm, dan terug naar scanner
6. **Herhaal**: Scan volgende QR code voor volgende vraag

## QR Codes maken

Gebruik `qr-generator.html` om QR codes te maken voor vragen:
- `index.html?q=1` - Vraag 1
- `index.html?q=2` - Vraag 2
- etc.

## Technische details

- **QR Scanner**: Gebruikt `qr-scanner` library van @nimiq
- **Camera**: Vraagt toestemming bij start
- **Flow**: Altijd via QR codes, geen automatische progressie
- **Responsive**: Werkt op desktop en mobiel

## Bestanden

- `index.html` - Hoofdapplicatie
- `styles.css` - Styling
- `qr-generator.html` - Tool om QR codes te maken
- `quiz-data.json` - Vragen database (niet gebruikt in huidige versie)

## Installatie

1. Open `index.html` in een moderne browser
2. Sta camera toestemming toe
3. Genereer QR codes met `qr-generator.html`
4. Print QR codes op posters
5. Laat gebruikers de QR codes scannen!</content>
<parameter name="filePath">vscode-vfs://github/SALAJEV/SDG/README.md