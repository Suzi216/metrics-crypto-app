import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_COIN = 'coin/DISPLAY_COIN';
const url = 'https://api.coincap.io/v2/markets';

// display
export const displayCoin = createAsyncThunk(DISPLAY_COIN, async () => {
  const response = await fetch(
    url,
  );
  const { data } = await response.json();
  return data.slice(0, 6);
});

const initialState = [];

const CoinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'coin/DISPLAY_COIN/fulfilled':
      return payload;
    default:
      return state;
  }
};

export default CoinReducer;
