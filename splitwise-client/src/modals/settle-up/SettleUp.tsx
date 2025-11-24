import { useState, useEffect } from "react";
import {
  Overlay,
  ModalContainer,
  Title,
  Field,
  Label,
  Input,
  Select,
  TextArea,
  Footer,
  CancelButton,
  SaveButton,
} from "./style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: string; // The person you're settling up with
  amount: number; // Suggested amount to settle (from balances)
}

const SettleUpModal = ({ isOpen, onClose, user, amount }: Props) => {
  const [settleAmount, setSettleAmount] = useState(amount || 0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setSettleAmount(amount);
  }, [amount]);

  if (!isOpen) return null;

  const handleSettle = () => {
    const payload = {
      with: user,
      amount: settleAmount,
      paymentMethod,
      notes,
    };

    console.log("Settling up:", payload);
    alert("Settlement completed!");

    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>Settle Up with {user}</Title>

        <Field>
          <Label>Amount</Label>
          <Input
            type="number"
            value={settleAmount}
            onChange={(e: any) => setSettleAmount(parseFloat(e.target.value))}
          />
        </Field>

        <Field>
          <Label>Payment Method</Label>
          <Select
            value={paymentMethod}
            onChange={(e: any) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="bank">Bank Transfer</option>
            <option value="other">Other</option>
          </Select>
        </Field>

        <Field>
          <Label>Notes (optional)</Label>
          <TextArea
            placeholder="Add notes like UPI ID or transaction ID"
            value={notes}
            onChange={(e: any) => setNotes(e.target.value)}
          />
        </Field>

        <Footer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSettle}>Settle</SaveButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default SettleUpModal;
