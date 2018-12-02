import { FETCH_PRODUCT_DETAILS, FETCH_DETAILS_IN_PROGRESS, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE } from '../actions/product';

const initState = {
    action: FETCH_DETAILS_IN_PROGRESS,
    details: {},
    error: "",
    status: 0
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_DETAILS_IN_PROGRESS:
            const details = action.data === state.details.xid ? state.details : {}
            return {...state, details: details, error: "", status: 0, action: action.type}
        case FETCH_PRODUCT_DETAILS:
            return {...state, error: "", status: 0, action: action.type}
        case FETCH_DETAILS_FAILURE:
            return {...state, error: action.error, status: action.status, action: action.type}
        case FETCH_DETAILS_SUCCESS:
            return {...state, details: action.data, status: action.status, action: action.type}
        default:
            return state;
    }
}