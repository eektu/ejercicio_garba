import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import listing from './listing'
import product from './product'
import autosuggest from './autosuggest'
import admin from './admin'

export default (history) => combineReducers({
  router: connectRouter(history),
  product,
  listing,
  autosuggest,
  admin
})