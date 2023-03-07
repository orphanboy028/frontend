import React, { useState } from "react";
import style from "./css/MobileDrawer.module.css";
import { useContext } from "react";
import { MyContext } from "../../ContaxtApi/ContextApi";
import Image from "next/image";
import userAvtar from "../../public/user-avatar.png";
import EditIcon from "../../public/edit.png";

export default function MobileDrawer() {
  const { isOpen, setisOpen } = useContext(MyContext);

  // close Mobile Menu Drawer
  const handelDrawerClose = () => {
    setisOpen(false);
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
        </div>
        <div
          className={style.MobileDrawer_transpratnt_part}
          onClick={handelDrawerClose}
        ></div>
      </div>
    </>
  );
}
