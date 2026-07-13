import { useState } from "react";
import ProductCard from "./ProductCard";
import sliderCss from "./Slider.module.css";
import { Text } from "../../components/Text/Text";

import img1 from "../../pages/ProductSlider/Asset/image-1.jpg";
import img2 from "../../pages/ProductSlider/Asset/image-2.jpg";
import img3 from "../../pages/ProductSlider/Asset/image-3.jpg";
import img4 from "../../pages/ProductSlider/Asset/image-4.jpg";

export default function ProductSlider() {
  // const [count, setCount] = useState(0);
  const [stock] = useState([
    {
      name: "sam",
      imgLink: img1,
      description: "Image no.1",
      btnText: "btn1",
      styling: " rgb(233,224,203)",
    },
    {
      name: "img2",
      imgLink: img2,
      description: "Image no.2",
      btnText: "btn2",
      styling: "rgb(207,191,220)",
    },
    {
      name: "img3",
      imgLink: img3,
      description: "Image no.3",
      btnText: "btn3",
      styling: "rgb(224,199,175)",
    },
    {
      name: "img4",
      imgLink: img4,
      description: "Image no.4",
      btnText: "btn4",
      styling: "rgb(170,212,214)",
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
                color={product.styling}
              />
            );
          })}
      </div>
    </section>
  );
}
