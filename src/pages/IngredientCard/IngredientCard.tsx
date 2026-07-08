import CardStyle from "../IngredientCard/IngredientCard.module.css";
import { Text } from "../../components/Text/Text";
import Button from "../../components/Button/Button";

export default function IngredientCard() {
  return (
    <>
      <section>
        <div>
          <img src="src/assets/IngredientCardImage.jpg" alt="" />
        </div>

        <div className={CardStyle.content}>
          <Text variant={"h1"}>Testing Testing!</Text>
          <Text variant={"p"}>
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
