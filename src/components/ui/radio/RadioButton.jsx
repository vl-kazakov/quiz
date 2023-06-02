import React from "react";
import cl from "./RadioButton.module.css";

const RadioButton = ({ title }) => {
  return (
    <div className={cl.radio__btn}>
      <label>
        <span>{title}</span>
        <input className={cl.input__btn} type="radio"></input>
      </label>
    </div>
  );
};

export default RadioButton;
