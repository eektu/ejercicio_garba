import { FETCH_LIST, FETCH_LIST_IN_PROGRESS, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE, CHANGE_QUERY } from '../actions/autosuggest'

const initState = {
    action: FETCH_LIST_SUCCESS,
    items: [],
    query: '',
    error: '',
    status: 0
}

export default (state = initState, action) => {
    switch(action.type) {
        case CHANGE_QUERY:
            return {...state, query: action.query, error: '', status: 0, action: action.type}
        case FETCH_LIST_IN_PROGRESS:
            return {...state, query: action.query, error: '', status: 0, action: action.type}
        case FETCH_LIST:
            return {...state, error: '', status: 0, action: action.type}
        case FETCH_LIST_FAILURE:
            return {...state, error: action.error, status: action.status, action: action.type}
        case FETCH_LIST_SUCCESS:
            return {...state, items: action.items, status: action.status, action: action.type}
        default:
            return state
    }
}