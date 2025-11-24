import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  font-size: 1rem;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 1rem;
  text-align: center;
`;

export const LinkText = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;
