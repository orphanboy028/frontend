import React from "react";
import AdminPrivate from "../../AdminDashBoards/SuperAdmin/AdminPrivate";
import AllUser from "../../AdminDashBoards/SuperAdmin/AllUser";
import SuperAdminLayout from "../../AdminDashBoards/SuperAdmin/SuperAdminLayout";

export default function SuperAdmin() {
  return (
    <div>
      <AdminPrivate>
        <SuperAdminLayout>
          <AllUser />
        </SuperAdminLayout>
      </AdminPrivate>
    </div>
  );
}
