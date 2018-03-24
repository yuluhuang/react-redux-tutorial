/**
 * User yuluhuang
 * Date 18/3/20
 * Time 16:36
 */

import {UPDATE_USER, SHOW_ERROR, API_REQUEST_ERROR, API_REQUEST_SUCCESS, API_REQUEST_REQUEST} from '../actions/user-actions'
export default function userReducer(state = '', {type, payload}) {
    switch (type) {
        case UPDATE_USER:
            return payload;
        case SHOW_ERROR:
            return payload.user
        case API_REQUEST_ERROR:
            return payload.user
        case API_REQUEST_SUCCESS:
            return payload.user
        default:
            return state;
    }
}