import React from "react";
import cl from "./ResultForm.module.css";

const ResultForm = () => {
  return (
    <div className={cl.conteiner}>
      <div className={cl.circle}>
        <div className={cl.icon__wrapper}>
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.625 1.875L7.375 14.125L1.25 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h3>Отлично, спасибо!</h3>
      <span className={cl.description}>
        Мы отправили подборку вам на почту. Если подборка не приходит — проверьте спам, возможно, она попала туда.
      </span>
    </div>
  );
};

export default ResultForm;
