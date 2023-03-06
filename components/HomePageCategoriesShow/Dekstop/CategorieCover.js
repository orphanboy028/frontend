import Image from "next/image";
import React from "react";
import style from "../css/CategeoriesCardsBar.module.css";
import banner1 from "../../../public/categories-images/industrie.jpg";
export default function CategorieCover() {
  return (
    <>
      <div className={style.CategoriesCover_box}>
        <div className={style.CategorieCover_text}>
          <h2>Building Construction Material & Equipment </h2>
        </div>
        <div className={style.CategorieCover_overlay}></div>
      </div>
    </>
  );
}
