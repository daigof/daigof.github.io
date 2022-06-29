import styled from "@emotion/styled";

export const NavBar = styled.nav`
  height: 100px;
  max-height: 100px;
  margin: 0 auto;
  overflow: hidden;

  ul {
    height: 100%;
    margin: 0 0 0 20px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;

    li {
      flex: 0 0 auto;
      padding: 3px 16px;
    }
  }
`;

export const MainWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
