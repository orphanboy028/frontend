import React from "react";
import style from "./css/ProductPage.module.css";
import ProductCards from "./ProductCards";
import RelatedCategories from "./RelatedCategories";

export default function ProductPage() {
  return (
    <>
      <div className={style.ProductPage_container}>
        <div className={style.ProductPage_sideBar_realated_Conatiner}>
          <RelatedCategories />
        </div>

        <div className={style.ProductPage_Products_card_conatiner}>
          <ProductCards />
        </div>

        <div className={style.ProductPage_extra_elements_container}>
          Extra element
        </div>
      </div>
    </>
  );
}
