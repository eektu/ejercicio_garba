export const CHANGE_QUERY = 'CHANGE_QUERY';
export const FETCH_LIST = 'FETCH_ALL_PRODUCTS';
export const FETCH_LIST_IN_PROGRESS = 'FETCH_LIST_IN_PROGRESS'
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS'
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE'

import { searchService } from '../../../services';

const changeQuery = (query) => {
  return {
    type: CHANGE_QUERY,
    query: query
  }
}

function fetchListRequest(data) {
  return {
    type: FETCH_LIST_IN_PROGRESS,
    query: data.query
  }
}

function fetchListSuccess(data) {
  return {
    type: FETCH_LIST_SUCCESS,
    items: data.items,
    status: data.status
  }
}

function fetchListFailure(data) {
  return {
    type: FETCH_LIST_FAILURE,
    status: data.status,
    error: data.error
  }
}

export const fetchList = (query) => {
    return (dispatch, getState) => {

      dispatch(changeQuery(query))

      if(query.length >= 2) {
        dispatch(fetchListRequest(query))
  
        return searchService().getList(query)
          .then((res) => {
            if (res.status === 200) {
              console.log("llego la data de la busqueda")
              console.log(res.data)
              return dispatch(fetchListSuccess(res.data));
            }
          })
          .catch(() => {
            return dispatch(fetchListFailure({error: `Falló el fetch a /search?q=${query}`, status: res.status }));
          })
      }
    }
  }