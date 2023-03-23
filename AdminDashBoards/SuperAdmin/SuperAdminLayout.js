import React from "react";
// import style from '../UserAdmin/css/UserDashBoard.module.css"';
import style from "../../AdminDashBoards/UserAdmin/css/UserDashBoard.module.css";
import LeftOptionBar from "../UserAdmin/LeftOptionBar";
import UserDashBoardNavBar from "../../AdminDashBoards/UserAdmin/UserDashBoardNavBar";
export default function SuperAdminLayout({ children }) {
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
