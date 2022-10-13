const mariadb = require("mariadb");
const pool = mariadb.createPool({
    database: "Reto",
    host: "localhost",
    user: "root",
    password: "nava123",
    connectionLimit: 5
});

module.exports = pool;