import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
`;
export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 50px;
`;
export const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
`;
export const Text = styled.span<{
  $fontSize?: string;
  $fontWeight?: string;
  $color?: string;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "12px")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "")};
  color: ${(props) => (props.$color ? props.$color : "black")};
`;

export const TitleContainer = styled.div<{ $fontSize?: string }>`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
`;

export const Button = styled.button<{
  $width?: string;
  $height?: string;
}>`
  display: flex;
  width: ${(props) => (props.$width ? props.$width : "200px")};
  height: ${(props) => (props.$height ? props.$height : "40px")};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffff;
  align-items: center;
  border: transparent;
  border-radius: 5px;
  justify-content: center;
  font-weight: bold;
`;
