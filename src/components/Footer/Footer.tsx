import footerStyle from "./Footer.module.css";
import { Text } from "../Text/Text";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <section>
      <div className={footerStyle.footerContent}>
        <div>
          <img src="" alt="" />
          <Text variant={"h1"} children={"Stay connected"} />
          <input type="text" />
          <Button text={"Subscribe"} />
        </div>
        <div>
          <Text variant={"h3"} children={"FLAVOURS"} />
          <Text variant={"P"} children={"jfdhsgjkhsdkh"} />
        </div>
        <div>
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
        <div>
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
