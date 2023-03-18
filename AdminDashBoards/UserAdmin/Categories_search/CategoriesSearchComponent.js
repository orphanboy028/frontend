import React, { useEffect } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import style from "./css/CategoriesSearch.module.css";
import catLogo from "../../../public/categories-images/user-64136fafe4b42445ec968b99-1679005558236.jpeg";
import Image from "next/image";
import { CategoriesContext } from "../../../ContaxtApi/categoriesContextApi";
import { useContext } from "react";

export default function CategoriesSearchComponent() {
  const { getCategories } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <UserAdminLayOut>
        <div className={style.Cate_Search_main_container}>
          <div className={style.Cate_Search_SearchBox}>
            <div className={style.Cate_search_inputBox}>
              <input type={"text"} placeholder="search related categories" />
            </div>
            <div className={style.cate_search_btnBox}>
              <button>search</button>
            </div>
          </div>

          <div className={style.search_result_Container}>
            <div className={style.search_results_box}>
              <div className={style.categories_imageBox}>
                <Image src={catLogo} alt="categories-image" width={50} />
              </div>
              <div className={style.categoriesDeatilsBox}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </UserAdminLayOut>
    </>
  );
}
