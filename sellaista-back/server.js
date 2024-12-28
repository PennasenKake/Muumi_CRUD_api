const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');  // Tuodaan reitit

const app = express(); // Alustetaan app muuttuja ennen sen käyttöä

app.use(cors()); // Tämä mahdollistaa CORS-pyynnöt kaikilta lähteiltä
app.use(express.json()); // Mahdollistaa JSON-pyynnöt

// Käytetään reittejä
app.use('/api', routes); // API-reitit alkiin '/api'

// Palvelimen käynnistäminen
const PORT = 5000

;
app.listen(PORT, () => {
    console.log(`Palvelin käynnissä portissa ${PORT}`);
});
