import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateGroupModal from "../../modals/create-group/CreateGroup";

import {
  GroupsWrapper,
  PageTitle,
  HeaderRow,
  CreateButton,
  GroupsGrid,
  GroupCard,
  GroupName,
  GroupInfo,
  BalanceText,
} from "./style";

const Groups = () => {
  const navigate = useNavigate();

  const [isCreateOpen, setCreateOpen] = useState(false);

  // Temporary placeholder groups (will come from backend later)
  const groups = [
    {
      id: "1",
      name: "Goa Trip",
      members: 5,
      balance: 300,
    },
    {
      id: "2",
      name: "Friends Group",
      members: 3,
      balance: -150,
    },
    {
      id: "3",
      name: "Office Team",
      members: 6,
      balance: 0,
    },
  ];

  const handleCreateGroup = () => {
    alert("Create Group Modal Coming Soon!");
  };

  return (
    <GroupsWrapper>
      <HeaderRow>
        <PageTitle>Your Groups</PageTitle>
        <CreateButton onClick={() => setCreateOpen(true)}>
          + Create Group
        </CreateButton>
      </HeaderRow>

      <GroupsGrid>
        {groups.map((g) => (
          <GroupCard key={g.id} onClick={() => navigate(`/group/${g.id}`)}>
            <GroupName>{g.name}</GroupName>

            <GroupInfo>Members: {g.members}</GroupInfo>

            <BalanceText
              className={
                g.balance > 0 ? "positive" : g.balance < 0 ? "negative" : ""
              }
            >
              {g.balance > 0 && `You are owed ₹${g.balance}`}
              {g.balance < 0 && `You owe ₹${Math.abs(g.balance)}`}
              {g.balance === 0 && "Settled Up"}
            </BalanceText>
          </GroupCard>
        ))}
      </GroupsGrid>
      <CreateGroupModal
        isOpen={isCreateOpen}
        onClose={() => setCreateOpen(false)}
      />
    </GroupsWrapper>
  );
};

export default Groups;
