import cardStyle from "../ProductSlider/Slider.module.css";
import { Text } from "../../components/Text/Text";
import Button from "../../components/Button/Button";

type ItemCardProps = {
  name: string;
  description: string;
  imgLink: string;
  btnText: string;
  cardColor: string;
  btnColor: string;
};

export default function ProductCard({
  name,
  imgLink,
  btnText,
  description,
  cardColor,
  btnColor,
}: ItemCardProps) {
  return (
    <article
      className={cardStyle["item-card"]}
      style={{ background: cardColor }}
    >
      <img
        className={cardStyle["item-image"]}
        src={imgLink}
        alt={description}
      />
      <Text variant={"span"} children={name} />
      <Button
        text={btnText}
        className={cardStyle["item-btn"]}
        style={{ background: btnColor }}
      />
    </article>
  );
}
