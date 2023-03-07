import Image from "next/image";
import React from "react";
import style from "./css/NavBar.module.css";
import logo from "../../public/flipkart-plus.png";
import NavSearch from "./NavSearch";
import Link from "next/link";
import avtar from "../../public/user.png";
import downArrow from "../../public/down-arrow.png";
import MNavBar from "./mobileView/MNavBar";

export default function NavBar() {
  return (
    <>
      {/* deskstop view start */}
      <nav className={style.top_navBar}>
        <div className={style.nav_side_gap}></div>
        {/* navbar center part start */}
        <div className={style.nav_centerPart}>
          <div className={style.logo_box}>
            <Image src={logo} width={75} height={20} />
          </div>
          <div className={style.nav_search_box}>
            <NavSearch />
          </div>
          <div className={style.Login_btn_box}>
            <Link href={"/"} className={style.get_qoto_link}>
              Get Price{" "}
            </Link>
          </div>
          <div className={style.Login_btn_box}>
            <Link href={"/products"}>Became a seller</Link>
          </div>
          <div className={style.user_box}>
            <div className={style.userIMage}>
              <Image src={avtar} width={25} />
            </div>
            <div className={style.user_name}>
              <p>Hi Pawan</p>
              <div className={style.arrowDown}>
                <Image src={downArrow} width={15} />
              </div>
            </div>
          </div>
        </div>
        {/* navbar center part End */}
        <div className={style.nav_side_gap}></div>
      </nav>
      {/* deskstop view End */}

      {/* Mobile view NavBar start */}
      <div className={style.mobile_mode_top_navbar}>
        <MNavBar />
      </div>
      {/* Mobile view NavBar start */}
    </>
  );
}
