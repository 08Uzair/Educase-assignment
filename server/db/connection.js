import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  database: "school",
  user: "root",
  password: "Uzer@4785",
});
