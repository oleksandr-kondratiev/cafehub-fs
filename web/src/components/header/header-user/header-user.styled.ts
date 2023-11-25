import styled from "styled-components";

export const HeaderUserBox = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const UserInfo = styled.div`
  margin-right: 15px;

  display: flex;
  flex-direction: column;

  & > p {
    align-self: flex-end;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;

  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: white;
`;
