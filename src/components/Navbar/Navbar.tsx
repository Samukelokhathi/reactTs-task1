// import { Text } from "../Text/Text";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src="src/assets/Logo Image.jpg" alt="logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Shop Online</a>
        </li>
        <li>
          <a href="#"></a>Find in Store
        </li>
        <li>
          <a href="#"></a>Learn More
        </li>
      </ul>
      <div className={styles.btns}>
        <button className={styles.btn}>Subscribe</button>
      </div>
    </nav>
  );
}
