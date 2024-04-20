import { ContainerSidebar, LogoContainer } from "./styles";

import Logo from "../../assets/logo.svg";
import Item from "./components/Item/Item";

export default function SidebarMenu() {
  return (
    <ContainerSidebar>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      <Item text="Lista de Descontos" linkTo={"/"} />
      <Item text="Novo Desconto" linkTo={"/discount"} />
    </ContainerSidebar>
  );
}
