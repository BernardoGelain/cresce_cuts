import styled from "styled-components";

export const CardContainer = styled.tr`
  height: 80px;
  padding: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.stripe};
`;

export const NameDiv = styled.td`
  display: flex;
  align-items: center;
  border-bottom: transparent;
  gap: 16px;
`;
export const IconName = styled.img`
  width: 12px;
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.stripe};
`;
export const Td = styled.td`
  div {
    display: flex;
    height: 80px;
    align-items: center;
  }
  color: ${({ theme }) => theme.colors.primaryTextTable};
`;
export const EyeIcon = styled.img`
  width: 28px;
  cursor: pointer;
`;
