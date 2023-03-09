import Image from "next/image";
import React from "react";
import style from "./css/SubCategories.module.css";
import leafImge from "../../public/categories-images/bed-sheet-250x250.jpg";
import Link from "next/link";
export default function SubCategoriesCards() {
  return (
    <>
      <div className={style.SubCategoriesCards_Container}>
        <div className={style.SubCategoriesCards_imageBox}>
          <Image
            src={leafImge}
            alt="leaf-image"
            className={style.SubCategoriesCards_image}
          />
        </div>
        <div>
          <Link href={"/products"}>
            <h2>Hospital Bed Sheet</h2>
          </Link>
        </div>
        <div>
          <p>(2554)</p>
        </div>
      </div>
    </>
  );
}
