import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import style from "./css/UseProfile.module.css";
import logo from "../../../public/logo.png";
import edit from "../../../public/edit.png";
import Link from "next/link";
import { getUser } from "../../../Actions/userAction";
import { getCookies } from "../../../Actions/auth";

export default function UserProfile() {
  const token = getCookies();
  const [user, setuser] = useState({
    name: "",
    mobileNumber: "",
    email: "",
  });

  useEffect(() => {
    console.log("page loaded");
    getUserDetails();
  });

  const getUserDetails = async () => {
    try {
      const result = await getUser(token);
      console.log(result.data.me);
      setuser(result.data.me);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserAdminLayOut>
        <div className={style.UserProfile_man_container}>
          <div className={style.UserProfile_result_container}>
            <div className={style.UserProfile_heading_box}>
              <h2> User Details</h2>
            </div>

            <div className={style.UserProfile_info_container}>
              <div className={style.UserProfile_basic_info}>
                <div className={style.UserProfile_company_logo}>
                  <Image src={logo} alt="company Logo" width={50} />
                </div>
                <div className={style.UserProfile_info}>
                  <div>
                    <span>{user.name} </span> <span>- Marketng Head</span>
                  </div>
                  <div>
                    <span>Gurugram, </span> <span>Haryana </span>{" "}
                  </div>
                </div>
                <div className={style.UserProfile_edit_iconBox}>
                  <div className={style.UserProfile_edit_box}>
                    <Link href={"admin/update-profile"}>
                      <Image src={edit} width={25} alt="edit icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>stats</div>
        </div>
      </UserAdminLayOut>
    </>
  );
}
