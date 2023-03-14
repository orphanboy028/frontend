import Link from "next/link";
import React from "react";
import style from "./css/SingUp.module.css";
import googlePic from "../../public/google.png";
import LinkidinPic from "../../public/linkedin.png";
import facebookPic from "../../public/facebook.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { loginAccount, authenticate } from "../../Actions/auth";
import Router from "next/router";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (formdata) => {
    try {
      const jsonData = JSON.stringify(formdata);
      const result = await loginAccount(formdata);

      const { data } = result;
      // console.log(data.user);
      authenticate(data, () => {
        Router.push("/admin");
      });
    } catch (error) {
      console.log(error);
    }
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
              <form
                className={style.SingUp_form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <div className={style.form_input_Filed_Box}>
                    <div className={style.form_lableBox}>
                      <label>Email</label>
                    </div>
                    <div className={style.form_inputBox}>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Email"
                        {...register("email", {
                          required: "valaid Email is Required",
                        })}
                      />
                    </div>
                    <div className={style.input_ErrorBox}>
                      <small id="emailHelp" className={style.input_Error}>
                        {errors.email && <p>{errors.email.message}</p>}
                      </small>
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
                        id="password"
                        name="password"
                        aria-describedby="passwordHelp"
                        {...register("password", {
                          required: "password is required",
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  {" "}
                  <div className={style.form_btn_full_width_Box}>
                    <button> Login </button>
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
