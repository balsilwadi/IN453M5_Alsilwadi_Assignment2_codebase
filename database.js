const mysql = require('mysql2');

class Database {
    constructor(connectionConfig) {
        this.connection = mysql.createConnection(connectionConfig);
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.connection.connect(error => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    getRowCountIn453A() {
        return new Promise((resolve, reject) => {
            this.connection.execute('SELECT COUNT(*) AS count FROM IN453A', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results[0].count);
            });
        });
    }

    getRowCountIn453C() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT COUNT(*) AS count FROM IN453C', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results[0].count);
            });
        });
    }

    getConcatenatedNamesIn453B() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT CONCAT(first_name, " ", last_name) AS full_name FROM IN453B', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.map(row => row.full_name));
            });
        });
    }
}

module.exports = Database;
