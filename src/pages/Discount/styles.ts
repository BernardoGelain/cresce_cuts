import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;

  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;

  div {
    width: 50%;
  }
`;
