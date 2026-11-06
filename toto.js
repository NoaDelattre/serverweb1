console.log("Début du server toto.js");
// Express

const express= require('express');
const app= express();
const port= 3001;

// chargement de page static
app.use(express.static('public'));

/*
app.get('/',(req, res) => {
    res.send('Hello World!');
});
*/

app.get('/INSCRIPTION',(req, res) => {
    console.log("Route /Profil appelée");
    res.send('<html><body><h1>Bonjour profil $NOM</h1></body></html>');
});

app.get('/titi',(req, res) => {
    res.send('Hello Titi!');
});

app.get('/toto',(req, res) => {
    res.send('<html><body><h1>Hello Titi!</h1></body></html>');
});

app.listen(port, () => {
    console.log(`Mon serveur est sur le port ${port}`);
});