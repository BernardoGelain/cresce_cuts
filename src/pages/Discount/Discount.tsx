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
import { Alert, Form } from "react-bootstrap";
import { ContainerForm, ContainerItems } from "./styles";
import { useEffect, useState } from "react";
import BulkDiscount from "./Components/BulkDiscount";
import FixedDiscount from "./Components/FixedDiscount";
import PercentDiscount from "./Components/PercentDiscount";
import { useDispatch, useSelector } from "react-redux";
import { addNewDiscount } from "@/lib/redux/reducers/cartReducer";
import { useParams } from "react-router-dom";

import { RootState } from "@/models/RootState";
import { Discount as DiscountType } from "@/models/Discount";

export default function Discount() {
  const dispatch: any = useDispatch();
  const [validated, setValidated] = useState(false);
  const { id } = useParams();
  const discounts = useSelector((state: RootState) => state.cart.discounts);

  useEffect(() => {
    if (id) {
      const discountToEdit = discounts.find(
        (item: DiscountType) => item.id === +id
      );
      if (discountToEdit) {
        setFormData(discountToEdit);
      }
    }
  }, [id, discounts]);

  const [formData, setFormData] = useState({
    id: null,
    active: true,
    name: "",
    description: "",
    type: "1",
    start: "",
    end: "",
    bulk: {
      price: "",
      unit: "",
      pay: "",
    },
    fixed: {
      fixedPay: "",
      fixedPrice: "",
    },
    percent: {
      percent: "",
      percentPrice: "",
    },
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      return;
    }
    const discount = formData;
    dispatch(addNewDiscount({ discount }));
    setFormData({
      id: null,
      active: true,
      name: "",
      description: "",
      type: "1",
      start: "",
      end: "",
      bulk: {
        price: "",
        unit: "",
        pay: "",
      },
      fixed: {
        fixedPay: "",
        fixedPrice: "",
      },
      percent: {
        percent: "",
        percentPrice: "",
      },
    });

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
                onChange={() =>
                  setFormData({ ...formData, active: !formData.active })
                }
                checked={formData.active}
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.description}
                  name="description"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control requiredInput1"
              >
                <Form.Label>Tipo do desconto</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={formData.type}
                  name="type"
                  onChange={handleInputChange}
                  defaultValue={formData.type}
                >
                  <option value="1">De: - Por:</option>
                  <option value="2">Porcentagem</option>
                  <option value="3">Leve + Pague -</option>
                </Form.Select>
              </Form.Group>
              {formData.type == "1" && (
                <FixedDiscount
                  setFixedPay={setFormData}
                  setFixedPrice={setFormData}
                  discount={formData}
                />
              )}
              {formData.type == "2" && (
                <PercentDiscount
                  setPercent={setFormData}
                  setPercentPrice={setFormData}
                  discount={formData}
                />
              )}
              {formData.type == "3" && (
                <BulkDiscount
                  setPay={setFormData}
                  setPrice={setFormData}
                  setUnit={setFormData}
                  discount={formData}
                />
              )}
              <ContainerItems>
                <Form.Group controlId="exampleForm.Control requiredInput1">
                  <Form.Label>Data de Ativacão</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    value={formData.start}
                    name="start"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.Control requiredInput1">
                  <Form.Label>Data de Inativacão</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="end"
                    value={formData.end}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </ContainerItems>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div className="buttonContainer">
                <Button type="submit">Salvar</Button>
              </div>
              {validated && (
                <Alert variant={"success"}>Novo desconto criado!</Alert>
              )}
            </ContainerForm>
          </Form>
        </Card>
      </LayoutContainer>
    </Layout>
  );
}
