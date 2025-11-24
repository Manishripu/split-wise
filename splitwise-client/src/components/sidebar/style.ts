import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
  width: 220px;
  height: 100vh;
  background: #ffffff;
  position: fixed;
  top: 64px;
  left: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.9rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  &.active {
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
    font-weight: 600;
  }
`;
