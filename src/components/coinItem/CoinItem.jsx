import React from "react";

import s from "./CoinItem.module.css";

const CoinItem = (props) => {
  return (
    <div className={s.coinRow}>
      <p>{props.coins.market_cap_rank}</p>
      <div className={s.imgSymbol}>
        <img src={props.coins.image} alt="img" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className={s.hideMobile}>
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className={s.hideMobile}>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
