import React, { use, useEffect } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import style from "./css/UseProfile.module.css";
import logo from "../../../public/logo.png";
import edit from "../../../public/edit.png";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../../../ContaxtApi/UserContaxApi";
import { updateProfile } from "../.././../Actions/userAction";
import { getCookies } from "../../../Actions/auth";

export default function UpdateProfileComponent() {
  const token = getCookies();
  const { user, setuser, getUserDetails } = useContext(UserContext);

  useEffect(() => {
    getUserDetails(token);
  }, []);

  const handelChange = (event) => {
    setuser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = async () => {
    try {
      const result = await updateProfile(token, user);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UserAdminLayOut>
        <div className={style.UpdateProfileComponent_main_container}>
          <div className={style.UpdateProfileComponent_result_container}>
            <div className={style.UpdateProfileComponent_Personal_info}>
              <div className={style.UpdateProfileComponent_headingBox}>
                <h2>Personal Information</h2>
              </div>
              <div className={style.UpdateProfileComponent_infoContainer}>
                {/* input filed start */}
                <div className={style.UpdateProfileComponent_info_inputBox}>
                  <div className={style.UpdateProfileComponent_name_inputBox}>
                    <div className={style.UpdateProfileComponent_filed_label}>
                      Name
                    </div>
                    <div className={style.UpdateProfileComponent_filed_input}>
                      <input
                        type={"text"}
                        value={user.name}
                        name="name"
                        onChange={(e) => handelChange(e)}
                      />
                    </div>
                  </div>

                  <div className={style.UpdateProfileComponent_name_inputBox}>
                    <div className={style.UpdateProfileComponent_filed_label}>
                      Designation
                    </div>
                    <div className={style.UpdateProfileComponent_filed_input}>
                      <input
                        type={"text"}
                        value={user.Designation}
                        name="Designation"
                        onChange={(e) => handelChange(e)}
                      />
                    </div>
                  </div>
                </div>
                {/* Input filed End */}

                <div className={style.UpdateProfileComponent_image_Container}>
                  <Image src={logo} alt="company Logo" width={100} />
                </div>
              </div>
              <div className={style.UpdateProfileComponent_saveBtnBox}>
                <button onClick={handelSubmit}>Save</button>
              </div>
            </div>

            <div className={style.updateProfile_contact_info}>
              <div className={style.UpdateProfileComponent_headingBox}>
                <h2>Contact Information</h2>
              </div>
              <div
                className={`${style.UserProfile_MobileNumberBox} ${style.boxpading}`}
              >
                <div className={style.mobileNumber_lable}>
                  <h2>Mobile Number</h2>
                </div>
                <div className={style.mobileNumberBox}>
                  <input
                    type={"text"}
                    value={user.mobileNumber}
                    name="mobileNumber"
                    onChange={(e) => handelChange(e)}
                  />
                </div>
              </div>

              <div
                className={`${style.UserProfile_MobileNumberBox} ${style.boxpading}`}
              >
                <div className={style.mobileNumber_lable}>
                  <h2>Primary Email :</h2>
                </div>
                <div className={style.mobileNumberBox}>
                  <input
                    type={"text"}
                    value={user.email}
                    name="email"
                    onChange={(e) => handelChange(e)}
                  />
                </div>
              </div>

              <div
                className={`${style.UserProfile_MobileNumberBox} ${style.boxpading}`}
              >
                <div className={style.mobileNumber_lable}>
                  <h2>Address :</h2>
                </div>
                <div className={style.mobileNumberBox}>
                  <input
                    type={"text"}
                    value={user.Address}
                    name="Address"
                    onChange={(e) => handelChange(e)}
                  />
                </div>
              </div>
              <div className={style.UpdateProfileComponent_saveBtnBox}>
                <button onClick={handelSubmit}>Save</button>
              </div>
            </div>

            <div className={style.updateProfile_contact_info}>
              <div className={style.UpdateProfileComponent_headingBox}>
                <h2>Company Information</h2>
              </div>
              <div
                className={`${style.UserProfile_MobileNumberBox} ${style.boxpading}`}
              >
                <div className={style.mobileNumber_lable}>
                  <h2>Company Name</h2>
                </div>
                <div className={style.mobileNumberBox}>
                  <input
                    type={"text"}
                    value={user.CompanyName}
                    name="CompanyName"
                    onChange={(e) => handelChange(e)}
                  />
                </div>
              </div>

              <div
                className={`${style.UserProfile_MobileNumberBox} ${style.boxpading}`}
              >
                <div className={style.mobileNumber_lable}>
                  <h2>GSTIN :</h2>
                </div>
                <div className={style.mobileNumberBox}>
                  <input
                    type={"text"}
                    value={user.GstNumber}
                    name="GstNumber"
                    onChange={(e) => handelChange(e)}
                  />
                </div>
              </div>

              <div
                className={`${style.UserProfile_MobileNumberBox} ${style.boxpading}`}
              >
                <div className={style.mobileNumber_lable}>
                  <h2>PAN</h2>
                </div>
                <div className={style.mobileNumberBox}>
                  <input
                    type={"text"}
                    value={user.PanNumber}
                    name="PanNumber"
                    onChange={(e) => handelChange(e)}
                  />
                </div>
              </div>
              <div className={style.UpdateProfileComponent_saveBtnBox}>
                <button onClick={handelSubmit}>Save</button>
              </div>
            </div>
          </div>
          <div className={style.UpdateProfileComponent_state_container}>
            stats
          </div>
        </div>
      </UserAdminLayOut>
    </div>
  );
}
