// controllers.js
const db = require('../database/db');  // Tuodaan db.js, jotta voidaan suorittaa tietokantakyselyjä

// Hakee kaikki mukit tietokannasta
const getMukit = (req, res) => {
    const sqlQuery = 'SELECT * FROM mukit';
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Virhe tietoja haettaessa', error: err });
        } else {
            res.json(result);
        }
    });
};

// Poistaa mukin tietokannasta
const deleteMuki = (req, res) => {
    const mukiId = req.params.id;
    const sqlQuery = 'DELETE FROM mukit WHERE id = ?';
    db.query(sqlQuery, [mukiId], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Virhe mukin poistamisessa', error: err });
        } else {
            res.json({ message: 'Muki poistettu onnistuneesti' });
        }
    });
};

module.exports = { getMukit, deleteMuki }; // Viedään controllerin funktiot käyttöön routes.js
