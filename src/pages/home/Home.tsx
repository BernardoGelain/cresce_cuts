import { Card } from "@/components/Card/Card";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { Discount } from "@/models/Discount";
import { RootState } from "@/models/RootState";
import {
  Button,
  Layout,
  LayoutContainer,
  Text,
  Title,
  TitleCardContainer,
  TitleContainer,
} from "@/styles/layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import { useState } from "react";
import { Filters } from "./styles";
import { useFilteredData } from "@/hooks/useFilteredData";

export default function Home() {
  const navigate = useNavigate();
  const discounts = useSelector((state: RootState) => state.cart.discounts);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = useFilteredData({ discounts, filters });

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
            <Filters>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control requiredInput1"
              >
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={filters.status}
                  name="status"
                  onChange={handleInputChange}
                  defaultValue={filters.status}
                >
                  <option value=""></option>
                  <option value="1">Ativado</option>
                  <option value="0">Desativado</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control requiredInput1"
              >
                <Form.Label>Tipo do desconto</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={filters.type}
                  name="type"
                  onChange={handleInputChange}
                  defaultValue={filters.type}
                >
                  <option value=""></option>
                  <option value="1">De: - Por:</option>
                  <option value="2">Porcentagem</option>
                  <option value="3">Leve + Pague -</option>
                </Form.Select>
              </Form.Group>
            </Filters>
            {filteredData.map((discount: Discount) => {
              return <span>{discount.name}</span>;
            })}
          </Card>
        </LayoutContainer>
      </Layout>
    </>
  );
}
