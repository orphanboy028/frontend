import React from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import style from "./css/UseProfile.module.css";
import logo from "../../../public/logo.png";
import edit from "../../../public/edit.png";
import Link from "next/link";
import Image from "next/image";

export default function UpdateProfileComponent() {
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
                      <input type={"text"} value="Pawan Chauhan" />
                    </div>
                  </div>

                  <div className={style.UpdateProfileComponent_name_inputBox}>
                    <div className={style.UpdateProfileComponent_filed_label}>
                      Designation
                    </div>
                    <div className={style.UpdateProfileComponent_filed_input}>
                      <input type={"text"} value="MARKETING HEAD" />
                    </div>
                  </div>
                </div>
                {/* Input filed End */}

                <div className={style.UpdateProfileComponent_image_Container}>
                  <Image src={logo} alt="company Logo" width={100} />
                </div>
              </div>
            </div>
            <div className={style.UpdateProfileComponent_saveBtnBox}>
              <button>Save</button>
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
