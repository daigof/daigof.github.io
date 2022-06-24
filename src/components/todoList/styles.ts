import styled from "@emotion/styled";

export const UnorderedList = styled.ul<{ hasLineThrough?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 8px 0 0 0;

  text-decoration: ${({ hasLineThrough = false }) =>
    hasLineThrough ? "line-through" : "none"};
`;
