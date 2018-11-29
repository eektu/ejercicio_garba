import { FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_IN_PROGRESS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/listing';

const initState = {
    action: FETCH_PRODUCTS_IN_PROGRESS,
    items: [],
    error: "",
    status: 0
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_IN_PROGRESS:
            return {...state, error: "", status: 0, action: action.type}
        case FETCH_ALL_PRODUCTS:
            return {...state, error: "", status: 0, action: action.type}
        case FETCH_PRODUCTS_FAILURE:
            return {...state, error: action.error, status: action.status, action: action.type}
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, items: action.items, status: action.status, action: action.type}
        default:
            return state;
    }
}