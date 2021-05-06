import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor}  from './redux/createStore';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor= {persistor} >
    <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

