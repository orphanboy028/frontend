import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import style from "./css/UseProfile.module.css";
import edit from "../../../public/edit.png";
import Link from "next/link";
import { getCookies } from "../../../Actions/auth";
import { useContext } from "react";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import pencil from "../../../public/pencil.png";

export default function UserProfile() {
  const token = getCookies();
  const { user, setuser, getUserDetails } = useContext(UserContext);

  useEffect(() => {
    getUserDetails(token);
  }, [user]);

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
                  <Image
                    src={`/company-logos/${user.photo}`}
                    alt="company Logo"
                    width={50}
                    height={50}
                  />
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
                      <Image src={pencil} width={20} alt="edit-icon" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={style.UserProfile_contact_informationBox}>
                <div className={style.UserProfile_section_TitleBox}>
                  <div>
                    <h2>Contact Information</h2>
                  </div>
                  <div className={style.UserProfile_edit_iconBox}>
                    <Link href={"admin/update-profile"}>
                      <Image src={pencil} width={20} alt="edit-icon" />
                    </Link>
                  </div>
                </div>
                <div className={style.UserProfile_MobileNumberBox}>
                  <div className={style.mobileNumber_lable}>
                    <h2>Mobile Number</h2>
                  </div>
                  <div className={style.mobileNumberBox}>
                    <h2>{user.mobileNumber}</h2>
                  </div>
                </div>

                <div className={style.UserProfile_MobileNumberBox}>
                  <div className={style.mobileNumber_lable}>
                    <h2>Primary Email :</h2>
                  </div>
                  <div className={style.mobileNumberBox}>
                    <h2>{user.email}</h2>
                  </div>
                </div>

                <div className={style.UserProfile_MobileNumberBox}>
                  <div className={style.mobileNumber_lable}>
                    <h2>Address :</h2>
                  </div>
                  <div className={style.mobileNumberBox}>
                    <h2>
                      {user.Address ? user.Address : "Update your address"}
                    </h2>
                  </div>
                </div>
              </div>

              <div className={style.UserProfile_contact_informationBox}>
                <div className={style.UserProfile_section_TitleBox}>
                  <diV>
                    <h2>Company Information</h2>
                  </diV>

                  <div className={style.UserProfile_edit_iconBox}>
                    <Link href={"admin/update-profile"}>
                      <Image src={pencil} width={20} alt="edit-icon" />
                    </Link>
                  </div>
                </div>
                <div className={style.UserProfile_MobileNumberBox}>
                  <div className={style.mobileNumber_lable}>
                    <h2>Company Name</h2>
                  </div>
                  <div className={style.mobileNumberBox}>
                    <h2>
                      {user.CompanyName
                        ? user.CompanyName
                        : "Update your Company Name"}
                    </h2>
                  </div>
                </div>

                <div className={style.UserProfile_MobileNumberBox}>
                  <div className={style.mobileNumber_lable}>
                    <h2>GSTIN :</h2>
                  </div>
                  <div className={style.mobileNumberBox}>
                    <h2>
                      {user.GstNumber
                        ? user.GstNumber
                        : "Update your GST Number"}
                    </h2>
                  </div>
                </div>

                <div className={style.UserProfile_MobileNumberBox}>
                  <div className={style.mobileNumber_lable}>
                    <h2>PAN</h2>
                  </div>
                  <div className={style.mobileNumberBox}>
                    <h2>
                      {user.PanNumber
                        ? user.PanNumber
                        : "Update your PAN Number"}
                    </h2>
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
