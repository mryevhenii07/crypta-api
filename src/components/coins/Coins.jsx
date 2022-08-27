import React from "react";
import { Link } from "react-router-dom";

import CoinItem from "../coinItem/CoinItem";
import Coin from "../../routes/Coin";
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
        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
