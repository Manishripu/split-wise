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
  groupName: string;
}

const DeleteGroupModal = ({ isOpen, onClose, onDelete, groupName }: Props) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>Delete Group?</Title>

        <Message>
          Are you sure you want to delete the group
          <strong> "{groupName}"</strong>?
          <br />
          <br />
          This action cannot be undone and all expenses will be permanently
          removed.
        </Message>

        <Footer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={onDelete}>Delete Group</DeleteButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default DeleteGroupModal;
