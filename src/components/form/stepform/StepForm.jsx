import React from "react";
import RadioButton from "../../ui/radio/RadioButton";
import cl from "./StepForm.module.css";

const StepForm = ({ question }) => {
  return (
    <div className={cl.step}>
      <h3>{question}</h3>

      <div>
        <RadioButton title="кнопка" />
      </div>
    </div>
  );
};

export default StepForm;
