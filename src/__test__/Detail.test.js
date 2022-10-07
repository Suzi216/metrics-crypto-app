import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Detail from '../components/coins';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
    <Router>
      <Detail />
    </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
