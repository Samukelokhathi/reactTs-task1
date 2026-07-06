// import { Text } from "../Text/Text";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>
        <img
          src="src/assets/Logo Image.jpg"
          alt="logo"
          height={40}
          width={40}
        />
      </div>
      <ul className={styles.navLinks}>
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
      <div className={styles.btns}>
        <button className={styles.btn}>Subscribe</button>
      </div>
    </nav>
  );
}
