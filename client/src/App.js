import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Transactions from './components/Transactions';
import Customers from './components/Customers';
import GlobalState from './context/GlobalState';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (

<GlobalState>
      <Router>
        <Navbar />
        <div className='appContainer'>
          <Switch>
          <Route path='/transactions' component={Transactions} />
          <Route path='/customers' component={Customers} />
            
            <Route path='/' component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
      </GlobalState>

  )
}

export default App;