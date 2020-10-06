import mysql from 'mysql';
const host = process.env.HOST || 'localhost';
const user = process.env.USER || 'root';
const password = process.env.PASSWORD || '';
const database = process.env.DATABASE || 'test';

export const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting to mysql: ' + err.stack);
        return;
    }
    console.log('database connected as id ' + connection.threadId);
});