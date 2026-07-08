import Hero from "../../pages/Hero/Hero";
import mainStyle from "../Main/Main.module.css";
import IngredientCard from "../../pages/IngredientCard/IngredientCard";

export default function Main() {
  return (
    <div className={mainStyle.body}>
      <Hero></Hero>
      <IngredientCard />
    </div>
  );
}
