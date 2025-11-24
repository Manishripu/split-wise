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
  z-index: 300;
`;

export const ModalContainer = styled.div`
  width: 95%;
  max-width: 400px;
  background: white;
  border-radius: ${({ theme }) => theme.radius};
  padding: 2rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 0.8rem;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
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
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;

  &:hover {
    background: #9e9e9e;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 18px;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;

  &:hover {
    background: #b71c1c;
  }
`;
