import Hero from "../../pages/Hero/Hero";
import mainStyle from "../Main/Main.module.css";
import IngredientCard from "../../pages/IngredientCard/IngredientCard";
import ProductSlider from "../../pages/ProductSlider/ProductSlider";
import Subscription from "../../pages/Subscription-Banner/Subscription";

export default function Main() {
  return (
    <div className={mainStyle.mainContent}>
      <Hero></Hero>
      <IngredientCard />
      <ProductSlider></ProductSlider>
      <Subscription />
    </div>
  );
}
