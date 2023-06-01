import React from "react";
import RadioButton from "../../ui/radio/RadioButton";
import { stepsData } from "../../../data/data";
import cl from "./StepForm.module.css";

const StepForm = () => {
  const data = stepsData[0].answer;

  return (
    <div className={cl.step}>
      <div>
        {data.map((el) => {
          return <RadioButton title={el} />;
        })}
      </div>
    </div>
  );
};

export default StepForm;
