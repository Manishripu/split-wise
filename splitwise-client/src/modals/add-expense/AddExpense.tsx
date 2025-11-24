import { useState } from "react";
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
  groupId: string;
}

const AddExpenseModal = ({ isOpen, onClose, groupId }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [paidBy, setPaidBy] = useState("you");
  const [splitType, setSplitType] = useState("equal");

  if (!isOpen) return null;

  const handleSave = () => {
    const payload = {
      title,
      amount,
      paidBy,
      splitType,
    };

    console.log("New expense:", payload);
    alert("Expense saved!");
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>Add Expense</Title>

        <Field>
          <Label>Title</Label>
          <Input
            placeholder="Expense title (e.g. Dinner)"
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

        {/* Placeholder — actual split UI comes later */}
        <Field>
          {splitType === "equal" && <p>Split equally among all members.</p>}
          {splitType === "exact" && <p>Enter exact amount for each member.</p>}
          {splitType === "percent" && <p>Enter percentage for each member.</p>}
          {splitType === "shares" && <p>Enter shares count per member.</p>}
        </Field>

        <Footer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default AddExpenseModal;
