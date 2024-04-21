import { Form } from "react-bootstrap";
import { ContainerItems } from "../styles";

type Props = {
  setFixedPrice: (e: any) => void;
  setFixedPay: (e: any) => void;
};
export default function FixedDiscount({ setFixedPrice, setFixedPay }: Props) {
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
          onChange={(e: any) => setFixedPrice(e.target.value)}
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
          onChange={(e: any) => setFixedPay(e.target.value)}
        />
      </Form.Group>
    </ContainerItems>
  );
}
