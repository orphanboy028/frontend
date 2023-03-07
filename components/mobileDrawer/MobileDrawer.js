import React, { useState } from "react";
import style from "./css/MobileDrawer.module.css";
import { useContext } from "react";
import { MyContext } from "../../ContaxtApi/ContextApi";

export default function MobileDrawer() {
  const { isOpen, setisOpen } = useContext(MyContext);

  // close Mobile Menu Drawer
  const handelDrawerClose = () => {
    setisOpen(false);
  };
  return (
    <>
      <div className={style.MobileDrawer_container}>
        <div className={style.MobileDrawer_content_part}>Content part</div>
        <div
          className={style.MobileDrawer_transpratnt_part}
          onClick={handelDrawerClose}
        ></div>
      </div>
    </>
  );
}
