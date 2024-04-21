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
        {/* {discounts.map((discount: Discount) => {
          return (
            <tr>
              <td>{discount.name}</td>
              <td>{returnDiscountType(+discount.type)}</td>
              <td>{discount.start}</td>
              <td>{discount.end}</td>
              <td>{discount.active}</td>
            </tr>
          );
        })} */}
      </tbody>
    </Table>
  );
}
