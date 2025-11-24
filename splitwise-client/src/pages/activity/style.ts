import styled from "styled-components";

export const ActivityWrapper = styled.div`
  padding: 1rem;
`;

export const PageTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  button {
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
    padding: 8px 14px;
    border-radius: ${({ theme }) => theme.radius};
    border: none;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActivityCard = styled.div`
  background: #fff;
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ActivityText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActivityDate = styled.small`
  color: gray;
  font-size: 0.8rem;
`;
