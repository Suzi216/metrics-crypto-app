import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './detail.css';

const Detail = () => {
  const coins = useSelector((state) => state.covid);
  const oneCoin = coins.filter((coin) => (coin.show === true));

  return (
    <div className="table-container">
      <Link to="/">
        <p className="arrow-container"><i className="arrows left" /></p>
      </Link>
      <div><h1 className="header">Crypto Metrics</h1></div>
      <table>
        <div className="container-coins">

          {oneCoin.map((coin) => (
            <tr key={coin.baseSymbol} className="row">
              <td>
                Coin name:
                {' '}
                {coin.baseSymbol}
              </td>
              <td>
                Base id:
                {' '}
                {coin.baseId}
              </td>
              <td className="price">
                Price:
                {' '}
                {coin.priceUsd}
              </td>
              <td>
                Market name:
                {' '}
                {coin.exchangeId}
              </td>
              <td>
                MarketPrice:
                {coin.priceUsd}
              </td>
              <td>
                Abbrevation:
                {' '}
                {coin.quoteSymbol}
              </td>
              <td>
                Rank:
                {' '}
                {coin.rank}
              </td>

            </tr>
          ))}
        </div>
      </table>
    </div>

  );
};

export default Detail;
