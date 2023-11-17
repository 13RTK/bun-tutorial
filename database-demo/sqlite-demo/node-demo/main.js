import sqlite3 from "sqlite3";
const db = new sqlite3.Database("school.sqlite");

// db.exec(
//     "CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
// );

let age = 10;
for (let i = 0; i < 10; i++) {
    db.exec(`INSERT INTO student (name, age) VALUES ('JOHN', ${age})`);
}

db.each(
    "SELECT COUNT(*) as count FROM student WHERE age >= 17",
    (_err, row) => {
        console.log(row);
    }
);
