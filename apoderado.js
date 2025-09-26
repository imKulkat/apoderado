const express = require('express');
const app = express();
app.use((req, res, next) => {
   res.header('X-Frame-Options', 'SAMEORIGIN');
   next();
});
app.get('/poki', (req, res) => {
   res.redirect('https://www.poki.com');
});
app.get('/unblocked-games-77', (req, res) => {
   res.redirect('https://www.unblocked-games-77.com');
});
app.get('/unblocked-games-66', (req, res) => {
   res.redirect('https://www.unblocked-games-66.com');
});
app.get('/coolmath-games', (req, res) => {
   res.redirect('https://www.coolmathgames.com');
});
app.get('/unblocked-games-24', (req, res) => {
   res.redirect('https://www.unblocked-games-24.com');
});
app.get('/armor-games', (req, res) => {
   res.redirect('https://www.armorgames.com');
});
app.get('/kongregate', (req, res) => {
   res.redirect('https://www.kongregate.com');
});
app.get('/addictinggames', (req, res) => {
   res.redirect('https://www.addictinggames.com');
});
app.get('/unblocked-games-333', (req, res) => {
   res.redirect('https://www.unblocked-games-333.com');
});
app.get('/y8', (req, res) => {
   res.redirect('https://www.y8.com');
});
app.get('/agar-io', (req, res) => {
   res.redirect('https://www.agar.io');
});
app.get('/slither-io', (req, res) => {
   res.redirect('https://www.slither.io');
});
app.get('/diep-io', (req, res) => {
   res.redirect('https://www.diep.io');
});
app.get('/krunker-io', (req, res) => {
   res.redirect('https://www.krunker.io');
});
app.get('/geoguessr', (req, res) => {
   res.redirect('https://www.geoguessr.com');
});
app.listen(3000, () => {
   console.log('Apoderado server listening on port 3000');
});
