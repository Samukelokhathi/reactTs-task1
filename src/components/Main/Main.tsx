import Hero from "../../pages/Hero/Hero";
import mainStyle from "../Main/Main.module.css";
import IngredientCard from "../../pages/IngredientCard/IngredientCard";
import ProductSlider from "../../pages/ProductSlider/ProductSlider";

export default function Main() {
  return (
    <div className={mainStyle.mainContent}>
      <Hero></Hero>
      <IngredientCard />
      <ProductSlider></ProductSlider>
    </div>
  );
}
