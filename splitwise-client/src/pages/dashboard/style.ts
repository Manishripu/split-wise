import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 600;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const SummaryCard = styled.div<{ bg: string }>`
  padding: 1.5rem;
  background: ${({ bg }) => bg};
  color: white;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const CardLabel = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
`;

export const CardValue = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActivityItem = styled.div`
  background: #fff;
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  }
`;

export const IconWrapper = styled.div`
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  border-radius: 50%;
`;

export const ActivityText = styled.div`
  flex: 1;

  p {
    margin: 0;
  }

  .date {
    font-size: 0.8rem;
    color: gray;
  }
`;
