const nedb = require('nedb-promise');
const database = new nedb({ filename: 'database.db', autoload: true });

//database.insert({ firstname: 'Kristina', lastname: 'Lund', age: 43 });

