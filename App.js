import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App2 from './App2';

export function App() {
  return (
    <Provider store={store}>
      <App2/>
    </Provider>
  );
}


