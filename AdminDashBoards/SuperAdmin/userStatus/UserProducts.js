import React, { useEffect } from "react";
import style from "../css/Alluser.module.css";
import UserProductCard from "./UserProductCard";
import { useRouter } from "next/router";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import { useContext } from "react";
import { getCookies } from "../../../Actions/auth";

export default function UserProducts() {
  const token = getCookies();
  const { getuserProducts, userProducts } = useContext(ProductContext);
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    getuserProducts(token, _id);
  }, [_id]);

  return (
    <>
      <div className={style.UserProducts_conatiner}>
        <UserProductCard />
      </div>
    </>
  );
}
