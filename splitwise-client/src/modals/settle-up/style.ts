import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 250;
`;

export const ModalContainer = styled.div`
  width: 95%;
  max-width: 450px;
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
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Field = styled.div`
  margin-bottom: 1.2rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 80px;
  resize: none;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.2rem;
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  background: #bdbdbd;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;

  &:hover {
    background: #9e9e9e;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
