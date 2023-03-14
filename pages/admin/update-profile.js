import React from "react";
import Private from "../../AdminDashBoards/UserAdmin/Private";
import UpdateProfileComponent from "../../AdminDashBoards/UserAdmin/userProfile/UpdateProfileComponent";

export default function UpdateProfile() {
  return (
    <>
      <Private>
        <div>
          <UpdateProfileComponent />
        </div>
      </Private>
    </>
  );
}
