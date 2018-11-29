import { FETCH_ALL_PRODUCTS } from '../actions/common';

const initState = {
    blacklist: [],
    productList: []
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_ALL_PRODUCTS:
            return {...state, productList: action.data}
        default:
            return state;
    }
}