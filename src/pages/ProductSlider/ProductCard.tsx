import cardStyle from "../ProductSlider/Slider.module.css";
import { Text } from "../../components/Text/Text";
import Button from "../../components/Button/Button";

type ItemCardProps = {
  name: string;
  description: string;
  imgLink: string;
  btnText: string;
  color: string;
};

export default function ProductCard({
  name,
  imgLink,
  btnText,
  description,
  color,
}: ItemCardProps) {
  return (
    <article className={cardStyle["item-card"]} style={{ background: color }}>
      <img
        className={cardStyle["item-image"]}
        src={imgLink}
        alt={description}
      />
      <Text variant={"span"} children={name} />
      <Button text={btnText} className={cardStyle["item-btn"]} />
      {/* cardStyle={color} */}
    </article>
  );
}
