import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { displayCoin } from '../redux/home/home';
import './Home.css';

const Coin = () => {
  const allcoin = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allcoin.length) dispatch(displayCoin());
  }, []);
  console.log(allcoin);
  return (
    <div className="table-container">
      <div><h1 className="header">Crypto Metrics</h1></div>
      <table>
        <div className="coin-container">
          {allcoin.map((coin) => (
            <tr className={coin.baseId} key={uuidv4()}>
              <td>
                <p>
                  <i className="arrow right" />
                </p>
              </td>
              <td>
                {coin.baseSymbol}
              </td>
              <td className="price">
                {coin.priceUsd}
              </td>

            </tr>
          ))}
        </div>
      </table>
    </div>
  );
};

export default Coin;
