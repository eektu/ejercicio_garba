export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS'
export const FETCH_DETAILS_IN_PROGRESS = 'FETCH_DETAILS_IN_PROGRESS'
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS'
export const FETCH_DETAILS_FAILURE = 'FETCH_DETAILS_FAILURE'

import { extractError } from './_utils'
import { productService } from '../../../services'

export const fetchProductDetails = (productId) => {
  return (dispatch, getState) => {

    dispatch(fetchProductDetailsRequest(productId))

    return productService().getDetails(productId)
      .then((res) => {
        if (res.status === 200) {
          return dispatch(fetchProductDetailsSuccess({ details: res.data, status: res.status }))
        }
      })
      .catch((res) => {
        console.log("ERROR DE FETCH")
        console.log(extractError(res))
        return dispatch(fetchProductDetailsFailure({ error: 'Falló el fetch al detalle del producto', status: res.status }))
      })
  }
}

function fetchProductDetailsRequest(productId) {
  return {
    type: FETCH_DETAILS_IN_PROGRESS,
    data: productId
  }
}

function fetchProductDetailsSuccess(data) {
  return {
    type: FETCH_DETAILS_SUCCESS,
    data: data.details,
    status: data.status
  }
}

function fetchProductDetailsFailure(data) {
  return {
    type: FETCH_DETAILS_FAILURE,
    status: data.status,
    error: data.error
  }
}