import { Form } from "react-bootstrap";
import { ContainerItems } from "../styles";
import { Discount } from "@/models/Discount";

type Props = {
  setFixedPrice: (e: any) => void;
  setFixedPay: (e: any) => void;
  discount: Discount;
};
export default function FixedDiscount({
  setFixedPrice,
  setFixedPay,
  discount,
}: Props) {
  const handleFixedPayChange = (e: any) => {
    const value = e.target.value;
    setFixedPrice((prevState: Discount) => ({
      ...prevState,
      fixed: {
        ...prevState.fixed,
        fixedPay: value,
      },
    }));
  };
  const handleFixedPriceChange = (e: any) => {
    const value = e.target.value;
    setFixedPay((prevState: Discount) => ({
      ...prevState,
      fixed: {
        ...prevState.fixed,
        fixedPrice: value,
      },
    }));
  };
  return (
    <ContainerItems>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Preço "DE"</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={handleFixedPriceChange}
          value={discount.fixed.fixedPrice}
          name={"fixed_price"}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Preço "POR"</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={handleFixedPayChange}
          value={discount.fixed.fixedPay}
          name={"fixed_pay"}
        />
      </Form.Group>
    </ContainerItems>
  );
}
