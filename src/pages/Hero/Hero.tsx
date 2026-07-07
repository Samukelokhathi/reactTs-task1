import Button from "../../components/Button/Button";
import heroStyle from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className={heroStyle.heroContent}>
          <h1>
            A new kind \n of Soda <span className="tm-symbol">™</span>
          </h1>

          <div>
            <Button text="Click Me" />

            <Button
              text="Styled Button"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
              }}
            />
          </div>
        </div>
        <div className={heroStyle.imageContainer}>
          <img src="src/assets/heroImage.jpg" alt="heroImage" />
        </div>
      </section>
    </>
  );
}
