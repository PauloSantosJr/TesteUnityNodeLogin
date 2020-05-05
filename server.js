const express = require('express');
const bodyParser = require('body-parser');

var port = 3000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// POST
app.post('/log', function(req, res) {

    //if (req.body.status) {
    console.log('Status recebido: ' + req.body.status);
    //}

    res.send('welcome, ' + req.body.status)
});

app.listen(port, () => {
    console.log(`Listering port ${port}`);
});