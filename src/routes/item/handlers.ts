import mysql from "mysql";
import { connection } from "../../services/db";

export const createTable = async () => {
    const sql: string = `
    CREATE TABLE IF NOT EXISTS item (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );`;
    return new Promise((resolve, reject) => {
        connection.query(sql, async (err: Error, results: any) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export const getItems = async () => {
    const sql: string = `SELECT * FROM item;`;
    return new Promise((resolve, reject) => {
        connection.query(sql, async (err: Error, results: any) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export const getItem = async (id: string) => {
    const sql: string = mysql.format('SELECT * FROM item WHERE id = ?;', [id]);
    return new Promise((resolve, reject) => {
        connection.query(sql, async (err: Error, results: any) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export const createItem = async (name: string) => {
    const sql: string = mysql.format('INSERT INTO item (name) VALUES (?);', [name]);
    return new Promise((resolve, reject) => {
        connection.query(sql, async (err: Error, results: any) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export const updateItem = async (id: string, name: string) => {
    const sql: string = mysql.format('UPDATE item SET name = ? WHERE id = ?;', [name, id]);
    return new Promise((resolve, reject) => {
        connection.query(sql, async (err: Error, results: any) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

export const deleteItem = async (id: string) => {
    const sql: string = mysql.format('DELETE FROM item WHERE id = ?;', [id]);
    return new Promise((resolve, reject) => {
        connection.query(sql, async (err: Error, results: any) => {
            if (err) throw err;
            resolve(results);
        });
    });
};