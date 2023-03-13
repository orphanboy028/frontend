import Link from "next/link";
import React, { useState } from "react";
import style from "./css/SingUp.module.css";
import Steper from "./Steper";
import { useForm } from "react-hook-form";
import { singUpNewAccount } from "../../Actions/auth";

export default function SingUp() {
  const [formSteps, setformSteps] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  // Triger on When user click on SingUp Btn
  const pass = watch("password");
  const handelNext = () => {
    setformSteps((cur) => {
      return (cur = cur + 1);
    });
  };

  const onSubmit = (data) => {
    const jsonData = JSON.stringify(data);
    singUpNewAccount(data);
  };

  const renderButton = () => {
    if (formSteps === 1 || formSteps === 2) {
      return (
        <>
          <div className={style.form_btn_full_width_Box} onClick={handelNext}>
            <button>Next</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={style.form_btn_full_width_Box}>
            <button>Submit</button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className={style.SingUp_main_container}>
        {/* form box start */}
        <div className={style.authForm_container}>
          <div className={style.authForm_Title}>
            <h2>Create Account</h2>
          </div>
          <div className={style.formSteps_Box}>
            <Steper step={formSteps} />
          </div>

          {/* form start */}
          <div className={style.form_Box}>
            <form
              className={style.SingUp_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              {formSteps === 1 && (
                <>
                  <div>
                    <div className={style.form_input_Filed_Box}>
                      <div className={style.form_lableBox}>
                        <label>Enter Your Name *</label>
                      </div>
                      <div className={style.form_inputBox}>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          name="name"
                          id="name"
                          aria-describedby="NameHelp"
                          {...register("name", {
                            required: "Name is Required",
                            minLength: {
                              value: 3,
                              message:
                                "At leas 3 Cracters Required in Full Name",
                            },
                            maxLength: {
                              value: 20,
                              message:
                                "Less Then 20 careaters are allow in full name",
                            },
                          })}
                        />
                      </div>
                      <div className={style.input_ErrorBox}>
                        <small id="NameHelp" className={style.input_Error}>
                          {errors.name && <p>{errors.name.message}</p>}
                        </small>
                      </div>
                    </div>
                    <div className={style.form_input_Filed_Box}>
                      <div className={style.form_lableBox}>
                        <label>Mobile Number</label>
                      </div>
                      <div className={style.form_inputBox}>
                        <input
                          type="text"
                          placeholder="Enter Your Mobile Number"
                          name="mobileNumber"
                          aria-describedby="MobileHelp"
                          id="mobileNumber"
                          {...register("mobileNumber", {
                            required: "Name is Required",
                            pattern: {
                              value: /^\d+$/,
                              message: "please Enter only digits",
                            },
                            minLength: {
                              value: 10,
                              message: "10 Digit Mobile Number Required",
                            },
                            maxLength: {
                              value: 10,
                              message: "10 Digit Mobile Number Required",
                            },
                          })}
                        />
                      </div>
                      <div className={style.input_ErrorBox}>
                        <small id="MobileHelp" className={style.input_Error}>
                          {errors.mobileNumber && (
                            <p>{errors.mobileNumber.message}</p>
                          )}
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
                            required: true,
                            minLength: {
                              value: 8,
                              message:
                                "At leas 8 Cracters Required in password",
                            },
                          })}
                        />
                      </div>
                      <div className={style.input_ErrorBox}>
                        <small id="passwordHelp" className={style.input_Error}>
                          {errors.password && <p>{errors.password.message}</p>}
                        </small>
                      </div>
                    </div>

                    <div className={style.form_input_Filed_Box}>
                      <div className={style.form_lableBox}>
                        <label>Confirm Password</label>
                      </div>
                      <div className={style.form_inputBox}>
                        <input
                          type="text"
                          placeholder="confirm Your Password"
                          id="passwordConfirm"
                          name="passwordConfirm"
                          aria-describedby="passwordConfirmHelp"
                          {...register("passwordConfirm", {
                            required: "plase Re-Enter your same password",
                            validate: (value) => {
                              return (
                                value === pass ||
                                "Your Confiram Password didn't match with password"
                              );
                            },
                          })}
                        />
                      </div>
                      <div className={style.input_ErrorBox}>
                        <small
                          id="passwordConfirmHelp"
                          className={style.input_Error}
                        >
                          {errors.passwordConfirm && (
                            <p>{errors.passwordConfirm.message}</p>
                          )}
                        </small>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {formSteps == 2 && (
                <>
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

                  <div className={style.form_checkBox_Filed_Box}>
                    <div className={style.form_CheckBox_Box}>
                      <input type={"checkbox"} />
                    </div>
                    <div className={style.form_checkBox_text}>
                      <p>I agree to the User Agreement and the Privacy Polcy</p>
                    </div>
                  </div>
                </>
              )}

              {formSteps === 3 && (
                <>
                  <div className={style.form_input_Filed_Box}>
                    <div className={style.form_lableBox}>
                      <label>Enter Your OTP</label>
                    </div>
                    <div className={style.form_inputBox}>
                      <input type="text" placeholder="Enter Your OTP)" />
                    </div>
                  </div>
                </>
              )}

              <div>{renderButton()}</div>
            </form>
          </div>
          <div className={style.authForm_footer}>
            <span>You already have an account please </span>{" "}
            <Link href={"/login"}>
              <span className={style.authForm_page_link}>sing In</span>{" "}
            </Link>
          </div>
        </div>
        {/* form box end */}
      </div>
    </>
  );
}
