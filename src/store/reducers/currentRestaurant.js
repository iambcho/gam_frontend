import * as type from '../actions/actionTypes';

//the current restaurant is one object, based on what the user clicked
export default (state = {}, action) => {
    switch (action.type) {
        case type.CURRENT_RESTAURANT:
            return action.payload;               
        default:
            return state;
    }
}