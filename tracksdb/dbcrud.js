const pg = require('pg');
const pgUser = 'user1';
const pgPassword = 'user1';
const pgDatabase = 'postgres';

var cs = `postgres://${pgUser}:${pgPassword}@localhost:5432/${pgDatabase}`;
const client = new pg.Client(cs);
var sql = '';
var values = [];

var selectAll = () => {
    client.connect();
    sql = 'SELECT * FROM tracks';
    return new Promise((resolve, reject) => {
        client.query(sql)
            .then(res => resolve(res.rows))
            .catch(err => reject(err.stack))
            .finally(() => client.end());
    })
}

var selectRow = (title) => {
    client.connect();
    sql = 'SELECT * FROM tracks WHERE title = $1';
    values = [title];
    return new Promise((resolve, reject) => {
        client.query(sql, values)
            .then(res => resolve(res.rows))
            .catch(err => reject(err.stack))
            .finally(() => client.end());
    })
}

var insertRow = (title, artist, album) => {
    client.connect();
    sql = 'INSERT INTO tracks (title, artist, album) VALUES($1, $2, $3)';
    values = [title, artist, album];
    client.query(sql, values)
        .then()
        .finally(() => client.end());
}

var deleteRow = (title) => {
    client.connect();
    sql = 'DELETE FROM tracks WHERE title = $1';
    values = [title];
    client.query(sql, values)
        .then()
        .finally(() => client.end());
}

module.exports = {
    selectAll,
    selectRow,
    insertRow,
    deleteRow
}