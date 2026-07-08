// import { Text } from "../Text/Text";
import navStyle from "./Navbar.module.css";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav>
      <div className={navStyle.logo}>
        <img
          src="src/assets/Logo Image.jpg"
          alt="logo"
          height={40}
          width={40}
        />
      </div>
      <ul className={navStyle.navLinks}>
        <li>
          <a href="#">Shop Online</a>
        </li>
        <li>
          <a href="#">Find in Store</a>
        </li>
        <li>
          <a href="#">Learn More</a>
        </li>
      </ul>
      <div className={navStyle.btns}>
        <Button text="Subscribe" />
      </div>
    </nav>
  );
}
