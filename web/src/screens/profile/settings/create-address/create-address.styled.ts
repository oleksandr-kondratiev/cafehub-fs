import styled from "styled-components";

export const AddressesWrapper = styled.div`
  overflow: auto;

  margin: 25px 0 50px;
  padding-right: 5px;
  max-height: 306px;

  display: flex;
  flex-direction: column;

  box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.05);

  ::-webkit-scrollbar {
    width: 6px;
    height: 2px;
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 2px;
    border-radius: 10px;
    background-color: #dadada;
  }
`;
