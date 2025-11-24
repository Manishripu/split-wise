import { useState } from "react";
import {
  Overlay,
  ModalContainer,
  Title,
  Field,
  Label,
  Input,
  MembersContainer,
  MemberChip,
  RemoveBtn,
  Footer,
  CancelButton,
  SaveButton,
} from "./style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateGroupModal = ({ isOpen, onClose }: Props) => {
  const [groupName, setGroupName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [members, setMembers] = useState<string[]>([]);

  if (!isOpen) return null;

  const addMember = () => {
    if (memberEmail.trim() === "") return;
    setMembers([...members, memberEmail.trim()]);
    setMemberEmail("");
  };

  const removeMember = (email: string) => {
    setMembers(members.filter((m) => m !== email));
  };

  const handleSave = () => {
    const payload = {
      groupName,
      members,
    };

    console.log("Creating Group:", payload);

    alert("Group Created!");
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>Create Group</Title>

        <Field>
          <Label>Group Name</Label>
          <Input
            placeholder="e.g. Goa Trip"
            value={groupName}
            onChange={(e: any) => setGroupName(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Add Members (Email)</Label>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Input
              placeholder="Enter email"
              value={memberEmail}
              onChange={(e: any) => setMemberEmail(e.target.value)}
            />
            <SaveButton style={{ padding: "10px 14px" }} onClick={addMember}>
              Add
            </SaveButton>
          </div>

          <MembersContainer>
            {members.map((email) => (
              <MemberChip key={email}>
                {email}
                <RemoveBtn onClick={() => removeMember(email)}>✕</RemoveBtn>
              </MemberChip>
            ))}
          </MembersContainer>
        </Field>

        <Footer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>Create</SaveButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default CreateGroupModal;
