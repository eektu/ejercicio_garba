export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST'

export const BLACK_LIST_IN_PROGRESS = 'BLACK_LIST_IN_PROGRESS'
export const BLACK_LIST_SUCCESS = 'BLACK_LIST_SUCCESS'
export const BLACK_LIST_FAILURE = 'BLACK_LIST_FAILURE'

export const FETCH_PRODUCT_LIST_IN_PROGRESS = 'FETCH_PRODUCT_LIST_IN_PROGRESS'
export const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE'
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS'

import { adminService, listingService } from '../../../services';

export const blacklistRequest = (productId) => {
    return {
        type: BLACK_LIST_IN_PROGRESS
    }
}

function blacklistSuccess(data) {
  return {
    type: BLACK_LIST_SUCCESS,
    item: data.item,
    status: data.status
  }
}

function blacklistFailure(data) {
  return {
    type: BLACK_LIST_FAILURE,
    status: data.status,
    error: data.error
  }
}

export const toBlacklist = (productId, enabledStatus) => {
    return (dispatch, getState) => {

        dispatch(blacklistRequest(productId))
    
        return adminService().blacklistProduct(productId, enabledStatus)
          .then((res) => {
            if (res.status === 200) {
              return dispatch(blacklistSuccess(res.data))
            }
          })
          .catch(() => {
            return dispatch(blacklistFailure({error: 'Falló el blacklisteo', status: res.status }))
          })
      }
}

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCT_LIST_IN_PROGRESS
  }
}

function fetchProductsSuccess(data) {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    items: data.items,
    status: data.status
  }
}

function fetchProductsFailure(data) {
  return {
    type: FETCH_PRODUCT_LIST_FAILURE,
    status: data.status,
    error: data.error
  }
}

export const fetchProducts = () => {
    return (dispatch, getState) => {

        dispatch(fetchProductsRequest())
    
        return listingService().getProducts()
          .then((res) => {
            if (res.status === 200) {
              return dispatch(fetchProductsSuccess(res.data))
            }
          })
          .catch(() => {
            return dispatch(fetchProductsFailure({error: 'Falló el fetch a /products', status: res.status }))
          })
      }
}