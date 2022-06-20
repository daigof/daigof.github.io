import styled from "@emotion/styled";

export const FlexContainer = styled.div`
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
    cursor: pointer;

    &:first-of-type {
      background: yellow;
    }
  }
`;
