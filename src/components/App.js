import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(1);

  // API mount call configuration

  const fetchData = () => {
    axios
      .get("https://www.bitstamp.net/api/v2/ticker/btcusd")
      .then((res) => {
        setData(res.data.last);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Using useEffect to call the API once mounted and set the data

  useEffect(() => {
    fetchData();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setData(e.target.value * data);
  };

  const handlePriceChange = (e) => {
    setData(e.target.value);
    setAmount (amount * e.target.value);
  };

  console.log(data);

  return (
    <div>
      <input onChange={handleAmountChange} value={amount}></input>
      <span>BTC</span>
      <input onChange={handlePriceChange} value={data}></input>
      <span>USD</span>
    </div>
  );
};

export default App;
