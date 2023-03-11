import React from "react";
import style from "./css/SingUp.module.css";

export default function Steper({ step }) {
  const steps = ["Verification", "Information", "Completed"];

  const renderSteps = () => {
    return steps.map((el, i) => {
      return (
        <div
          key={i}
          className={`${style.stepBox} ${
            step > i + 1 ? style.stepBoxActive : "none"
          }`}
        >
          <div
            className={`${style.steperNumber}  ${
              step >= i + 1 ? style.active : "none"
            }`}
          >
            {i + 1}
          </div>
          <div>{el}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <div className={`${style.steperBox}`}>{renderSteps()}</div>
      </div>
    </>
  );
}
