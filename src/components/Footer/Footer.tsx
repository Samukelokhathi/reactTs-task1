import footerStyle from "./Footer.module.css";
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
            <Text variant={"h1"} children={"Stay connected"} />
          </div>
          <input type="text" />
          <Button text={"Subscribe"} />
        </div>

        <div className={footerStyle["sub-sec-2"]}>
          <Text variant={"h3"} children={"FLAVOURS"} />
          <Text variant={"P"} children={"jfdhsgjkhsdkh"} />
        </div>

        <div className={footerStyle["sub-sec-3"]}>
          <Text variant={"h3"} children={"INFORMATION"} />
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
          <Text variant={"P"} children={"jfdhsgjkhsdkh"} />
        </div>

        <div className={footerStyle["sub-sec-4"]}>
          <Text variant={"h3"} children={"SOCIAL MEDIA"} />
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
