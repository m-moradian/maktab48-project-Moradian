import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import {store,persistor}from "./redux/store";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { saveState } from "./redux/store/localStorage";
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
 import { createMuiTheme} from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
store.subscribe(() =>
  saveState("shoppingCart", store.getState()["shoppingCart"])
);

const theme = createMuiTheme({
  direction: 'rtl',
});
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <Provider store={store}>
        
        <Router>
           {/* <PersistGate persistor={persistor}>  */}
            <App />
           {/* </PersistGate> */}
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


