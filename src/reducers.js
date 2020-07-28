import {CHANGE_SEARCH_FIELD} from './constants.js';
// read actions and spit out state
const initialState = {
    searchField: ''
}


export const searchRobots = (state=initialState, action={}) => {
    console.log('#9 in reducers: ', action.type, ' payload: ', action.payload);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}