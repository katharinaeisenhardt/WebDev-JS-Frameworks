import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//components
import Calories from './components/Calorys';
import CaloryForm from './components/CaloryForm';
import UpdateCalory from './components/UpdateCalory';

const Header = () => {
  return (
    <div className="Header">
      <header className="App-header">
        <h1 className="App-title">Calories tracker</h1>
        <p className="App-intro">
        Trying to gain weight? Wanna get that sixpack you've always dreamed of? Or just slim and fit? <br/> 
        Then track your calories!!! <br/> 1 Kilokalorie Lebensmittel liefert exakt die Energie, die nötig ist, um 1 Liter Wasser um 1 °C zu erwärmen.
        </p>
      </header>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={'/'}>
          <div className="App">
            <Route path="/" component={Header} />
            <Route path="/" component={CaloryForm} />
            <Route path="/" component={Calories} />
            <Route path="/Calory/:caloryid" component={UpdateCalory} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
