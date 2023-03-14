import React from "react";
import Private from "../../AdminDashBoards/UserAdmin/Private";
import RecentActivityComponent from "../../AdminDashBoards/UserAdmin/RecentActivity/RecentActivity";

export default function RecentActivity() {
  return (
    <>
      <Private>
        <div>
          <RecentActivityComponent />
        </div>
      </Private>
    </>
  );
}
