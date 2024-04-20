import { LogoText, MenuItem, TextMenu } from "./styles";
import Cash from "../../../../assets/cash.svg";
import Arrow from "../../../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  linkTo: string;
};
export default function Item({ text, linkTo }: Props) {
  const navigate = useNavigate();
  return (
    <MenuItem
      onClick={() => {
        navigate(linkTo);
      }}
    >
      <LogoText>
        <img src={Cash} alt="Cash" />
        <TextMenu>{text}</TextMenu>
      </LogoText>
      <img src={Arrow} alt="Arrow" />
    </MenuItem>
  );
}
