import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
