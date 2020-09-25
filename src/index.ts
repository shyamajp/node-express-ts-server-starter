import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
require('dotenv').config();

// use PORT inside /.env, if not, use 3000
const port = process.env.PORT || 3000;
// use MONGO_URI inside /.env, if not, use default localhost uri
const mongo_uri: string = process.env.MONGO_URI || "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const app = express();

// parse requests of content-type: application/json, application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});