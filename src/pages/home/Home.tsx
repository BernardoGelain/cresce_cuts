import { Card } from "@/components/Card/Card";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import {
  Button,
  Layout,
  LayoutContainer,
  Text,
  Title,
  TitleCardContainer,
  TitleContainer,
} from "@/styles/layout";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <SidebarMenu />
        <LayoutContainer>
          <TitleContainer>
            <Title>Lista de Descontos</Title>
            <Text $fontSize="16px">Loja: Super João - Nova loja online</Text>
          </TitleContainer>
          <Card>
            <TitleCardContainer>
              <Text $fontSize="20px" $color="#4c4c4c">
                Desconto cadastrados
              </Text>
              <Button onClick={() => navigate("/discount")}>
                Novo Desconto
              </Button>
            </TitleCardContainer>
          </Card>
        </LayoutContainer>
      </Layout>
    </>
  );
}
