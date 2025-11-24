import {
  Overlay,
  ModalContainer,
  Title,
  Message,
  Footer,
  CancelButton,
  DeleteButton,
} from "./style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  expenseTitle: string;
}

const DeleteExpenseModal = ({
  isOpen,
  onClose,
  onDelete,
  expenseTitle,
}: Props) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>Delete Expense?</Title>

        <Message>
          Are you sure you want to delete <strong>"{expenseTitle}"</strong>?
          This action cannot be undone.
        </Message>

        <Footer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default DeleteExpenseModal;
