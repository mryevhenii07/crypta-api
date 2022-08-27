import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMpurify from "dompurify";

import s from "./Coin.module.css";

const Coin = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(coin?.market_data?.current_price);
  return (
    <div>
      <div className={s.coinContainer}>
        <div className={s.content}>
          <h1>{coin.name}</h1>
        </div>
        <div className={s.content}>
          <div className={s.rank}>
            <span className={s.rankBtn}>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className={s.info}>
            <div className={s.coinHeading}>
              {coin.image ? <img src={coin.image.small} alt="img" /> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className={s.coinPrice}>
              {coin.market_data?.current_price ? (
                <p> {coin?.market_data.current_price.usd}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className={s.content}>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ? coin.market_data.price_change_percentage_1h_in_currency
                        .usd
                    : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ? coin.market_data.price_change_percentage_24h_in_currency
                        .usd
                    : null}
                </td>

                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ? coin.market_data.price_change_percentage_7d_in_currency
                        .usd
                    : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ? coin.market_data.price_change_percentage_14d_in_currency
                        .usd
                    : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ? coin.market_data.price_change_percentage_30d_in_currency
                        .usd
                    : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ? coin.market_data.price_change_percentage_1y_in_currency
                        .usd
                    : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.content}>
          <div className={s.stats}>
            <div className={s.left}>
              <div className={s.row}>
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24 ? (
                  <p>{coin.market_data.low_24.usd}</p>
                ) : null}
                11111
              </div>
              <div className={s.row}>
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>{coin.market_data.high_24h.usd}</p>
                ) : null}
              </div>
            </div>
            <div className={s.right}>
              <div className={s.row}>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>{coin.market_data.market_cap.usd}</p>
                ) : null}
              </div>
              <div className={s.row}>
                <h4>Circulating</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.about}>
            <h3>About</h3>

            <p
              dangerouslySetInnerHTML={{
                __html: DOMpurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
