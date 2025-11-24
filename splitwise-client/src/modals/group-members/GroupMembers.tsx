import {
  Overlay,
  ModalContainer,
  Title,
  MembersList,
  MemberCard,
  Avatar,
  Info,
  CloseButton,
} from "./style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  members: { name: string; email: string }[];
}

const MembersModal = ({ isOpen, onClose, members }: Props) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>Group Members</Title>

        <MembersList>
          {members.map((m, idx) => (
            <MemberCard key={idx}>
              <Avatar>{m.name.charAt(0).toUpperCase()}</Avatar>

              <Info>
                <p>{m.name}</p>
                <p className="email">{m.email}</p>
              </Info>
            </MemberCard>
          ))}
        </MembersList>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default MembersModal;
