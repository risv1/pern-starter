import express from "express";
import { Hello } from "../controllers/hello";

const router = express.Router()

router.get("/", Hello)

export default router;