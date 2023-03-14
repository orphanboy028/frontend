import Router from "next/router";
import React, { useEffect } from "react";
import { isAuth } from "../../Actions/auth";

export default function Private({ children }) {
  useEffect(() => {
    if (!isAuth() && isAuth()?.role !== "user") {
      Router.push("/");
    }
  }, []);

  return <>{children}</>;
}
