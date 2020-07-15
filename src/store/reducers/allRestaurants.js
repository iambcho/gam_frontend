import * as type from '../actions/actionTypes';

//The restaurants are stored in an array
export default(state = [], action) =>{
    switch(action.type){
        case (type.FETCH_RESTAURANTS):
            return (action.payload);
        default:
            return state; 
    }
}