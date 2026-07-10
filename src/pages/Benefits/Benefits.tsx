import benefitStyle from "./BenefitItems.module.css";
import { Text } from "../../components/Text/Text";

export default function Benefits() {
  return (
    <section className={benefitStyle.benefitSection}>
      <div>
        <div>
          <i>icon</i>
          <Text variant={"p"} children={"Save 15% every order"} />
        </div>
        <div>
          <i>icon</i>
          <Text variant={"p"} children={"Save 15% every order"} />
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <i>icon</i>
          <Text variant={"p"} children={"Save 15% every order"} />
        </div>
        <div>
          <i>icon</i>
          <Text variant={"p"} children={"Save 15% every order"} />
        </div>
      </div>
    </section>
  );
}
