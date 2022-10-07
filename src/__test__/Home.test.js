import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Coin from '../components/Home';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Coin />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
