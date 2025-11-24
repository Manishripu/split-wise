import styled from "styled-components";

export const ProfileWrapper = styled.div`
  padding: 1rem;
  max-width: 600px;
  margin: 2rem auto;
`;

export const ProfileCard = styled.div`
  background: #fff;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
`;

export const Info = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    margin: 0.3rem 0;
  }

  span {
    font-weight: bold;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const EditButton = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoutButton = styled(Button)`
  background: ${({ theme }) => theme.colors.error};

  &:hover {
    background: #b71c1c;
  }
`;
