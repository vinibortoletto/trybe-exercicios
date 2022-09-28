// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  cleanup,
  screen,
  getByRole,
  getByText,
} from '@testing-library/react';
import App from './App';

import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from './redux/reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('App', () => {
  beforeEach(cleanup);

  it('1. should render button and the text "0"', () => {
    renderWithRedux(<App />);

    const addButton = screen.getByRole('button');
    const counterElement = screen.getByText('0');

    expect(addButton).toBeInTheDocument();
    expect(counterElement).toBeInTheDocument();
  });

  it('2. should render counter with value "5"', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('3. should render counter with value "5" and increase by 1 when clicked', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    const addButton = screen.getByRole('button');
    userEvent.click(addButton);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
