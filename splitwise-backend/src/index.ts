import express, { Request, Response } from "express";
import cors from "cors";
import router from "./routes/auth.routes";
import expenseRouter from "./routes/expense.routes";
import groupRouter from "./routes/group.routes";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
const username = encodeURIComponent("<username>");
const password = encodeURIComponent("Ripu@12345");
const dbUrl = `mongodb+srv://Ripu:${password}@cluster0.hirzlqz.mongodb.net/splitwise?appName=Cluster0`;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("MongoDB connected");
    app.use("/api/auth", router);
    app.use("/api/group", groupRouter);
    app.use("/api/expense", expenseRouter);

    //for ping
    app.get("/", (req: Request, res: Response) => {
      res.send("Hello from Express + TypeScript!");
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
