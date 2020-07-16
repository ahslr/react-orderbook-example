import React, { Fragment, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import OrderBookPage from './routes/OrderBook';
import About from './routes/About';
import OrderBookL2 from './routes/OrderBookL2';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import removeBootingAnimation from './utils/boot-utils';
import './App.css';

const App = () => {
  useEffect(() => {
    removeBootingAnimation();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Alert />
            <Route exact path='/' component={OrderBookPage}/>
            <Switch>
              <Route exact path='/about' component={About}/>
              <Route exact path='/orderbookl2' component={OrderBookL2}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
