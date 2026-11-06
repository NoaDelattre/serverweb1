console.log("Début du server toto.js");
// Express

const express= require('express');
const app= express();
const port= 3001;

app.get('/',(req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Mon serveur est sur le port ${port}`);
});