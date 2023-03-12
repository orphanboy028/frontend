import Image from "next/image";
import React from "react";
import style from "./css/UserDashBoard.module.css";
import logo from "../../public/flipkart-plus.png";

export default function UserDashBoardNavBar() {
  return (
    <>
      <div className={style.UserDashBoardNavBar_navContainer}>
        <div className={style.UserDashBoardNavBar_brandLogoBox}>
          <Image src={logo} alt="logo" width={70} />
        </div>

        <div className={style.UserDashBoardNavBar_serachbarBox}>
          <div className={style.UserDashBoardNavBar_searchInputBox}>
            <input type="text" placeholder="Search " />
          </div>
          <div className={style.UserDashBoardNavBar_searchBtn}>Search</div>
        </div>
      </div>
    </>
  );
}
