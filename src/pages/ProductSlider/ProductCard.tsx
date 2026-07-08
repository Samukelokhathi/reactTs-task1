import cardStyle from "../ProductSlider/Slider.module.css";
import { Text } from "../../components/Text/Text";
import Button from "../../components/Button/Button";

type ItemCardProps = {
  name: string;
  description: string;
  imgLink: string;
  btnText: string;
};

export default function ProductCard({
  name,
  imgLink,
  btnText,
  description,
}: ItemCardProps) {
  return (
    <article>
      <img className={cardStyle["item-card"]} src={imgLink} alt={description} />
      <Text variant={"span"} children={name} />
      <Button text={btnText} />
    </article>
  );
}
