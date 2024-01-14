const Database = require('./database.js');

class BusinessLayer {
    constructor() {
        this.db = new Database(config.dbConfig); // Using externalized config
    }

    async initialize() {
        await this.db.connect();
    }

    getRowCountIn453A() {
        return this.db.getRowCountIn453A();
    }

    getRowCountIn453C() {
        return this.db.getRowCountIn453C();
    }

    getConcatenatedNamesIn453B() {
        return this.db.getConcatenatedNamesIn453B();
    }
}

module.exports = BusinessLayer;
