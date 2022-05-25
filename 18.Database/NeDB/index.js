const nedb = require('nedb-promise');
const database = new nedb({ filename: 'database.db', autoload: true });

//database.insert({ firstname: 'Helena', lastname: 'Lund', age: 33 });

async function getPersons() {
  //const persons = await database.find({ lastname: 'Svensson' });
  //const persons = await database.find({ firstname: 'Kristina' });
  //const persons = await database.find({ age: { $gt: 30 } });
  //console.log(persons);
}

getPersons();

//database.update({ firstname: 'Helena' }, { $set: { firstname: 'Hanna', age: 30 } }); 
database.remove({ firstname: 'Hanna' }); 