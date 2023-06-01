import React from "react";
import "./MainWrapper.css";

const MainWrapper = ({ children }) => {
  return <div className="layout-wrapper">{children}</div>;
};

export default MainWrapper;
