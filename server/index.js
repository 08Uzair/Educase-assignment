import express from "express";
import { schoolRouter } from "./routes/school.js";
import { connection } from "./db/connection.js";
const app = express();
const port = 8800;

connection;
app.use(express.json());

app.use("/api/v1/schools", schoolRouter);
app.get("/", (req, res) => {
  res.send("Hello My Self Uzer Qureshi");
});
app.listen(port, () => {
  console.log(`App Listening on PORT ${port}`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database is Connected");
  });
});
