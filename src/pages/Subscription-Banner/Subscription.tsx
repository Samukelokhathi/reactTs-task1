import Button from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";
import textStyle from "../../components/Text/Text.module.css";
import subStyle from "./Subscription.module.css";

export default function Subscription() {
  return (
    <section className={subStyle.subSection}>
      <div className={subStyle.subContent}>
        <Text
          variant={"h1"}
          className={textStyle["variant-h1"]}
          children={"Subscription Heading"}
        />
        <Text
          variant={"p"}
          className={textStyle["variant-p"]}
          children={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero suscipit perferendis, voluptates incidunt dolore enim, repellat autem porro maxime necessitatibus nisi. Recusandae numquam dolor voluptate officiis minus odio reprehenderit?"
          }
        />
        <Button text={"Subscription & Save"} />
      </div>
    </section>
  );
}
