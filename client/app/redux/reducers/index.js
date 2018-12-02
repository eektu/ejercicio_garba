import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import listing from './listing'
import product from './product'
import autosuggest from './autosuggest'

export default (history) => combineReducers({
  router: connectRouter(history),
  product,
  listing,
  autosuggest
})