import React from "react";
import Input from "../../ui/input/Input";
import cl from "./ContactForm.module.css";
import Button from "../../ui/button/Button";

const ContactForm = ({ question, value }) => {
  return (
    <div className={cl.contform}>
      <h3>{question}</h3>
      <span className={cl.cont__text}>Оставьте свои контакты, чтобы мы могли вам ее отправить</span>
      <Input type="text" placeholder="Как Вас зовут" />
      <Input type="tel" placeholder="Номер телефона" />
      <Input type="email" placeholder="Email" />
      <Button
        title="Получить подборку"
        onClick={() => {
          value(true);
        }}
      />
    </div>
  );
};

export default ContactForm;
