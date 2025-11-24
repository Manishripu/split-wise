import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import Expense from "../models/Expense";
import Group from "../models/Group";

export const addExpense = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId, description, amount, paidBy, splitType, splits } =
      req.body;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ msg: "Group not found" });

    const expense = await Expense.create({
      groupId,
      description,
      amount,
      paidBy,
      splitType,
      splits,
      createdBy: req.userId,
    });

    return res.json(expense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

export const updateExpense = async (req: AuthRequest, res: Response) => {
  try {
    const { expenseId } = req.params;
    const { description, amount, paidBy, splitType, splits } = req.body;

    const expense = await Expense.findByIdAndUpdate(
      expenseId,
      {
        description,
        amount,
        paidBy,
        splitType,
        splits,
      },
      { new: true }
    );

    if (!expense) return res.status(404).json({ msg: "Expense not found" });

    return res.json(expense);
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};
export const deleteExpense = async (req: AuthRequest, res: Response) => {
  try {
    const { expenseId } = req.params;

    const deleted = await Expense.findByIdAndDelete(expenseId);
    if (!deleted) return res.status(404).json({ msg: "Expense not found" });

    return res.json({ msg: "Expense deleted successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};
export const getGroupExpenses = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId } = req.params;

    const expenses = await Expense.find({ groupId }).sort({
      createdAt: -1,
    });

    return res.json(expenses);
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};
