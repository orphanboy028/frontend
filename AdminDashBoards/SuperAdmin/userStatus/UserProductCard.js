import React from "react";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { useContext } from "react";
import style from "../css/Alluser.module.css";
import Image from "next/image";

export default function UserProductCard() {
  const { getuserProducts, userProducts } = useContext(ProductContext);

  const renderCards = () => {
    return userProducts.map((el, i) => {
      return (
        <>
          <div className={style.card_container}>
            <div className={style.card_image_contaier}>
              {el.images.map((image) => {
                return (
                  <>
                    <Image
                      src={`/Products-images/${image.url}`}
                      alt={image.altText}
                      width={150}
                      height={150}
                    />
                  </>
                );
              })}
            </div>
            <div>{el.name}</div>
            <div>{el.price}</div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className={style.productcard_container}>{renderCards()}</div>
    </>
  );
}
