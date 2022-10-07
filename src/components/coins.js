// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showdetail } from '../redux/home/home';
import './Home.css';

const Coinsdisplay = (props) => {
  const {
    baseId, baseSymbol, priceUsd,
  } = props;
  const allcoin = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(showdetail(baseSymbol));
  };

  console.log(allcoin);

  return (
    <>
      <tr className={baseId}>
        <td>
          <Link to={`/detail/:${baseSymbol}`}>
            <p className="arrow-container">
              {' '}
              <i role="button" label="but" tabIndex={0} onClick={clickHandler} className="arrow right" />
            </p>
          </Link>
        </td>
        <td>
          {baseSymbol}
        </td>
        <td className="price">
          {priceUsd}
        </td>
      </tr>
    </>
  );
};

export default Coinsdisplay;
