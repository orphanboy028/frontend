import React from "react";
import AdminPrivate from "../../AdminDashBoards/SuperAdmin/AdminPrivate";
import AllUser from "../../AdminDashBoards/SuperAdmin/AllUser";
import EnquiresComponnt from "../../AdminDashBoards/SuperAdmin/enquires/EnquiresComponnt";
import SuperAdminLayout from "../../AdminDashBoards/SuperAdmin/SuperAdminLayout";

export default function Enquires() {
  return (
    <div>
      <AdminPrivate>
        <SuperAdminLayout>
          <EnquiresComponnt />
        </SuperAdminLayout>
      </AdminPrivate>
    </div>
  );
}
