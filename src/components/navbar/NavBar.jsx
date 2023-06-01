import React from "react";
import cl from "./Navbar.module.css";

const NavBar = ({ children }) => {
  return <div className={cl.wrapper}>{children}</div>;
};

export default NavBar;
