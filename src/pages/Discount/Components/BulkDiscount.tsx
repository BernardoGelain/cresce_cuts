import { Form } from "react-bootstrap";
import { Container3Items } from "./styles";

type Props = {
  setPrice: (e: any) => void;
  setUnit: (e: any) => void;
  setPay: (e: any) => void;
};
export default function BulkDiscount({ setPrice, setPay, setUnit }: Props) {
  return (
    <Container3Items>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Preço</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={(e: any) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Leve</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={(e: any) => setUnit(e.target.value)}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.Control requiredInput1"
      >
        <Form.Label>Pague</Form.Label>
        <Form.Control
          required
          type="number"
          onChange={(e: any) => setPay(e.target.value)}
        />
      </Form.Group>
    </Container3Items>
  );
}
