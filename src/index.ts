import express from 'express';
require('dotenv').config();

// use PORT inside /.env, if not, use 3000
const port = process.env.PORT || 3000;

const app = express();
const bodyParser = require("body-parser");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});