import Button from "../../components/Button/Button";
import heroStyle from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className={heroStyle.heroContent}>
          <h1>
            A new kind <br /> of Soda <span className="tm-symbol">™</span>
          </h1>

          <div>
            <Button className={""} text="Styled Button" />
          </div>
        </div>
        <div className={heroStyle.imageContainer}>
          <img src="src/assets/heroImage.jpg" alt="heroImage" />
        </div>
      </section>
    </>
  );
}
