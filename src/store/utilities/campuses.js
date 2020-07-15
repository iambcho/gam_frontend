//ACTION TYPES:
const FETCH_CAMPUSES = "FETCH_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";

var arrayOfCampusesFromAPI = [ 
    {
        "id": 99,
        "campusName": "Hunter College",
        "campusLocation": "695 Park Ave, New York, NY 10065",
        "imageURL": "https://i.imgur.com/RdwZ6mO.jpg",
        "campusDescription": "Hunter College be like that",
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusStudents":1
    },
    {
        "id": 12,
        "campusName": "Yale College",
        "campusLocation": "that locations though",
        "imageURL": "https://i.imgflip.com/3fkdf4.jpg",
        "campusDescription": "Hunter College be like that",
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusStudents":undefined
    },
    {
        "id": 1834,
        "campusName": "New York University",
        "campusLocation": "New York",
        "imageURL": "https://i.kym-cdn.com/photos/images/newsfeed/000/248/262/882.jpg",
        "campusDescription": "This is everywhere",
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusStudents":5
    },
    {
        "id": 85,
        "campusName": "Brooklyn Tech",
        "campusLocation": "Bronx",
        "imageURL": "https://i.imgur.com/HQw3fzsh.jpg",
        "campusDescription": "Not a college, full of weirdos",
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusStudents":3
    },
];

//ACTION CREATOR
//fetchCampuses is returning a object of type FETCH_CAMPUSES
const fetchCampuses = (campuses) =>{
    return{
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}

//removeCampus is returning a object of type REMOVE_CAMPUS
const removeCampus = (id) => {
    return{
        type: REMOVE_CAMPUS,
        payload: id
    }
}

//addCampus is returning a object of type ADD_CAMPUS
const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

const editCampus = (campus) => {
    return {
        type: EDIT_CAMPUS,
        payload: campus
    }
}


//THUNK CREATOR
//thunking allows asynchronous, which is fancy talk for
//saying I can call this function and it will execute
//later, it doesn't block other functions and 
//once complete will be outputed after call stack is empty
export const fetchCampusesThunk = () => (dispatch) => {

    dispatch(fetchCampuses(arrayOfCampusesFromAPI));
}

export const removeCampusThunk = (id) => (dispatch) =>{
    dispatch(removeCampus(id));
}

export const addCampusThunk = (campus) => (dispatch) => {
    dispatch(addCampus(campus));
}

export const editCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = editCampus(campus); 
    dispatch(resolvedActionObject);
}

//REDUCER FUNCTION
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return arrayOfCampusesFromAPI = arrayOfCampusesFromAPI.filter(campus => campus.id !== action.payload);
        case ADD_CAMPUS:
            arrayOfCampusesFromAPI = [...arrayOfCampusesFromAPI, action.payload];
            return [...state, action.payload];
        case EDIT_CAMPUS:
                arrayOfCampusesFromAPI = state.map((campus) => {
                    if (campus.id === action.payload.id) {
                        return {
                        ...campus,
                        id: action.payload.id,
                        campusName: action.payload.campusName,
                        campusLocation: action.payload.campusLocation,
                        campusDescription: action.payload.campusDescription,
                        imageURL: action.payload.imageURL
                        }
                    } 
                    else return campus;
                })
            return state.map((campus) => {
                    if (campus.id === action.payload.id) {
                        return {
                        ...campus,
                        id: action.payload.id,
                        campusName: action.payload.campusName,
                        campusLocation: action.payload.campusLocation,
                        campusDescription: action.payload.campusDescription,
                        imageURL: action.payload.imageURL
                        }
                    } 
                    else return campus;
                })
        default:
            return state;
    }
} 

