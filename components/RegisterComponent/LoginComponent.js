import Link from "next/link";
import React from "react";
import style from "./css/SingUp.module.css";
import googlePic from "../../public/google.png";
import LinkidinPic from "../../public/linkedin.png";
import facebookPic from "../../public/facebook.png";
import Image from "next/image";

export default function Login() {
  const handelSubmit = () => {
    // form submit
  };
  return (
    <>
      <div>
        <div className={style.SingUp_main_container}>
          {/* form box start */}
          <div className={style.authForm_container}>
            <div className={style.authForm_Title}>
              <h2>Login</h2>
            </div>

            {/* form start */}
            <div className={style.form_Box}>
              <form className={style.SingUp_form}>
                <div>
                  <div className={style.form_input_Filed_Box}>
                    <div className={style.form_lableBox}>
                      <label>Email</label>
                    </div>
                    <div className={style.form_inputBox}>
                      <input
                        type="text"
                        placeholder="Enter Your Register Email"
                      />
                    </div>
                  </div>

                  <div className={style.form_input_Filed_Box}>
                    <div className={style.form_lableBox}>
                      <label>Password</label>
                    </div>
                    <div className={style.form_inputBox}>
                      <input
                        type="text"
                        placeholder="Paaword(8-20 characters)"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  {" "}
                  <div
                    className={style.form_btn_full_width_Box}
                    onClick={handelSubmit}
                  >
                    Login
                  </div>
                </div>
              </form>
            </div>
            <div className={style.Login_footer}>
              <div className={style.login_page_link}>
                <div>Forgot your password?</div>
                <div>
                  New User?{" "}
                  <Link href={"register"}>
                    {" "}
                    <span>Join Free</span>{" "}
                  </Link>{" "}
                </div>
              </div>

              <div className={style.social_media_loginBox}>
                <p>Sign in with</p>
                <div className={style.socialMedia_LinkBox}>
                  <Image
                    src={googlePic}
                    alt="google pic"
                    width={20}
                    className={style.social_link_image}
                  />
                  <Image
                    src={facebookPic}
                    alt="google pic"
                    width={20}
                    className={style.social_link_image}
                  />
                  <Image
                    src={LinkidinPic}
                    alt="google pic"
                    width={20}
                    className={style.social_link_image}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* form box end */}
        </div>
      </div>
    </>
  );
}
