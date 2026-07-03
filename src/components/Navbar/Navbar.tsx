import { Text } from "../Text/Text";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className="{style.content}">
        <Text variant={"h2"}>Sam</Text>
        <div className={styles.links}>
          <a href="/#" className={styles.link}>
            Shop Online
          </a>
          <a href="/#" className={styles.link}>
            Find in Store
          </a>
          <a href="/#" className={styles.link}>
            Learn More
          </a>
        </div>
        <div>
          <button>Subtribe</button>
        </div>
      </div>
    </nav>
  );
}
