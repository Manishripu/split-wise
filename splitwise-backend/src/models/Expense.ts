import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },

    description: { type: String, required: true },
    amount: { type: Number, required: true },

    paidBy: {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: String,
    },

    splitType: {
      type: String,
      enum: ["equal", "exact", "percent", "shares"],
      default: "equal",
    },

    // Example:
    // splits: [{ userId, name, share: 250 }]
    splits: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
        amount: Number,
        percent: Number,
        shares: Number,
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
