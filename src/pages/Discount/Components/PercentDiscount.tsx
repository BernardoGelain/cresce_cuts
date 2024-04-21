import { Form } from "react-bootstrap";
import { ContainerItems } from "../styles";

type Props = {
  setPercentPrice: (e: any) => void;
  setPercent: (e: any) => void;
};
export default function PercentDiscount({
  setPercentPrice,
  setPercent,
}: Props) {
  return (
    <ContainerItems>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Preço</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={(e: any) => setPercentPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Percentual do desconto</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={(e: any) => setPercent(e.target.value)}
        />
      </Form.Group>
    </ContainerItems>
  );
}
