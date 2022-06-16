import styled from "@emotion/styled";

export const MainContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: pink;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BoxContainer = styled.div`
  background-color: red;
  width: 200px;
  height: 150px;
  margin: 10px;

  &:hover {
    cursor:pointer;

    &:first-of-type{
      background: yellow;
    }
  }
`;
