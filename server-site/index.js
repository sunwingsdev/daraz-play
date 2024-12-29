const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const corsConfig = {
  origin: "http://localhost:5173",
  credential: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

//middlewares
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// initial server setup
app.get("/", (req, res) => {
  res.send("Daraz-Play server is running");
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
