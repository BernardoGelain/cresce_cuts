import { Discount } from "@/models/Discount";
import { Product } from "@/models/Product";
import { Button as PrimaryButton, Text } from "@/styles/layout";
import { Button, Modal } from "react-bootstrap";
import { Body, Footer, Image, TextContainer, Title } from "./styles";
import { formatCurrency } from "@/utils/formatCurrency";

type Props = {
  discount: Discount;
  product?: Product;
  show: boolean;
  handleClose: () => void;
};

export default function ModalDiscount({
  discount,
  product,
  show,
  handleClose,
}: Props) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ borderBottom: "2px solid #007FBA" }}>
        <Title>Detalhes do desconto</Title>
      </Modal.Header>
      <Modal.Body>
        <Body>
          <Image src={product?.image} />
          <TextContainer>
            <Text $color="#007FBA" $fontSize="22px" $fontWeight="bold">
              {discount.type === "3" && (
                <>
                  Leve {discount.bulk.unit} Pague {discount.bulk.pay}
                </>
              )}
              {discount.type === "2" && <>{discount.percent.percent}% OFF</>}
            </Text>
            <Text $fontSize="18px">{discount.name}</Text>
            <Text $fontSize="14px">{discount.description}</Text>
            {discount.type === "1" && (
              <div>
                <Text
                  $color="#007FBA"
                  $fontSize="18px"
                  $decoration="line-through"
                >
                  {formatCurrency(+discount.fixed.fixedPrice)}
                </Text>
                <Text $color="#007FBA" $fontSize="22px" $fontWeight="bold">
                  {formatCurrency(+discount.fixed.fixedPay)}
                </Text>
              </div>
            )}
            {discount.type === "2" && (
              <div>
                <Text
                  $color="#007FBA"
                  $fontSize="18px"
                  $decoration="line-through"
                >
                  {formatCurrency(+discount.percent.percentPrice)}
                </Text>
                <Text $color="#007FBA" $fontSize="22px" $fontWeight="bold">
                  {formatCurrency(
                    +discount.percent.percentPrice -
                      +discount.percent.percentPrice *
                        (+discount.percent.percent / 100)
                  )}
                </Text>
              </div>
            )}
            {discount.type === "3" && (
              <Text $color="#007FBA" $fontSize="22px" $fontWeight="bold">
                {formatCurrency(+discount.bulk.price)}
              </Text>
            )}
          </TextContainer>
        </Body>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "0px transparent" }}>
        <Footer>
          <Button id={"edit"} variant="outline-primary">
            Editar
          </Button>
          <PrimaryButton onClick={handleClose}>Fechar</PrimaryButton>
        </Footer>
      </Modal.Footer>
    </Modal>
  );
}
