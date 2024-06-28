import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import path from "path";

config({
  path: path.resolve(__dirname, "../../.env")
});

const app = express();
const port = process.env.SERVER_PORT!;
if(!port) {
  throw new Error("Server port is not defined");
}

app.use(bodyParser.json());
app.use(authRoutes);
app.use(cookieParser());

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
