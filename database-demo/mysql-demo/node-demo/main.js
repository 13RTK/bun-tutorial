import mysql2 from "mysql2/promise";

const connection = await mysql2.createConnection({
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
