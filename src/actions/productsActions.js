/**
 * User yuluhuang
 * Date 18/3/20
 * Time 16:36
 */

export default function userReducer(state = '', {type, payload}) {
    switch (type) {
        case 'updateUser':
            return payload;
        default:
            
    }
    return state;
}