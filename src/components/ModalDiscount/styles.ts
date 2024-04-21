import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: center;
  font-weight: bold;
`;
export const Body = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.colors.stripe};
  border-radius: 5px;
  padding: 5px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  #edit {
    width: 200px;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  #edit:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
