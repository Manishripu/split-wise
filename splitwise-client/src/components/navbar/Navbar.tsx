import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../store/auth.store";

import { NavbarWrapper, NavTitle, NavRight, NavLinkButton } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = useAuth((state: any) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <NavbarWrapper>
      <NavTitle>Splitwise Clone</NavTitle>

      <NavRight>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </Link>

        <NavLinkButton onClick={handleLogout}>Logout</NavLinkButton>
      </NavRight>
    </NavbarWrapper>
  );
};

export default Navbar;
