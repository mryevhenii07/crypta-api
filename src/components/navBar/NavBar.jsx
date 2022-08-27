import React from "react";
import { FaCoins } from "react-icons/fa";

import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={s.navBar}>
        <FaCoins className={s.icon} />
        <h1>
          Coin <span className={s.purple}>Search</span>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
