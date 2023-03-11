import React, { useState } from "react";
import style from "./css/SingUp.module.css";
import Steper from "./Steper";

export default function SingUp() {
  const [formSteps, setformSteps] = useState(1);

  const handelNext = () => {
    setformSteps((cur) => {
      return (cur = cur + 1);
    });
  };

  const handelSubmit = () => {
    // form submit
  };

  const renderButton = () => {
    if (formSteps === 1 || formSteps === 2) {
      return (
        <>
          <div className={style.form_btn_full_width_Box} onClick={handelNext}>
            Next
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={style.form_btn_full_width_Box} onClick={handelSubmit}>
            Submit Form
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
            <form className={style.SingUp_form}>
              {formSteps === 1 && (
                <>
                  <div>
                    <div className={style.form_input_Filed_Box}>
                      <div className={style.form_lableBox}>
                        <label>Enter Your Name</label>
                      </div>
                      <div className={style.form_inputBox}>
                        <input type="text" placeholder="Enter Your Name" />
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

                    <div className={style.form_input_Filed_Box}>
                      <div className={style.form_lableBox}>
                        <label>Confirm Password</label>
                      </div>
                      <div className={style.form_inputBox}>
                        <input
                          type="text"
                          placeholder="confirm Your Password"
                        />
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
                      <input type="text" />
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
        </div>
        {/* form box end */}
      </div>
    </>
  );
}
