const express = require('express');
const app = express();

const arr = [
    {nom: 'Emmanuel'},
    {nom: 'Jean-Luc'},
    {nom: 'Jean'},
    {nom: 'François'},
    {nom: 'Benoit'},
    {nom: 'Marine'}
];

app.set('view engine', 'ejs');

app.get('/toto', function(req, res) {
    res.send('mldmlskfmdsmfksdlmgklsfmkl,gsd');
});

app.get('/charles', function(req, res) {
    res.send('Mais il est ou CHARLES !!!!!');
});

app.get('/test', (req, res) => {
    res.render('index.ejs', {
        salutation: 'coucou',
        candidats: arr
    });
});

app.use('/',express.static('assets'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/*', function (req, res) {
  res.send('Page non trouvée');
});

app.listen(3000, (err) => {
    if (err) {
        throw new Error('Le server n\'a pas démarré');
    }else {
        console.log('Example app listening on port 3000!');
    }
});