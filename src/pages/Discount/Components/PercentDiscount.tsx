import { Form } from "react-bootstrap";
import { ContainerItems } from "../styles";
import { Discount } from "@/models/Discount";

type Props = {
  setPercentPrice: (e: any) => void;
  setPercent: (e: any) => void;
};
export default function PercentDiscount({
  setPercentPrice,
  setPercent,
}: Props) {
  const handlePercentChange = (e: any) => {
    const value = e.target.value;
    setPercent((prevState: Discount) => ({
      ...prevState,
      percent: {
        ...prevState.percent,
        percent: value,
      },
    }));
  };

  const handlePercentPriceChange = (e: any) => {
    const value = e.target.value;
    setPercentPrice((prevState: Discount) => ({
      ...prevState,
      percent: {
        ...prevState.percent,
        percentPrice: value,
      },
    }));
  };
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
          onChange={handlePercentPriceChange}
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
          max={100}
          onChange={handlePercentChange}
        />
      </Form.Group>
    </ContainerItems>
  );
}
