import React, { useState } from "react";
import cl from "./QuizForm.module.css";
import NavBar from "../navbar/NavBar";
import Button from "../ui/button/Button";
// import { stepsData } from "../../data/data.js";
import StepForm from "./stepform/StepForm";
import ContactForm from "./contactform/ContactForm";
import ResultForm from "./resultform/ResultForm";

const questions = [
  {
    id: 1,
    question: "Для кого вы ищете учебное заведение?",
    answer: ["Коллеге", "Супругу/супруге", "Родственнику", "Ребенку", "Другое"],
  },
  {
    id: 2,
    question: "В каком городе планируете поступать?",
    answer: ["Санкт-Петербург", "Москва", "Новосибирск", "Нижний новгород", "Краснодар"],
  },
  {
    id: 3,
    question: "Какое образование уже есть?",
    answer: ["9 классов", "11 классов", "Училище", "Колледж/техникум", "Неоконченное высшее"],
  },
  {
    id: 4,
    question: "Куда планируете поступать?",
    answer: ["Вуз", "Училище", "Колледж/техникум"],
  },
  {
    id: 5,
    question: "Какую форму обучения предпочитаете?",
    answer: ["Заочную", "Очную", "Дистанционную"],
  },
  {
    id: 6,
    question: "Рассматриваете платное обучение?",
    answer: ["Нет, только бюджет", "Да, планирую учиться платно", "Возможны оба варианта"],
  },
  {
    id: 7,
    question: "Какая специальность интересует?",
    answer: ["Экономика", "Философия", "Социология", "Юриспруденция", "Строительство", "Медицина"],
  },
  {
    id: 8,
    question: "Как скоро планируете поступать?",
    answer: ["Как можно быстрее", "Месяц", "Квартал", "Полгода", "Год"],
  },
  {
    id: 9,
    question: "Отлично, ваша подборка готова!",
    answer: [],
  },
];

const QuizForm = () => {
  const [step, setStep] = useState(0);
  const [quizOver, setQuizOver] = useState(false);

  const question = questions[step];

  const nextStep = () => {
    quizOver ? setQuizOver(true) : setStep(step + 1);
  };
  const prevStep = () => {
    setQuizOver(false);
    setStep(step - 1);
  };

  console.log(step, question.id, questions.length);
  return (
    <div className={cl.container}>
      {!quizOver ? (
        <>
          <span className={cl.text}>
            Шаг {question.id}/{questions.length}
          </span>
          {question.id < questions.length ? (
            <>
              <StepForm step={step} question={question.question} />
              <NavBar>
                <Button onClick={prevStep} title={"Назад"} disabled={question.id === 1 ? true : false} />
                <Button onClick={nextStep} title={"Далее"} disabled={question.id === questions.length ? true : false} />
              </NavBar>
            </>
          ) : (
            <ContactForm question={question.question} value={setQuizOver} />
          )}
        </>
      ) : (
        <ResultForm />
      )}
    </div>
  );
};
// !quizOver ?
export default QuizForm;
