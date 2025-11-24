import styled from "styled-components";
export const LayoutWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  height: calc(100vh - 64px); /* subtract navbar height */
  display: flex;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto; /* Only scroll here */
  overflow-x: hidden;
  padding: 2rem;
`;
