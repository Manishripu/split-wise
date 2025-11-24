import styled from "styled-components";

export const GroupWrapper = styled.div`
  padding: 1rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const GroupTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
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

export const MembersButton = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ExpensesSection = styled.div`
  margin-top: 2rem;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ExpenseCard = styled.div`
  background: #fff;
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ExpenseTitle = styled.h4`
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
`;

export const ExpenseMeta = styled.p`
  margin: 0.2rem 0;
  color: gray;
  font-size: 0.9rem;
`;

export const BalanceSection = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const BalanceRow = styled.p`
  font-size: 1rem;
  margin: 0.6rem 0;

  &.positive {
    color: #2e7d32;
  }

  &.negative {
    color: #d32f2f;
  }
`;
export const DeleteButton = styled(Button)`
  background: ${({ theme }) => theme.colors.error};

  &:hover {
    background: #b71c1c;
  }
`;
