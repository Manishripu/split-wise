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
  max-width: 500px;
  background: white;
  border-radius: ${({ theme }) => theme.radius};
  padding: 2rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
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
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
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
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SplitSelector = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 1rem;
`;

export const SplitButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 10px;
  font-size: 0.9rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.secondary : "#f0f0f0"};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  background: #bdbdbd;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;

  &:hover {
    background: #9e9e9e;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
