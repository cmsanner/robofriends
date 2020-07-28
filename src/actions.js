import {CHANGE_SEARCH_FIELD} from './constants.js';

//search field will recieve an input of text 
export const setSearchField = (text) => {
    return {
        type: 'CHANGE_SEARCH_FIELD',
        payload: text
    }
}