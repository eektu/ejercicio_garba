export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const FETCH_PRODUCTS_IN_PROGRESS = 'FETCH_PRODUCTS_IN_PROGRESS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

import { listingService } from '../../../services';

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_IN_PROGRESS
  }
}

function fetchProductsSuccess(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    items: data.items,
    status: data.status
  }
}

function fetchProductsFailure(data) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    status: data.status,
    error: data.error
  }
}

export const fetchProducts = () => {
    return (dispatch, getState) => {

      dispatch(fetchProductsRequest());
  
      return listingService().getProducts()
        .then((res) => {
          if (res.status === 200) {
            return dispatch(fetchProductsSuccess(res.data));
          }
        })
        .catch(() => {
          return dispatch(fetchProductsFailure({error: 'Falló el fetch a /products', status: res.status }));
        });
    };
  }