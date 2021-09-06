import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-coin-app">
      <div className="crypto-coin-search">
        <h1 className="crypto-coin-text">Search a Crypto Currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="crypto-coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
