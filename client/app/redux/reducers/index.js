import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import listing from './listing'

export default (history) => combineReducers({
  router: connectRouter(history),
  listing
})