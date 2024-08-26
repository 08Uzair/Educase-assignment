import express from "express";
import { userRouter } from "./routes/users.js";
import { schoolRouter } from "./routes/school.js";
import { connection } from "./db/connection.js";
const app = express();
const port = 8800;

connection;
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/schools", schoolRouter);

app.listen(port, () => {
  console.log(`App Listening on PORT ${port}`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database is Connected");
  });
});
