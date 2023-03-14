import React from "react";
import Private from "../../AdminDashBoards/UserAdmin/Private";
import UserAdminLayOut from "../../AdminDashBoards/UserAdmin/UserAdminLayOut";
import UserProfile from "../../AdminDashBoards/UserAdmin/userProfile/UserProfile";

export default function AdminDashBoard() {
  return (
    <>
      <Private>
        <div>
          <UserProfile />
        </div>
      </Private>
    </>
  );
}
