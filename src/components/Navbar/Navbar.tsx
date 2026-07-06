// import { Text } from "../Text/Text";
import navStyle from "./Navbar.module.css";

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
        <button className={navStyle.btn}>Subscribe</button>
      </div>
    </nav>
  );
}
