import { useState } from "react";
import ProductCard from "./ProductCard";
import sliderCss from "./Slider.module.css";
import { Text } from "../../components/Text/Text";

import img1 from "../../assets/2cans.jpg";
import img2 from "../../assets/soda-can-hero-image.jpg";
import img3 from "../../assets/heroImage.jpg";

export default function ProductSlider() {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState([
    { name: "sam", imgLink: img1, description: "Image no.1", btnText: "btn1" },
    { name: "img2", imgLink: img2, description: "Image no.2", btnText: "btn2" },
    { name: "img3", imgLink: img3, description: "Image no.3", btnText: "btn3" },
  ]);

  return (
    <section className={sliderCss.sliderSection}>
      <div>
        <Text variant={"h1"} children={"Product Slider Header"} />
        <Text variant={"p"} children={"Hello world my name is sam"} />
      </div>
    </section>
  );
}
