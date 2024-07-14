const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let events = [];

app.post('/events', (req, res) => {
    const newEvent = req.body;
    events.push(newEvent);
    res.status(201).json(newEvent);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
