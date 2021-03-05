import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes.js";
import APPErros from "./errors/APPErrors.js";


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

app.use((err, response, ) => {
    if (err instanceof  APPErros) {
  
      return response.status(err.status).json({
        message: err.status
      });
    }
  });

app.listen(3333, () => {
  console.log("server started on port: 3333");
});