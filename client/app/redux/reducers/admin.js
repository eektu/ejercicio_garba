import { FETCH_PRODUCT_LIST, BLACK_LIST_IN_PROGRESS, BLACK_LIST_SUCCESS,
        BLACK_LIST_FAILURE, FETCH_PRODUCT_LIST_IN_PROGRESS, FETCH_PRODUCT_LIST_FAILURE,
        FETCH_PRODUCT_LIST_SUCCESS } from '../actions/admin';

const initState = {
    enabledList: [],
    disabledList: [],
    error: '',
    status: 0
}


export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_LIST_IN_PROGRESS:
            return {...state, error: "", status: 0, action: action.type}
        case FETCH_PRODUCT_LIST:
            return {...state, error: "", status: 0, action: action.type}
        case FETCH_PRODUCT_LIST_FAILURE:
            return {...state, error: action.error, status: action.status, action: action.type}
        case FETCH_PRODUCT_LIST_SUCCESS:
            const enabledList = action.items.filter(i => i.enabled)
            const disabledList = action.items.filter(i => !i.enabled)
            return {...state, enabledList: enabledList, disabledList: disabledList, status: action.status, action: action.type}
        default:
            return state;
    }
}