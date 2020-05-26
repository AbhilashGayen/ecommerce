import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/home/home-page.component';

import './App.css';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;