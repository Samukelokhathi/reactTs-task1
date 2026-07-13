import { useState } from "react";
import ProductCard from "./ProductCard";
import sliderCss from "./Slider.module.css";
import { Text } from "../../components/Text/Text";

import img1 from "../../pages/ProductSlider/Asset/image-1.jpg";
import img2 from "../../pages/ProductSlider/Asset/image-2.jpg";
import img3 from "../../pages/ProductSlider/Asset/image-3.jpg";
import img4 from "../../pages/ProductSlider/Asset/image-4.png";

export default function ProductSlider() {
  // const [count, setCount] = useState(0);
  const [stock] = useState([
    {
      name: "Classic Grape",
      imgLink: img1,
      description: "Image no.1",
      btnText: "$34.99",
      cardBgColor: " rgb(233,224,203)",
      btnColor: "rgb(225,182,7)",
    },
    {
      name: "Orang Squeeze",
      imgLink: img2,
      description: "Image no.2",
      btnText: "$34.99",
      cardBgColor: "rgb(207,191,220)",
      btnColor: "rgb(146,68,198)",
    },
    {
      name: "Red Punch",
      imgLink: img3,
      description: "Image no.3",
      btnText: "$34.99",
      cardBgColor: "rgb(224,199,175)",
      btnColor: "rgb(234,102,23)",
    },
    {
      name: "Classic Green",
      imgLink: img4,
      description: "Image no.4",
      btnText: "$34.99",
      cardBgColor: "rgb(170,212,214)",
      btnColor: "rgb(254,56,72)",
    },
  ]);

  return (
    <section className={sliderCss.sliderSection}>
      <div className={sliderCss.heading}>
        <Text variant={"h1"} children={"Taste Your Favorite"} />
        <Text
          variant={"p"}
          children={"Enjoy our take on the classic flavor you know and love"}
        />
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
                cardColor={product.cardBgColor}
                btnColor={product.btnColor}
              />
            );
          })}
      </div>
    </section>
  );
}
