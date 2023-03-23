import React from "react";
import UserProducts from "./UserProducts";
import style from "../css/Alluser.module.css";

export default function UserStatus() {
  return (
    <>
      <div className={style.UserStatus_main_Container}>
        <div>
          <UserProducts />
        </div>
      </div>
    </>
  );
}
