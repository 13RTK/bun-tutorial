import mysql, { Connection } from "mysql2/promise";

// create the connection to database
const connection: Connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "db_medical",
});

const [rows, fields] = await connection.execute(
    "SELECT * FROM staff WHERE staff_name = ?",
    ["John"]
);

console.log(rows, fields);

await connection.end();
