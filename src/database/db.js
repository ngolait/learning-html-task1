const Database = require('sqlite-async');

module.exports = Database.open(__dirname +'/database.sqlite').then(async db => {
    
    //Create database table
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT 
        )
    `);

    //Insert data into the table
    await db.run(`
        INSERT INTO tasks (
            task
        ) VALUES (
            'Learn CRUD with Nodejs'
        )
    `);

    //Select all data from the table
    const dbTasks = await db.all("SELECT * FROM tasks");

    console.log(dbTasks);
});

