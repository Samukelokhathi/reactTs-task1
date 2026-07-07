import Hero from "../../pages/Hero/Hero";
import mainStyle from "../Main/Main.module.css";

export default function Main() {
  return (
    <div className={mainStyle.body}>
      <Hero></Hero>
    </div>
  );
}
