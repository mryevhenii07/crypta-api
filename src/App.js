import React, { useState, useEffect } from "react";
import axios from "axios";

import Coins from "./components/coins/Coins";
import NavBar from "./components/navBar/NavBar";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      )
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(coins);
  return (
    <div className="App">
      <NavBar />
      <Coins coins={coins} />
    </div>
  );
}

export default App;