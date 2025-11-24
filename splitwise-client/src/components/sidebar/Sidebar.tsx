import { SidebarWrapper, StyledNavLink } from "./style";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <StyledNavLink to="/" end>
        Dashboard
      </StyledNavLink>

      <StyledNavLink to="/groups">Groups</StyledNavLink>

      <StyledNavLink to="/activity">Activity</StyledNavLink>

      <StyledNavLink to="/profile">Profile</StyledNavLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
