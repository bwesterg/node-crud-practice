const express = require('express');
const app = express();
const port = 9001;
const cors = require('cors');
const knex = require('knex');
const databaseConfiguration = require('./knexfile').development;
const database = knex(databaseConfiguration);

app.use(cors());
app.use(express.json());

app.get('/capstones', index);
app.get('/capstones/:id', show);
app.post('/capstones', create);

function index(_, response) {
    database('capstones')
        .then(capstones => response.status(200).send(capstones));
}

function show(request, response) {
    //blog
    // request.params.index
    database('capstones')
        .where('id', request.params.id)
        .then(capstones => response.status(200).send(capstones[0]));
}

function create(request, response) {
    const {capstone} = request.body
    //blog
    // console.log('request body', request.body);
    database('capstones')
        .insert()
}


app.listen(port, () => console.log(`listening on port ${port}`));