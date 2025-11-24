import { useState, useEffect } from "react";
import {
  Overlay,
  ModalContainer,
  Title,
  Field,
  Label,
  Input,
  Select,
  SplitSelector,
  SplitButton,
  Footer,
  CancelButton,
  SaveButton,
} from "./style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  expense: {
    id: string;
    title: string;
    amount: number;
    paidBy: string;
    splitType: string;
  } | null;
}

const EditExpenseModal = ({ isOpen, onClose, expense }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [paidBy, setPaidBy] = useState("");
  const [splitType, setSplitType] = useState("equal");

  useEffect(() => {
    if (expense) {
      setTitle(expense.title);
      setAmount(expense.amount);
      setPaidBy(expense.paidBy);
      setSplitType(expense.splitType);
    }
  }, [expense]);

  if (!isOpen || !expense) return null;

  const handleSave = () => {
    const payload = {
      ...expense,
      title,
      amount,
      paidBy,
      splitType,
    };

    console.log("Updated Expense:", payload);
    alert("Expense updated!");
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>Edit Expense</Title>

        <Field>
          <Label>Title</Label>
          <Input
            placeholder="Expense title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Amount</Label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e: any) => setAmount(parseFloat(e.target.value))}
          />
        </Field>

        <Field>
          <Label>Paid By</Label>
          <Select
            value={paidBy}
            onChange={(e: any) => setPaidBy(e.target.value)}
          >
            <option value="you">You</option>
            <option value="john">John</option>
            <option value="mia">Mia</option>
          </Select>
        </Field>

        <Field>
          <Label>Split Between</Label>

          <SplitSelector>
            <SplitButton
              active={splitType === "equal"}
              onClick={() => setSplitType("equal")}
            >
              Equal
            </SplitButton>

            <SplitButton
              active={splitType === "exact"}
              onClick={() => setSplitType("exact")}
            >
              Exact
            </SplitButton>

            <SplitButton
              active={splitType === "percent"}
              onClick={() => setSplitType("percent")}
            >
              Percent
            </SplitButton>

            <SplitButton
              active={splitType === "shares"}
              onClick={() => setSplitType("shares")}
            >
              Shares
            </SplitButton>
          </SplitSelector>
        </Field>

        {/* Placeholder for advanced split UI */}
        <Field>
          {splitType === "equal" && <p>Split equally among all members.</p>}
          {splitType === "exact" && <p>Edit exact amounts per member.</p>}
          {splitType === "percent" && <p>Edit percent values per member.</p>}
          {splitType === "shares" && <p>Edit share counts per member.</p>}
        </Field>

        <Footer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>Update</SaveButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default EditExpenseModal;
