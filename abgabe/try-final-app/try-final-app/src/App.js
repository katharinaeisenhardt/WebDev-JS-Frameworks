import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './store';
//components
import Caloryform from './components/Caloryform';
import UpdateCalory from './components/UpdateCalory';

const Header = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Calories Tracker</h1>
      </header>
      <p className="App-intro">
      Trying to gain weight? Wanna get that sixpack you've always dreamed of? Or just slim and fit? <br/> 
      Then track your calories!!! <br/> 1 Kilokalorie Lebensmittel liefert exakt die Energie, die nötig ist, um 1 Liter Wasser um 1 °C zu erwärmen.</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={'/'}>
          <div> {/*richtig das zweimal className="App"?*/}
            <Route path="/" component={Header} />
            <Route path="/" component={Caloryform} />
            <Route path="/calory/:caloryid" component={UpdateCalory} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
