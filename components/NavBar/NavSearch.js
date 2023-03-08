import Image from "next/image";
import React from "react";
import style from "./css/NavSearch.module.css";
import searchIcon from "../../public/search.png";

export default function NavSearch() {
  return (
    <>
      <div className={style.search_container}>
        <form className={style.search_form}>
          <input
            type="text"
            style={{ width: "100%" }}
            className={style.search_input}
          />
        </form>
      </div>
      <div className={style.search_icon_box}>
        <Image src={searchIcon} width={20} />
      </div>
    </>
  );
}
