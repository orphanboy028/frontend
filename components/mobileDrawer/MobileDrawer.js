import React, { useState } from "react";
import style from "./css/MobileDrawer.module.css";
import { useContext } from "react";
import { MyContext } from "../../ContaxtApi/ContextApi";
import Image from "next/image";
import userAvtar from "../../public/user-avatar.png";
import EditIcon from "../../public/edit.png";
import homeIcon from "../../public/Mobile-Drawer-menu-Icons/home.png";
import Link from "next/link";

const menuName = [
  {
    name: "Home",
    slug: "/",
  },

  {
    name: "view Produtcs",
    slug: "/products",
  },

  {
    name: "Important Supplies",
    slug: "/",
  },

  {
    name: "View All Categories",
    slug: "/",
  },
  {
    name: "Post Your Requirement",
    slug: "/",
  },

  {
    name: "Pay with Us",
    slug: "/",
  },

  {
    name: "My Order",
    slug: "/",
  },

  {
    name: "Your Favorities",
    slug: "/",
  },
];

export default function MobileDrawer() {
  const { isOpen, setisOpen } = useContext(MyContext);

  // close Mobile Menu Drawer
  const handelDrawerClose = () => {
    setisOpen(false);
  };

  const menuList = () => {
    return menuName.map((el, i) => {
      return (
        <>
          <div className={style.MobileDrawer_menu_box} key={i}>
            <div className={style.MobileDrawer_menu_box_iconBox}>
              <Image src={homeIcon} alt="menue-home-icon" width={20} />
            </div>
            <div className={style.MobileDrawer_menu_box_contentBox}>
              <Link href={el.slug}>
                <p>{el.name} </p>
              </Link>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className={style.MobileDrawer_container}>
        <div className={style.MobileDrawer_content_part}>
          {/* User Information start */}
          <div className={style.MobileDrawer_user_details_container}>
            <div className={style.MobileDrawer_user_Image_container}>
              <Image
                src={userAvtar}
                alt="user Image"
                className={style.MobileDrawer_userIMage}
              />
            </div>

            <div className={style.MobileDrawer_userNumber_container}>
              {" "}
              <h3>Hii Pawan Chauhan </h3>
              <p>+91 9310574918 </p>
            </div>
            <div className={style.MobileDrawer_edit_container}>
              <Image src={EditIcon} alt="edit-icon" width={20} height={20} />
            </div>
          </div>
          {/* User Information End */}

          {/* Mobile Drawer Menu List Start */}
          <div className={style.MobileDrawer_Menu_container}>
            {/* Menu Box start */}
            {menuList()}
            {/* Menu Box End */}
          </div>
          {/* Mobile Drawer Menu List End */}
        </div>

        <div
          className={style.MobileDrawer_transpratnt_part}
          onClick={handelDrawerClose}
        ></div>
      </div>
    </>
  );
}
