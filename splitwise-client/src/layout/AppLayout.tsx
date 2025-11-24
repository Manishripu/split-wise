import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";

const ContentWrapper = styled.div`
  margin-left: 220px;
  margin-top: 64px;
  padding: 2rem;
`;

const Container = styled.div`
  overflow: auto;
  max-height: 100vh;
`;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    </>
  );
};

export default AppLayout;
