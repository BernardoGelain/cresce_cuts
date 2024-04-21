import { Discount } from "@/models/Discount";
import { CardContainer, EyeIcon, IconName, Image, NameDiv, Td } from "./styles";
import Icon from "../../assets/card.svg";
import Eye from "../../assets/eye.svg";
import { Text } from "@/styles/layout";
import returnDiscountType from "@/utils/returnDiscountType";
import { Form } from "react-bootstrap";
import formatDate from "@/utils/formatDate";
import { useFetchProduct } from "@/hooks/useFetchProduct";

type Props = {
  discount: Discount;
};
export default function DiscountCard({ discount }: Props) {
  const { product } = useFetchProduct({ id: discount.id });

  return (
    <CardContainer>
      <NameDiv>
        <IconName src={Icon} />
        <Image src={product?.image} />
        <Text $fontSize="18px" $color="#6F767E">
          {discount.name}
        </Text>
      </NameDiv>
      <Td>
        <div>
          <Text $fontSize="18px" $color="#6F767E">
            {returnDiscountType(+discount.type)}
          </Text>
        </div>
      </Td>
      <Td>
        <div>
          <Text $fontSize="18px" $color="#565656">
            {formatDate(discount.start)}
          </Text>
        </div>
      </Td>
      <Td>
        <div>
          <Text $fontSize="18px" $color="#565656">
            {formatDate(discount.end)}
          </Text>
        </div>
      </Td>
      <Td>
        <div>
          <Form.Check type="switch" readOnly checked={discount.active} />
          <EyeIcon src={Eye} />
        </div>
      </Td>
    </CardContainer>
  );
}
