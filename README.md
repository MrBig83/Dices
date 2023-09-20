# Dices - Din butik för tärningar

1. Instruktioner för installation och start i utvecklarmiljö
2. E-handeln
3. Dependencies

### 1. Instruktioner
Klona eller forka repot. 

Kopiera .env-filen som skickats separat. Klistra in .env-filen i ** <där du lagt projektet>/dices/server **

Öppna valfri terminal och navigera till: 
** <där du lagt projektet>/dices/server **
Väl där kör du kommandot `npm install` för att installera alla dependencies. (Specade längre ner i denna fil) 
När installationen är klar kör kommandot `npm run dev` för att starta webservern.

Öppna sedan en andra terminal och navigera till 
** <där du lagt projektet>/dices/client **
Väl där kör du kommandot `npm install` för att installera alla dependencies. (Specade längre ner i denna fil) 
När installationen är klar kör kommandot `npm run dev` för att starta front end klienten. Klicka på länken som visas i din terminal. 

### 2. E-handeln
- Det går inte att handla utan att vara inloggad.
- Skapa ett konto via "Konto"
  - Samtliga fält i "Skapa konto" är tvugna att vara ifyllda
- Logga in med dina nya kontouppgifter (email och lösenord)
- Välj och vraka bland alla våra 3 produkter
- I checkout - använd rabattkoden SUNRISE för 25% rabatt

### 3. Dependencies
##### Backend:
    "bcrypt": "^5.1.1",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "stripe": "^13.4.0"
    "nodemon": "^3.0.1" (Dev dep.)

##### Front end: 
    "bcryptjs": "^2.4.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0"
    "@types/react": "^18.2.15", (Dev dep.)
    "@types/react-dom": "^18.2.7", (Dev dep.)
    "@vitejs/plugin-react": "^4.0.3", (Dev dep.)
    "eslint": "^8.45.0", (Dev dep.)
    "eslint-plugin-react": "^7.32.2", (Dev dep.)
    "eslint-plugin-react-hooks": "^4.6.0", (Dev dep.)
    "eslint-plugin-react-refresh": "^0.4.3", (Dev dep.)
    "vite": "^4.4.5" (Dev dep.)
  
