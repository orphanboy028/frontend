import React from "react";
import style from "./css/ProductPage.module.css";
import ad1 from "../../public/Products-images/Car-Insurance-Add-on-Covers.jpg";
import Image from "next/image";
export default function ProductsExtraElements() {
  return (
    <>
      <div className={style.ProductsExtraElements_container}>
        <Image src={ad1} alt="side-banner-add" />
      </div>
    </>
  );
}
