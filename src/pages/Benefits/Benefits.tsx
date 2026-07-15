import benefitStyle from "./BenefitItems.module.css";
import { Text } from "../../components/Text/Text";

import dollarSignIcon from "./Benefit-Icons-image/coin.png";
import drinkingIcon from "./Benefit-Icons-image/drinking.png";
import centerImg from "./Benefit-Icons-image/images.jpg";
import lorryIcon from "./Benefit-Icons-image/lorry.png";
import removeIcon from "./Benefit-Icons-image/remove.png";

export default function Benefits() {
  return (
    <section className={benefitStyle.benefitSection}>
      <div className={benefitStyle["icon-img-container"]}>
        <div className={benefitStyle["icon-img-div"]}>
          <div className={benefitStyle["icon-div"]}>
            <img
              src={dollarSignIcon}
              alt="dollar sign icon"
              className={benefitStyle.icon}
            />
          </div>
          <Text variant={"p"} children={"Save 15% every order."} />
        </div>

        <div className={benefitStyle["icon-img-div"]}>
          <div className={benefitStyle["icon-div"]}>
            <img
              src={drinkingIcon}
              alt="dollar sign icon"
              className={benefitStyle.icon}
            />
          </div>
          <Text variant={"p"} children={"Early access to new flavors."} />
        </div>
      </div>

      <div className={benefitStyle["center-img-div"]}>
        <img
          src={centerImg}
          alt="juice Image"
          width={"310px"}
          height={"300px"}
          className={benefitStyle.centerImg}
        />
      </div>
      <div className={benefitStyle["icon-img-container"]}>
        <div className={benefitStyle["icon-img-div"]}>
          <div className={benefitStyle["icon-div"]}>
            <img
              src={lorryIcon}
              alt="dollar sign icon"
              className={benefitStyle.icon}
            />
          </div>
          <Text variant={"p"} children={"Free shopping, Always."} />
        </div>
        <div className={benefitStyle["icon-img-div"]}>
          <div className={benefitStyle["icon-div"]}>
            <img
              src={removeIcon}
              alt="dollar sign icon"
              className={benefitStyle.icon}
            />
          </div>
          <Text variant={"p"} children={"Swap, skip or cancel any time."} />
        </div>
      </div>
    </section>
  );
}
