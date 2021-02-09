const express = require('express');
const path = require('path');
const cors = require('cors'); // Cross Origin Resource Sharing


require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.get('/', (req, res, next) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/api/hobbies', (req, res, next) => {
    //inside the handler
    const options = {
        root: path.join(__dirname, '/'),
        headers: {
            'x-timestamp': Date.now(),
            'Content-Type': 'application/json',
        }
    };

    res.sendFile('hobbies.json', options, (err) => {
        if(err){
            next(err)
        } else {
            console.log('Sent: hobbies.json');
        }
    })
});

app.post('/api/hobbies', (req, res) => {
    res.send('Got POST request');
});

app.put('/api/hobbies', (req, res) => {
    res.send('Got PUT request at /api/hobbies');
});

app.delete('/api/hobbies', (req, res) => {
    res.send('Got DELETE request at the /api/hobbies');
});

const port = process.env.PORT || 3001;  
app.listen(port, () => {
	console.log(`Tim's amazing server running on port ${port}`);
});

//npm installed cors, npm dotenv, install express