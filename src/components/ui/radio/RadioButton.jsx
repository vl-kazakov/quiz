import React from "react";
import cl from "./RadioButton.module.css";

const RadioButton = ({ title }) => {
  return (
    <div class={cl.radio__btn}>
      <label>
        <span>{title}</span>
        <input class={cl.input__btn} type="radio"></input>
      </label>
    </div>
  );
};

export default RadioButton;
