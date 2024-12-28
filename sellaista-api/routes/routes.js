
// routes.js
const express = require('express');

const router = express.Router();
const { getMukit, deleteMuki } = require('../controllers/controller'); // Tuodaan controllerit

// Reitti mukien hakemiselle
router.get('/mukit', getMukit);

// Reitti mukin poistamiselle
router.delete('/mukit/:id', deleteMuki);

module.exports = router; // Viedään reitit käyttöön server.js-tiedostoon
