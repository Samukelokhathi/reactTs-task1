import footerStyle from "./Footer.module.css";
import textStyle from "../Text/Text.module.css";
import { Text } from "../../components/Text/Text";
import Button from "../../components/Button/Button.tsx";
import footerLogo from "./FooterAsset/Logo Image.jpg";

export default function Footer() {
  return (
    <section className={footerStyle["footer-section"]}>
      <div className={footerStyle["footer-content"]}>
        <div className={footerStyle["sub-sec-1"]}>
          <div className={footerStyle["logo-text-div"]}>
            <img src={footerLogo} alt="" width={50} height={50} />
            <Text
              variant="h3"
              className={textStyle["variant-h3"]}
              children={["Stay Connected With", <br />, "OLIPOP"]}
            />
          </div>
          <input type="text" placeholder="Enter your email" />
          <Button text={"SUBSCRIBE"} />
        </div>

        <div className={footerStyle["sub-sec-2"]}>
          <Text
            variant={"h3"}
            className={textStyle["variant-h3"]}
            children={"FLAVOURS"}
          />
          <ul>
            <li>Watermelon lime</li>
            <li>Vintage Cole</li>
            <li>Classic Root Beer</li>
            <li>Doctor Goodwin</li>
            <li>Banana Cream</li>
            <li>Strawberry Vanilla</li>
            <li>Ginger Lemon</li>
          </ul>
        </div>

        <div className={footerStyle["sub-sec-2"]}>
          <Text
            variant={"h3"}
            className={textStyle["variant-h3"]}
            children={"INFORMATION"}
          />
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={footerStyle["sub-sec-2"]}>
          <Text
            variant={"h3"}
            className={textStyle["variant-h3"]}
            children={"SOCIAL MEDIA"}
          />
          <ul>
            <li>i</li>
            <li>f</li>
            <li>t</li>
            <li>l</li>
            <li>p</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
