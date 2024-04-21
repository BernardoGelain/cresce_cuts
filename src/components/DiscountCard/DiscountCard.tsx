import { Discount } from "@/models/Discount";
import { CardContainer, EyeIcon, IconName, Image, NameDiv, Td } from "./styles";
import Icon from "../../assets/card.svg";
import Eye from "../../assets/eye.svg";
import { Text } from "@/styles/layout";
import returnDiscountType from "@/utils/returnDiscountType";
import { Form } from "react-bootstrap";
import formatDate from "@/utils/formatDate";

type Props = {
  discount: Discount;
};
export default function DiscountCard({ discount }: Props) {
  return (
    <CardContainer>
      <NameDiv>
        <IconName src={Icon} />
        <Image src="https://img.freepik.com/fotos-gratis/exibicao-de-fones-de-ouvido-de-musica-levitando_23-2149817607.jpg?w=740&t=st=1713725808~exp=1713726408~hmac=04b1ff776908acd7e567202bc12a7797fa23b631882185c221ebae13d1208dc5" />
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
