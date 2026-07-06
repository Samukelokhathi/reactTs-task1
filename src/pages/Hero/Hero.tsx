import style from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className={style.hero}>
          <h1>A new kind \n of Soda</h1>
          <button>Shop lol</button>
        </div>
        <div>
          <img src="src/assets/heroImage.jpg" alt="" width={400} height={400} />
        </div>
      </section>
    </>
  );
}
