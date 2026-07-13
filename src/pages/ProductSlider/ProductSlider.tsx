import { useState } from "react";
import ProductCard from "./ProductCard";
import sliderCss from "./Slider.module.css";
import { Text } from "../../components/Text/Text";

import img1 from "../../assets/2cans.jpg";
import img2 from "../../assets/soda-can-hero-image.jpg";
import img3 from "../../assets/heroImage.jpg";

export default function ProductSlider() {
  // const [count, setCount] = useState(0);
  const [stock] = useState([
    { name: "sam", imgLink: img1, description: "Image no.1", btnText: "btn1" },
    { name: "img2", imgLink: img2, description: "Image no.2", btnText: "btn2" },
    { name: "img3", imgLink: img3, description: "Image no.3", btnText: "btn3" },
  ]);

  return (
    <section className={sliderCss.sliderSection}>
      <div className={sliderCss.heading}>
        <Text variant={"h1"} children={"Product Slider Header"} />
        <Text variant={"p"} children={"Hello world my name is sam"} />
      </div>

      <div className={sliderCss.cardContainer}>
        {stock &&
          stock.length > 0 &&
          stock.map((product) => {
            return (
              <ProductCard
                imgLink={product.imgLink}
                btnText={product.btnText}
                description={product.description}
                name={product.name}
              />
            );
          })}
      </div>
    </section>
  );
}
