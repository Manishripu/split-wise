import { useAuth } from "../../store/auth.store";
import { useNavigate } from "react-router-dom";

import {
  ProfileWrapper,
  ProfileCard,
  Avatar,
  Info,
  EditButton,
  LogoutButton,
  Button,
} from "./style";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <ProfileWrapper>
      <ProfileCard>
        <Avatar>{user?.name?.charAt(0).toUpperCase() || "?"}</Avatar>

        <Info>
          <p>
            <span>Name:</span> {user?.name}
          </p>
          <p>
            <span>Email:</span> {user?.email}
          </p>
        </Info>

        {/* Optional edit button */}
        <EditButton
          onClick={() => alert("Edit profile functionality coming soon!")}
        >
          Edit Profile
        </EditButton>

        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </ProfileCard>
    </ProfileWrapper>
  );
};

export default Profile;
