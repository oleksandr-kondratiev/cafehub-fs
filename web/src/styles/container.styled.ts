import styled from "styled-components";

interface IContainer {
  maxWidth?: string;
  minWidth?: string;
}

export const Container = styled.div<IContainer>`
  margin: 0 auto;

  max-width: ${(props) => props.maxWidth || "1000px"};
  min-width: ${(props) => props.minWidth || "375px"};
  padding: 0 20px;
`;
