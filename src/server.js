const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://admin:@cluster0.jvjxd.mongodb.net/TesteSenai?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("server started on port: 3333");
});
