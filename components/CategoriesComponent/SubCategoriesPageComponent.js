import Image from "next/image";
import React from "react";
import style from "./css/SubCategories.module.css";
import subCatIMage from "../../public/categories-images/Industrial-Supplies.jpg";
import SubCategoriesCards from "./SubCategoriesCards";

export default function SubCategoriesPageComponent() {
  const renderCards = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
      return (
        <>
          <SubCategoriesCards />
        </>
      );
    });
  };

  return (
    <>
      <div className={style.SubCategoriesPageComponent_main_conatiner}>
        <div className={style.SubCategoriesPageComponent_container}>
          <div className={style.SubCategories_Helight_container}>
            <div className={style.SubCategories_nameBox}>
              <h2>Hospital Linen</h2>
            </div>
            <div className={style.subCategories_imageBox}>
              <Image
                src={subCatIMage}
                alt="categories-image"
                className={style.subCategoriesIMage}
              />
            </div>
          </div>

          {/* subcategories Product container start */}
          <div className={style.subCategories_Product_container}>
            {renderCards()}
          </div>
          {/* subcategories Product container End */}
        </div>

        {/* second part start */}
        <div className={style.SubCategoriesPageComponent_container}>
          <div className={style.SubCategories_Helight_container}>
            <div className={style.SubCategories_nameBox}>
              <h2>Hospital Linen</h2>
            </div>
            <div className={style.subCategories_imageBox}>
              <Image
                src={subCatIMage}
                alt="categories-image"
                className={style.subCategoriesIMage}
              />
            </div>
          </div>

          {/* subcategories Product container start */}
          <div className={style.subCategories_Product_container}>
            {renderCards()}
          </div>
          {/* subcategories Product container End */}
        </div>
        {/* second part end */}
      </div>
    </>
  );
}
