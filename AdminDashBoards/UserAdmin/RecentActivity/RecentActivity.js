import React from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import style from "./css/RecentActivity.module.css";
import RecentSearch from "./RecentSearch";

export default function RecentActivityComponent() {
  return (
    <>
      <UserAdminLayOut>
        <div className={style.RecentActivityComponent_main_container}>
          <div className={style.RecentActivityComponent_Result_container}>
            <div className={style.Result_container_Title}>
              <h2>Recent Search</h2>
            </div>
            <div className={style.Result_contantBox}>
              <RecentSearch />
            </div>
          </div>
          <div className={style.RecentActivityComponent_stats_container}>
            Stats
          </div>
        </div>
      </UserAdminLayOut>
    </>
  );
}
