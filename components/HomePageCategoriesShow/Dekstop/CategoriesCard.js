import Image from "next/image";
import React from "react";
import style from "../css/CategeoriesCardsBar.module.css";
import banner1 from "../../../public/categories-images/industrie.jpg";

export default function CategoriesCard() {
  const cardList = () => {
    return [1, 2, 3].map((el, i) => {
      return (
        <>
          {/* card start */}
          <div className={style.categoriesCard_container}>
            <div className={style.CategoriesCard_box}>
              <div className={style.CategoriesCard_title}>
                <h3>Medical Treatment Services</h3>
              </div>
              <div className={style.CategoriesCard_inner_box}>
                <div className={style.CategoriesCard_inner_box_imageBox}>
                  <Image
                    className={style.CategoriesCard_image}
                    src={banner1}
                    alt="banner"
                  />
                </div>
                <div className={style.CategoriesCard_inner_box_contentBox}>
                  <div className={style.CategoriesCard_cat_list}>
                    <h2>Dental Treatment Services </h2>
                    <h2>Medical Surgery Services </h2>
                    <h2>Eye Treatment </h2>
                    <h2>Plastic Surgery Services</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card End */}
        </>
      );
    });
  };

  return <>{cardList()}</>;
}
