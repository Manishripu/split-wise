import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddExpenseModal from "../../modals/add-expense/AddExpense";
import DeleteExpenseModal from "../../modals/delete-expense/DeleteExpense";
import DeleteGroupModal from "../../modals/delete-group/DeleteGroup";
import EditExpenseModal from "../../modals/edit-expense/EditExpense";
import MembersModal from "../../modals/group-members/GroupMembers";
import SettleUpModal from "../../modals/settle-up/SettleUp";

import {
  GroupWrapper,
  HeaderRow,
  GroupTitle,
  ActionButtons,
  Button,
  MembersButton,
  ExpensesSection,
  SectionTitle,
  ExpenseCard,
  ExpenseTitle,
  ExpenseMeta,
  BalanceSection,
  BalanceRow,
  DeleteButton,
} from "./style";

const GroupDetail = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isMembersOpen, setMembersOpen] = useState(false);

  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<any>(null);

  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState<any>(null);

  const [isSettleOpen, setSettleOpen] = useState(false);
  const [settleUser, setSettleUser] = useState("");
  const [settleAmount, setSettleAmount] = useState(0);

  const [isDeleteGroupOpen, setDeleteGroupOpen] = useState(false);

  // Temporary data — will be replaced with API later
  const groupName = "Goa Trip";

  const expenses = [
    {
      id: 1,
      title: "Dinner",
      amount: 1200,
      paidBy: "John",
      date: "2 days ago",
    },
    { id: 2, title: "Snacks", amount: 300, paidBy: "You", date: "1 day ago" },
    { id: 3, title: "Drinks", amount: 500, paidBy: "Mia", date: "3 hours ago" },
  ];

  const balances = [
    { user: "You", amount: 200 },
    { user: "Mia", amount: -50 },
    { user: "John", amount: -150 },
  ];
  const members = [
    { name: "You", email: "you@example.com" },
    { name: "John", email: "john@gmail.com" },
    { name: "Mia", email: "mia@company.com" },
  ];

  return (
    <GroupWrapper>
      {/* Header */}
      <HeaderRow>
        <GroupTitle>{groupName}</GroupTitle>

        <ActionButtons>
          <MembersButton onClick={() => setMembersOpen(true)}>
            View Members
          </MembersButton>

          <Button onClick={() => setModalOpen(true)}>+ Add Expense</Button>

          <Button
            style={{ background: "#d32f2f" }}
            onClick={() => setDeleteGroupOpen(true)}
          >
            Delete Group
          </Button>
        </ActionButtons>
      </HeaderRow>

      {/* Expenses */}
      <ExpensesSection>
        <SectionTitle>Expenses</SectionTitle>

        {expenses.map((exp) => (
          <ExpenseCard key={exp.id}>
            <ExpenseTitle>{exp.title}</ExpenseTitle>
            <ExpenseMeta>
              ₹{exp.amount} — paid by {exp.paidBy}
            </ExpenseMeta>
            <ExpenseMeta>{exp.date}</ExpenseMeta>
            <Button
              style={{ marginTop: "10px" }}
              onClick={() => {
                setSelectedExpense(exp);
                setEditOpen(true);
              }}
            >
              Edit
            </Button>
            <DeleteButton
              onClick={() => {
                setExpenseToDelete(exp);
                setDeleteOpen(true);
              }}
            >
              Delete
            </DeleteButton>
          </ExpenseCard>
        ))}
      </ExpensesSection>

      {/* Balance Summary */}
      <BalanceSection>
        <SectionTitle>Balances</SectionTitle>

        {balances.map((b, idx) => (
          <BalanceRow
            key={idx}
            className={
              b.amount > 0 ? "positive" : b.amount < 0 ? "negative" : ""
            }
          >
            {b.amount > 0 && (
              <>
                {b.user} is owed ₹{b.amount}
              </>
            )}

            {b.amount < 0 && (
              <>
                {b.user} owes ₹{Math.abs(b.amount)}
                <Button
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    setSettleUser(b.user);
                    setSettleAmount(Math.abs(b.amount));
                    setSettleOpen(true);
                  }}
                >
                  Settle Up
                </Button>
              </>
            )}

            {b.amount === 0 && `${b.user} is settled up`}
          </BalanceRow>
        ))}
      </BalanceSection>
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        groupId={groupId!}
      />
      <MembersModal
        isOpen={isMembersOpen}
        onClose={() => setMembersOpen(false)}
        members={members}
      />
      <EditExpenseModal
        isOpen={isEditOpen}
        expense={selectedExpense}
        onClose={() => {
          setEditOpen(false);
          setSelectedExpense(null);
        }}
      />
      <DeleteExpenseModal
        isOpen={isDeleteOpen}
        expenseTitle={expenseToDelete?.title || ""}
        onClose={() => setDeleteOpen(false)}
        onDelete={() => {
          console.log("Deleting expense:", expenseToDelete);
          alert("Expense deleted!");
          setDeleteOpen(false);
          setExpenseToDelete(null);
        }}
      />
      <SettleUpModal
        isOpen={isSettleOpen}
        onClose={() => setSettleOpen(false)}
        user={settleUser}
        amount={settleAmount}
      />
      <DeleteGroupModal
        isOpen={isDeleteGroupOpen}
        groupName={groupName}
        onClose={() => setDeleteGroupOpen(false)}
        onDelete={() => {
          console.log("Deleting group:", groupName);
          alert("Group deleted!");
          setDeleteGroupOpen(false);
        }}
      />
    </GroupWrapper>
  );
};

export default GroupDetail;
