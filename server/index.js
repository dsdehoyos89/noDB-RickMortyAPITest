const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const ctrl = require('./ctrl.js');


const port = 3001;
const app = express();


// const {getCharacters} = require('./ctrl');


app.use(json());
app.use(cors());

app.get('/api/people', ctrl.getFavorites);
app.post('/api/people', ctrl.addComment)
app.post('/api/people', ctrl.addChar);
app.delete('/api/people/:id', ctrl.deleteChar);
app.put('/api/people/:id', ctrl.updateName);


app.listen( port, () => {
    console.log(`Listening on port: ${ port }`);
});