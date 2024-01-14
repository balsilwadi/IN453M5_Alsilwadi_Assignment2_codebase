const Database = require('../IN453M2_Alsilwadi_Assignments/my-web-app/database');

class BusinessLayer {
    constructor(dbConfig) {
        this.db = new Database(dbConfig);
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
