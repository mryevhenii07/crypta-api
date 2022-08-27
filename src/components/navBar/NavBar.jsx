import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Link to="/">
      <div className={s.navBar}>
        <FaCoins className={s.icon} />
        <h1>
          Coin <span className={s.purple}>Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;
