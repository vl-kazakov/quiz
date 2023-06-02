import React from "react";
import cl from "./Button.module.css";

const Button = ({ title, onClick, step, disabled }) => {
  return title === "Назад" ? (
    <button onClick={onClick} disabled={disabled} className={`${cl.button} ${cl.light}`}>
      <div className={cl.iconwrapper} style={{ color: "black", width: "10px", height: "5px" }}>
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.5 11.5L1.5 6.5L6.5 1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={cl.text_dark}>{title}</span>
    </button>
  ) : (
    <button onClick={() => onClick(step)} disabled={disabled} className={`${cl.button} ${cl.dark}`}>
      <span className={cl.text}>{title}</span>
      <div className={cl.iconwrapper} style={{ color: "white", width: "10px", height: "5px" }}>
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 1.5L6.5 6.5L1.5 11.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
