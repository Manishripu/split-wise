import styled from "styled-components";

export const GroupsWrapper = styled.div`
  padding: 1rem;
`;

export const PageTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CreateButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
`;

export const GroupCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const GroupName = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const GroupInfo = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const BalanceText = styled.p`
  margin: 0.5rem 0 0;
  font-weight: bold;

  &.positive {
    color: #2e7d32;
  }
  &.negative {
    color: #d32f2f;
  }
`;
