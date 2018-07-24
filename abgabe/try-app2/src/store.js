import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

function isChrome() {

    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");
  
    if (isIOSChrome) {
      return true;
    } else {
      return (
          isChromium !== null &&
          typeof isChromium !== "undefined" &&
          vendorName === "Google Inc." &&
          isOpera === false &&
          isIEedge === false);
    }
  }

let store

if (isChrome() ){
    store = createStore(
        rootReducer, 
        initialState,
        compose ( 
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
} else {
     store = createStore(
        rootReducer, 
        initialState,
        compose ( 
            applyMiddleware(...middleware)
        )
    )
}

export default store;