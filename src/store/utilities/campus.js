// ACTION TYPES;
const DELETE_CAMPUS = "DELETE_CAMPUS";
const CURR_CAMPUS = "CURR_CAMPUS";

// ACTION CREATORS;
const deleteCampus = (id) => {
    return {
        type: DELETE_CAMPUS,
        payload: id
    }
}
const currCampus = (campus) => {
    return {
        type: CURR_CAMPUS,
        payload: campus
    }
}

// THUNK CREATORS;
export const deleteCampusThunk = (id) => (dispatch) => {
    let resolvedActionObject = deleteCampus(id); 
    dispatch(resolvedActionObject);
}

export const currCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = currCampus(campus);
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = {}, action) => {
    switch (action.type) {
        // case DELETE_CAMPUS:
        //     return state.filter(campus => campus.id !== action.payload);
        case CURR_CAMPUS:
            return action.payload;       
        default:
            return state;
    }
}