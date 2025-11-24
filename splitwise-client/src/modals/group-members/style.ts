import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const ModalContainer = styled.div`
  width: 95%;
  max-width: 450px;
  background: white;
  border-radius: ${({ theme }) => theme.radius};
  padding: 2rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MemberCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
  background: #fafafa;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  flex: 1;

  p {
    margin: 0;
  }

  .email {
    color: gray;
    font-size: 0.85rem;
  }
`;

export const CloseButton = styled.button`
  margin-top: 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
