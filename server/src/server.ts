import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usúarios');

    res.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel'
    ]);
})

app.listen(3333);