import styled from "styled-components";

export const MenuItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    width: 24px;
  }
`;
export const LogoText = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 36px;
  }
`;

export const TextMenu = styled.span`
  color: ${({ theme }) => theme.colors.text_menu};
  font-size: 16px;
  margin-left: 5px;
`;
