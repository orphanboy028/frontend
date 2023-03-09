import React from "react";
import style from "./css/Categories.module.css";
import categoriesImae from "../../public/categories-images/Industrial-Supplies.jpg";
import Image from "next/image";
import Link from "next/link";

export default function MainCategoriesPageComponent() {
  // Render Categories List
  const renderCategoriesList = () => {
    return [1, 2, 3, 4].map((el, i) => {
      return (
        <>
          <div className={style.categgoriesListBox_children}>
            <div className={style.categoriesListBox_children_heading}>
              <Link href={"/SubCategories"}>
                <h2>Manufacturing & Processing Machinery</h2>
              </Link>
            </div>
            <div className={style.categgoriesListBox_children_list}>
              <ul>
                <li>Machine Tools</li>
                <li>Engineering & Construction Machinery</li>
                <li> Woodworking Machinery </li>
                <li> Plastic Machinery</li>
                <li> Metallic Processing Machinery</li>
                <li> Mould</li>
                <li> Laser Equipment</li>
                <li> Casting & Forging</li>
                <li> Agricultural Machinery</li>
                <li> More </li>
              </ul>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div>
        <div className={style.MainCategoriesPageComponent_mainContainer}>
          <div className={style.CategoriesBox}>
            <div className={style.CategoriesBox_imageBox}>
              <div>
                <h2>Industrial Supplies</h2>
              </div>

              <div>
                <Image
                  src={categoriesImae}
                  alt="categories-image"
                  className={style.categoriesIMage}
                />
              </div>
            </div>
          </div>

          {/* Categories List start */}
          <div className={style.categoriesListBox}>
            {renderCategoriesList()}
          </div>
          {/* Categories List End */}
        </div>
        {/* categories box start */}
        <div className={style.MainCategoriesPageComponent_mainContainer}>
          <div className={style.CategoriesBox}>
            <div className={style.CategoriesBox_imageBox}>
              <div>
                <h2>Industrial Supplies</h2>
              </div>

              <div>
                <Image
                  src={categoriesImae}
                  alt="categories-image"
                  className={style.categoriesIMage}
                />
              </div>
            </div>
          </div>

          {/* Categories List start */}
          <div className={style.categoriesListBox}>
            {renderCategoriesList()}
          </div>
          {/* Categories List End */}
        </div>
        {/* categories box End */}

        {/* categories box start */}
        <div className={style.MainCategoriesPageComponent_mainContainer}>
          <div className={style.CategoriesBox}>
            <div className={style.CategoriesBox_imageBox}>
              <div>
                <h2>Industrial Supplies</h2>
              </div>

              <div>
                <Image
                  src={categoriesImae}
                  alt="categories-image"
                  className={style.categoriesIMage}
                />
              </div>
            </div>
          </div>

          {/* Categories List start */}
          <div className={style.categoriesListBox}>
            {renderCategoriesList()}
          </div>
          {/* Categories List End */}
        </div>
        {/* categories box End */}

        {/* categories box start */}
        <div className={style.MainCategoriesPageComponent_mainContainer}>
          <div className={style.CategoriesBox}>
            <div className={style.CategoriesBox_imageBox}>
              <div>
                <h2>Industrial Supplies</h2>
              </div>

              <div>
                <Image
                  src={categoriesImae}
                  alt="categories-image"
                  className={style.categoriesIMage}
                />
              </div>
            </div>
          </div>

          {/* Categories List start */}
          <div className={style.categoriesListBox}>
            {renderCategoriesList()}
          </div>
          {/* Categories List End */}
        </div>
        {/* categories box End */}
      </div>
    </>
  );
}
