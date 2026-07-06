import { Text } from "../Text/Text";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className="{style.content}">
        <img
          src="src/assets/Logo Image.jpg"
          alt="logoImage"
          height={40}
          width={40}
        />
        <div className={styles.links}>
          <a href="/#" className={styles.link}>
            <Text variant={"p"}>Shop Online</Text>
          </a>
          <a href="/#" className={styles.link}>
            <Text variant={"p"}>Find in Store</Text>
          </a>
          <a href="/#" className={styles.link}>
            <Text variant={"p"}>Learn More</Text>
          </a>
        </div>
        <div>
          <button>Subscribe</button>
        </div>
      </div>
    </nav>
  );
}
