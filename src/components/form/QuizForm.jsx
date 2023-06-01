import React from "react";
import cl from "./QuizForm.module.css";
import NavBar from "../navbar/NavBar";
import Button from "../ui/button/Button";
import { stepsData } from "../../data/data.js";
import StepForm from "./stepform/StepForm";

const QuizForm = () => {
  console.log(stepsData);
  return (
    <div className={cl.container}>
      <span className={cl.text}>Шаг</span>
      <StepForm />

      <NavBar>
        <Button title={"Назад"} />
        <Button title={"Далее"} />
      </NavBar>
    </div>
  );
};

export default QuizForm;
