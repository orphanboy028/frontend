import Image from "next/image";
import React from "react";
import style from "../css/NavBar.module.css";
import burger from "../../../public/menu-burger.png";
import logo from "../../../public/flipkart-plus.png";
import bellIcon from "../../../public/bell.png";
import userIcon from "../../../public/user.png";
import mcategoriesIcon1 from "../../../public/categories-images/mobile/steel-pipelines-cables-plant.jpg";
import more from "../../../public/categories-images/mobile/more.png";
import dashboardICon from "../../../public/dashboard.png";
import NavSearch from "../NavSearch";
import { useContext } from "react";
import { MyContext } from "../../../ContaxtApi/ContextApi";

export default function MNavBar() {
  const { isOpen, setisOpen } = useContext(MyContext);

  // open mobile menu Drawer
  const handelDrawerOpen = () => {
    setisOpen(true);
  };

  return (
    <>
      <div>
        <div className={style.mobile_top_navBar}>
          <div className={style.mobile_topNav_left}>
            <div className={style.mobile_burger} onClick={handelDrawerOpen}>
              <Image src={burger} width={25} alt="mobile-burger" />
            </div>
            <div className={style.mobile_logo}>
              <Image src={logo} width={70} alt="logo" />
            </div>
          </div>
          <div className={style.mobile_topNav_right}>
            <div className={style.mobile_topNav_right_box_child}>
              <Image src={bellIcon} width={20} alt="notification" />
            </div>
            <div className={style.mobile_topNav_right_box_child}>
              <Image src={dashboardICon} width={20} alt="dashboardICon" />
            </div>
            <div className={style.mobile_topNav_right_box_child}>
              <Image src={userIcon} width={20} alt="userIcon" />
            </div>
          </div>
        </div>
        <div className={style.mobile_search_box}>
          <NavSearch />
        </div>

        <div className={style.mobile_categories_container}>
          <div className={style.mobile_categories_box}>
            <Image
              className={style.mobile_categories_image}
              src={mcategoriesIcon1}
              alt="mobile categories image"
            />
          </div>
          <div className={style.mobile_categories_box}>
            <Image
              className={style.mobile_categories_image}
              src={mcategoriesIcon1}
              alt="mobile categories image"
            />
          </div>
          <div className={style.mobile_categories_box}>
            <Image
              className={style.mobile_categories_image}
              src={mcategoriesIcon1}
              alt="mobile categories image"
            />
          </div>
          <div className={style.mobile_categories_box}>
            <Image
              className={style.mobile_categories_image}
              src={mcategoriesIcon1}
              alt="mobile categories image"
            />
          </div>
          <div className={style.mobile_categories_box}>
            <Image
              className={style.mobile_categories_image}
              src={more}
              alt="mobile categories image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
