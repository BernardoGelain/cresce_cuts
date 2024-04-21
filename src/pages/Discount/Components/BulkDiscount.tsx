import { Form } from "react-bootstrap";
import { Container3Items } from "./styles";
import { Discount } from "@/models/Discount";

type Props = {
  setPrice: (e: any) => void;
  setUnit: (e: any) => void;
  setPay: (e: any) => void;
  discount: Discount;
};
export default function BulkDiscount({
  setPrice,
  setPay,
  setUnit,
  discount,
}: Props) {
  const handleBulkPriceChange = (e: any) => {
    const value = e.target.value;
    setPrice((prevState: Discount) => ({
      ...prevState,
      bulk: {
        ...prevState.bulk,
        price: value,
      },
    }));
  };

  const handleBulkUnitChange = (e: any) => {
    const value = e.target.value;
    setUnit((prevState: Discount) => ({
      ...prevState,
      bulk: {
        ...prevState.bulk,
        unit: value,
      },
    }));
  };

  const handleBulkPayChange = (e: any) => {
    const value = e.target.value;
    setPay((prevState: Discount) => ({
      ...prevState,
      bulk: {
        ...prevState.bulk,
        pay: value,
      },
    }));
  };
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
          onChange={handleBulkPriceChange}
          value={discount.bulk.price}
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
          onChange={handleBulkUnitChange}
          value={discount.bulk.unit}
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
          onChange={handleBulkPayChange}
          value={discount.bulk.pay}
        />
      </Form.Group>
    </Container3Items>
  );
}
