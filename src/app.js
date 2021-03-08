import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes.js";
import APPErros from "./errors/APPErrors.js";

const app = express();

mongoose.connect(
  "mongodb+srv://admin:<password>@cluster0.jvjxd.mongodb.net/TesteSenai?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, request, response, _next) => {
  if (err instanceof APPErros) {
    return response.status(Number(err.statusCode)).json({
      message: err.message,
    });
  }
});

export default app;
