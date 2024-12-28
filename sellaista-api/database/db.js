
// db.js
const mysql = require('mysql');


// Tietokantayhteys
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Käytä omaa MySQL-käyttäjätunnustasi
    password: 'root',       // Käytä omaa salasanaasi
    database: 'MuumiMukiDB' // Käytettävä tietokanta
});

// Yhdistä tietokantaan
db.connect((err) => {
    if (err) {
        console.error('Tietokantayhteys epäonnistui: ', err);
        return;
    }
    console.log('Yhdistetty MySQL-tietokantaan');
});

module.exports = db; // Viedään db.js, jotta voidaan käyttää muissa tiedostoissa
