import { Database, Statement } from "bun:sqlite";

const db: Database = new Database("school.sqlite");
db.exec(
    "CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
);
db.exec("INSERT INTO student (name, age) VALUES ('JOHN', 20)");

const query: Statement<any, any> = db.query(
    "SELECT COUNT(*) AS count, name FROM student GROUP BY name"
);
query.all().forEach((student) => {
    console.log(student.name, student.count);
});
