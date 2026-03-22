import "dotenv/config";
import express from "express";
import cors from "cors";
import jobRoutes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(jobRoutes);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});