import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config();

// use PORT inside /.env, if not, use 3000
const port = process.env.PORT || 3000;

const app = express();

// parse requests of content-type: application/json, application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});