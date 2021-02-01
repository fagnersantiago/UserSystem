const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://admin:fagner060688@cluster0.jvjxd.mongodb.net/TesteSenai?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("server started on port: 3333");
});
