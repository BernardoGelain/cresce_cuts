import { Discount } from "@/models/Discount";

import { Table } from "react-bootstrap";
import { THead } from "./styles";
import DiscountCard from "../DiscountCard/DiscountCard";

type Props = {
  discounts: Discount[];
};
export default function DiscountsTable({ discounts }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <THead>Desconto</THead>
          <THead>Tipo</THead>
          <THead>Data Ativação</THead>
          <THead>Data Inativação</THead>
          <THead>Status</THead>
        </tr>
      </thead>
      <tbody>
        {discounts.map((discount: Discount) => {
          return <DiscountCard discount={discount} />;
        })}
      </tbody>
    </Table>
  );
}
