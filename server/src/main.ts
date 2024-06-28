import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes";

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
