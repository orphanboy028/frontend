import Image from "next/image";
import React from "react";
import style from "./css/CategoriesBar.module.css";
import catIMage from "../../public/categories-images/industrial-plants-machinery.jpg";
import cateImage2 from "../../public/categories-images/mobile.jpg";

const catoriesitem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CategoriesBar() {
  const renderList = () => {
    return catoriesitem.map((el, i) => {
      return (
        <>
          <div className={style.categories_box}>
            <div>
              <Image src={cateImage2} width={50} />
            </div>
            <p>Industrial..</p>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className={style.categories_bar_container}>{renderList()}</div>
    </>
  );
}
