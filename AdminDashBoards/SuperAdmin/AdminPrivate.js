import Router from "next/router";
import React, { useEffect } from "react";
import { isAuth } from "../../Actions/auth";

export default function AdminPrivate({ children }) {
  useEffect(() => {
    if (!isAuth() && isAuth().role !== "admin") {
      Router.push("/");
    }
  }, []);

  return <>{children}</>;
}
