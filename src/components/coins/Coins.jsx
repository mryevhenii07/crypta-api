import React from "react";

import CoinItem from "../coinItem/CoinItem";
import s from "./Coins.module.css";

const Coins = (props) => {
  return (
    <div className={s.container}>
      <div>
        <div className={s.heading}>
          <p>#</p>
          <p className={s.coinName}>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className={s.hideMobile}>Volume</p>
          <p className={s.hideMobile}>Mkt Cap</p>
        </div>
        {props.coins.map((coins) => (
          <CoinItem coins={coins} key={coins.id} />
        ))}
      </div>
    </div>
  );
};

export default Coins;
