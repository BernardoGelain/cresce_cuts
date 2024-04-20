import styled from "styled-components";

export const ContainerSidebar = styled.div`
  width: 12%;
  min-width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 10px;
`;
export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 34px;
  img {
    width: 200px;
  }
`;
