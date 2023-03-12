import React from "react";
import style from "./css/RecentActivity.module.css";
import smartphone from "../../../public/icons/smartphone.png";
import computer from "../../../public/icons/computer.png";
import searchIcon from "../../../public/icons/search-interface-symbol.png";

import Image from "next/image";

export default function RecentSearch() {
  return (
    <>
      <div className={style.RecentSearch_main_container}>
        <div
          className={`${style.RecentSearch_detailBoxHeader} ${style.RecentSearch_header_design}`}
        >
          <div className={style.RecentSearch_date}>Date</div>
          <div className={style.RecentSearch_device}>Device</div>
          <div className={style.RecentSearch_search_product}>
            Searched Products
          </div>
          <div className={style.RecentSearch_searchBtn}>Search now</div>
        </div>

        <div className={style.RecentSearch_detailBoxHeader}>
          <div className={style.RecentSearch_date}>Today 04:53 pm</div>
          <div className={style.RecentSearch_device}>
            <Image src={smartphone} alt="smart-phone" width={25} />
          </div>
          <div className={style.RecentSearch_search_product}>
            Searched Products
          </div>
          <div className={style.RecentSearch_searchBtn}>
            <div className={style.RecentSearch_searchIconBox}>
              <Image src={searchIcon} alt="search-btn" width={25} />
            </div>
          </div>
        </div>

        <div className={style.RecentSearch_detailBoxHeader}>
          <div className={style.RecentSearch_date}>Today 04:53 pm</div>
          <div className={style.RecentSearch_device}>
            <Image src={computer} alt="smart-phone" width={25} />
          </div>
          <div className={style.RecentSearch_search_product}>
            Searched Products
          </div>
          <div className={style.RecentSearch_searchBtn}>
            <div className={style.RecentSearch_searchIconBox}>
              <Image src={searchIcon} alt="search-btn" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
