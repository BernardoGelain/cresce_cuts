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
      <Item text="Leve + Pague -" linkTo={"/bulk"} />
      <Item text="De: - Por:" linkTo={"/fixed"} />
      <Item text="Percentual" linkTo={"/percent"} />
    </ContainerSidebar>
  );
}
