import React from "react";
import style from "./css/UserDashBoard.module.css";
import LeftOptionBar from "./LeftOptionBar";
import UserDashBoardNavBar from "./UserDashBoardNavBar";

export default function UserAdminLayOut({ children }) {
  return (
    <div className={style.UserAdminLayOut_main_container}>
      <div className={style.UserAdminLayOut_featureSideBar}>
        <LeftOptionBar />
      </div>
      <div className={style.UserAdminLayOut_Center_container}>
        <div className={style.LeftOptionBar_NavBar}>
          <UserDashBoardNavBar />
        </div>
        <div className={style.UserAdminLayOut_children_Componet_container}>
          {children}
        </div>
      </div>
    </div>
  );
}
