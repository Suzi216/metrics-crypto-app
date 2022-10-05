import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import CoinReducer from './home/home';
// import rocketsReducer from './rockets/Rockets';

const mainReducer = combineReducers({
  mission: CoinReducer,
});
const store = configureStore({
  reducer: mainReducer,
  middleware: [thunk],
});

export default store;
