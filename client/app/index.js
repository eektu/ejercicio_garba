import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './redux/store'

import './styles/styles.scss';

import Home from './containers/home'
import Listing from './containers/listing'
import Product from './containers/product'

import NotFound from './components/errorPages/NotFound'

const Admin = () => <div>Admin Panel</div>


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Listing} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
)
