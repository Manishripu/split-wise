import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 250;
`;

export const ModalContainer = styled.div`
  width: 95%;
  max-width: 420px;
  background: white;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.6rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  padding: 10px 18px;
  background: #bdbdbd;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;

  &:hover {
    background: #9e9e9e;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 18px;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;

  &:hover {
    background: #b71c1c;
  }
`;
