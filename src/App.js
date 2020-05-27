import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/home/home-page.component';

import './App.css';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth-page.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser: null
  }
}

unsuscribeFromAuth = null;

componentDidMount() {
 this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
  })
}

componentWillUnmount(){
  this.unsuscribeFromAuth();
}

  render() {
    return (
      <div>
        
        <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={AuthPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;