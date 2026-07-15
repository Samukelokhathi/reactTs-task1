import CardStyle from "../IngredientCard/IngredientCard.module.css";
import { Text } from "../../components/Text/Text";
import textStyle from "../../components/Text/Text.module.css";
import Button from "../../components/Button/Button";
import image from "./Asset/images (1).jpg";

export default function IngredientCard() {
  return (
    <>
      <section className={CardStyle.cardSection}>
        <div className={CardStyle.cardImgContainer}>
          <img src={image} alt="" />
        </div>

        <div className={CardStyle.contentDiv}>
          <Text variant={"h1"} className={textStyle["variant-h1"]}>
            | Our Foundational ingredient
          </Text>

          <Text variant={"p"} className={textStyle["variant-p"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            magni rem eveniet molestias quod ipsum velit quo, sint maxime esse
            quibusdam blanditiis asperiores dolor earum expedita vero deserunt
            veritatis delectus.
          </Text>

          <Button className={""} text="Read More" />
        </div>
      </section>
    </>
  );
}
