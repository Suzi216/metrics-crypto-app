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
  const arr = [];
  data.slice(0, 6).forEach((element) => {
    arr.push({ ...element, ...{ show: false } });
  });

  return arr;
});

export const showdetail = (id) => (dispatch) => {
  dispatch({
    type: DISPLAY_DETAIL,
    payload: id,
  });
};

const initialState = [];

function filterByID(state, id) {
  return state.findIndex((crypto) => crypto.baseSymbol === id);
}

const CoinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'coin/DISPLAY_COIN/fulfilled':
      return payload;
    case DISPLAY_DETAIL:
      // const index = filterByID(state, payload);
      console.log(filterByID(state, payload));
      return [...state, { ...state[filterByID(state, payload)], show: !state[filterByID(state, payload)].show }];
      // return state.filter((crypto) => crypto.baseSymbol === payload);
    default:
      return state;
  }
};

export default CoinReducer;
