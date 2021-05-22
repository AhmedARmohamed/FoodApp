const mongoose = require("mongoose");
const menu = require("./routes/menus");
const order = require("./routes/orders");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/food", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.use(express.json());

app.use("/menu", menu);
app.use("/order", order);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Llstening on port ${port}...`));
