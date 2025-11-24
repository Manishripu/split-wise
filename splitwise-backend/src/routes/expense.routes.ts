import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import {
  addExpense,
  updateExpense,
  deleteExpense,
  getGroupExpenses,
} from "../controllers/expense.controller";

const expenseRouter = Router();

expenseRouter.post("/", authMiddleware, addExpense);
expenseRouter.put("/:expenseId", authMiddleware, updateExpense);
expenseRouter.delete("/:expenseId", authMiddleware, deleteExpense);
expenseRouter.get("/group/:groupId", authMiddleware, getGroupExpenses);

export default expenseRouter;
