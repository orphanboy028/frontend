import React from "react";
import AdminPrivate from "../../AdminDashBoards/SuperAdmin/AdminPrivate";
import AllUser from "../../AdminDashBoards/SuperAdmin/AllUser";
import SuperAdminLayout from "../../AdminDashBoards/SuperAdmin/SuperAdminLayout";
import UserStatus from "../../AdminDashBoards/SuperAdmin/userStatus/UserStatus";

export default function UserProfileStatus() {
  return (
    <div>
      <AdminPrivate>
        <SuperAdminLayout>
          <UserStatus />
        </SuperAdminLayout>
      </AdminPrivate>
    </div>
  );
}
