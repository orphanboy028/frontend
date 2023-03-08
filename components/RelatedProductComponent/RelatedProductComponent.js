import React from "react";
import style from "./css/RelatedProductComponent.module.css";
import RelatedProductCard from "./RelatedProductCard";

export default function RelatedProductComponent() {
  return (
    <>
      <div className={style.RelatedProductComponent_Maincontainer}>
        <div className={style.RelatedProductComponent_container}>
          <RelatedProductCard />
        </div>
      </div>
    </>
  );
}
