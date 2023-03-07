import React from "react";
import style from "../css/CategeoriesCardsBar.module.css";
import MobileCategoriesCard from "../mobile/MobileCategoriesCard";
import CategorieCover from "./CategorieCover";
import CategoriesCard from "./CategoriesCard";
export default function CategoriseCardsBar() {
  return (
    <div>
      <div className={style.categories_cards_container}>
        <div className={style.categories_cover_box}>
          <CategorieCover />
        </div>
        <div className={style.categories_cards_box}>
          <CategoriesCard />
        </div>
      </div>
      <div className={style.Mobile_categories_cards_container}>
        <MobileCategoriesCard />
      </div>
    </div>
  );
}
