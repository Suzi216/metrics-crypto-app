import { useSelector } from 'react-redux';
import './detail.css';

const Detail = () => {
  const oneCoin = useSelector((state) => state.covid);

  return (
    <div className="table-container">
      <div><h1 className="header">Crypto Metrics</h1></div>
      <table>
        <div className="container-coin">
          {oneCoin.map((coin) => (
            <tr key={coin.baseSymbol} className="row">
              <td>
                {coin.baseId}
              </td>
              <td>
                {coin.baseSymbol}
              </td>
              <td className="price">
                {coin.priceUsd}
              </td>
              <td>
                {coin.exchangeId}
              </td>
              <td>
                {coin.priceUsd}
              </td>
              <td>
                {coin.quoteSymbol}
              </td>

            </tr>
          ))}
        </div>
      </table>
    </div>

  );
};

export default Detail;
