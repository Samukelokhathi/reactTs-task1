import heroStyle from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className={heroStyle.heroContent}>
          <h1>A new kind \n of Soda</h1>
        </div>
        <div className={heroStyle.imageContainer}>
          <img src="src/assets/heroImage.jpg" alt="heroImage" />
        </div>
      </section>
    </>
  );
}
