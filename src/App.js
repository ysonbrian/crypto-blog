import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Create from './components/Blog/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
