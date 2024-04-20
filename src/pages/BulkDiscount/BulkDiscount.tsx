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
import { Form } from "react-bootstrap";
import { ContainerForm, ContainerItems } from "./styles";
import { useState } from "react";

export default function BulkDiscount() {
  const [validated, setValidated] = useState(false);

  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("1");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Layout>
      <SidebarMenu />
      <LayoutContainer>
        <TitleContainer>
          <Title>Cadastrar Desconto </Title>
          <Text $fontSize="16px">Loja: Super João - Nova loja online</Text>
        </TitleContainer>
        <Card>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <TitleCardContainer>
              <Text $fontSize="20px" $color="#4c4c4c">
                Formulário de cadastro de desconto
              </Text>
              <Form.Check
                type="switch"
                label="Ativo"
                onChange={() => setActive(!active)}
              />
            </TitleCardContainer>
            <ContainerForm>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control requiredInput1"
              >
                <Form.Label>Nome do desconto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e: any) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control requiredInput1"
              >
                <Form.Label>Descrição do desconto</Form.Label>

                <Form.Control
                  required
                  type="text"
                  onChange={(e: any) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control requiredInput1"
              >
                <Form.Label>Tipo do desconto</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e: any) => setType(e.target.value)}
                  defaultValue={type}
                >
                  <option value="1">De: - Por:</option>
                  <option value="2">Porcentagem</option>
                  <option value="3">Leve + Pague -</option>
                </Form.Select>
              </Form.Group>
              <ContainerItems>
                <Form.Group controlId="exampleForm.Control requiredInput1">
                  <Form.Label>Data de Ativacão</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e: any) => setStart(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.Control requiredInput1">
                  <Form.Label>Data de Inativacão</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e: any) => setEnd(e.target.value)}
                  />
                </Form.Group>
              </ContainerItems>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div className="buttonContainer">
                <Button type="submit">Submit form</Button>
              </div>
            </ContainerForm>
          </Form>
        </Card>
      </LayoutContainer>
    </Layout>
  );
}
