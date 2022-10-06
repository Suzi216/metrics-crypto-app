import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_COIN = 'coin/DISPLAY_COIN';
const DISPLAY_DETAIL = 'coin/DISPLAY_DETAIL';
const url = 'https://api.coincap.io/v2/markets';

// display
export const displayCoin = createAsyncThunk(DISPLAY_COIN, async () => {
  const response = await fetch(
    url,
  );
  const { data } = await response.json();
  return data.slice(0, 6);
});

export const showdetail = (id) => (dispatch) => {
  dispatch({
    type: DISPLAY_DETAIL,
    payload: id,
  });
};

const initialState = [];

const CoinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'coin/DISPLAY_COIN/fulfilled':
      return payload;
    case DISPLAY_DETAIL:
      return state.filter((crypto) => crypto.baseSymbol === payload);
    default:
      return state;
  }
};

export default CoinReducer;
