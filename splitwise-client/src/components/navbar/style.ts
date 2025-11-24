import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavTitle = styled.h3`
  color: white;
  font-weight: 600;
`;

export const NavRight = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NavLinkButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
