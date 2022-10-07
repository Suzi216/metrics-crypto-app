import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Coinsdisplay from './coins';
import { displayCoin } from '../redux/home/home';
import './Home.css';

const Coin = () => {
  const allcoin = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCoin());
  }, []);

  return (
    <div className="table-container">
      <div><h1 className="header">Crypto Metrics</h1></div>
      <table>
        <div className="coin-container">
          {allcoin.map((coin) => (
            <Coinsdisplay
              key={uuidv4()}
              baseId={coin.baseId}
              baseSymbol={coin.baseSymbol}
              priceUsd={coin.priceUsd}
            />
          ))}
        </div>
      </table>
    </div>
  );
};

export default Coin;
