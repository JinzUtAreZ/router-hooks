import React from 'react';
import './App.css';

import Navigate from './Menu/Navigate';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Home from './Pages/Home';
import ItemDetails from './ShopData/ItemDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigate />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
