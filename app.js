const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./database/config");
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.use("/auth", require("./router/authRouter"));
app.use("/admin", require("./router/adminRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});
