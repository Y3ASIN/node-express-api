import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("Testing server");

  res.send("Hello from the home page!");
});

app.listen(PORT, () => console.log(`Running the server on port: ${PORT}`));
