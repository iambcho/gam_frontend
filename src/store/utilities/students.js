let arrayOfStudentsFromAPI = [
    {
    "id": 4,
    "firstName": "Jerry",
    "lastName": "Jingle",
    "email": "jerryjingle@bells.com",
    "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    "gpa": null,
    "createdAt": "2018-12-06T19:58:21.314Z",
    "updatedAt": "2018-12-06T19:58:21.314Z",
    "campusId": 3
    },
    {
    "id": 6,
    "firstName": "Barry",
    "lastName": "Huang",
    "email": "someemailgoeshere@yahoo.com",
    "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    "gpa": null,
    "createdAt": "2018-12-06T20:04:04.275Z",
    "updatedAt": "2018-12-06T20:04:04.275Z",
    "campusId": 1
    },
    {
    "id": 1,
    "firstName": "justin",
    "lastName": "mintzer",
    "email": "mintzer.justin@gmail.com",
    "imageUrl": "https://i.imgur.com/N9Koe2G.jpg",
    "gpa": 4,
    "createdAt": "2018-12-05T23:02:45.257Z",
    "updatedAt": "2018-12-05T23:02:45.257Z",
    "campusId": 1
    },
    {
    "id": 24,
    "firstName": "first",
    "lastName": "LAST",
    "email": "email@email.com",
    "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
    "gpa": null,
    "createdAt": "2018-12-10T04:50:33.677Z",
    "updatedAt": "2018-12-10T04:50:33.677Z",
    "campusId": null
    },
    {
    "id": 2,
    "firstName": "bob",
    "lastName": "jones",
    "email": "bobbyboy1234@yahoo.com",
    "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
    "gpa": 3.7,
    "createdAt": "2018-12-05T23:02:45.270Z",
    "updatedAt": "2019-06-14T00:15:35.429Z",
    "campusId": 1
    }
]

// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";


// ACTION CREATOR;
const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

const editStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        payload: student
    }
}


// THUNK CREATOR;
/*To connect the front and the back end, we only need to:
    -edit the thunks on the frontend
        -edit with axios
        -and then handle the response you get from the backend

    -edits on the backend
        -edit the routers to correspond to the axios calls
        -sometimes need to make edits that affect back and front end:
            -e.g., remove 
                -need to delete it on the backend in the router using express
                - and then send back a response to the frontend that it was deleted so that you can delete it from the front end state
*/
export const fetchStudentsThunk = () => (dispatch) => {
    //make axios call let data = my axios call here

    // axios.get("/students"+(this.state.searchInput)+"&api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr")
	// .then((response) => {
	// 	this.setState({gifs: response.data["data"], state:"searching"});
	// 	this.state.gifs.forEach((element) => {
	// 		console.log(element.rating)
	// 	    }
	// 	    );
	//     })
    //     .then((error) => {
	// 	console.log(error);
	//     });
    // };
    
    //response that comes back will be JSON
    //need to manipulate this data - turn it into array from JSON
    dispatch(fetchStudents(arrayOfStudentsFromAPI))
}

export const removeStudentThunk = (id) => (dispatch) => {

    //try catch for response from backend - dispatch if successful and if response from backend is error or undefined, then catch
    let resolvedActionObject = removeStudent(id); 
    dispatch(resolvedActionObject);
}

export const addStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = addStudent(student); 
    dispatch(resolvedActionObject);
}

export const editStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = editStudent(student); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload;
        case REMOVE_STUDENT:
            return arrayOfStudentsFromAPI = arrayOfStudentsFromAPI.filter(student => student.id !== action.payload);
        case ADD_STUDENT:
            arrayOfStudentsFromAPI = [...arrayOfStudentsFromAPI, action.payload];
            return [...state, action.payload]
        case EDIT_STUDENT:
                arrayOfStudentsFromAPI = state.map((student) => {
                    if (student.id === action.payload.id) {
                        return {
                        ...student,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        gpa: action.payload.gpa,
                        imageUrl: action.payload.imageUrl
                        }
                    } 
                    else return student;
                })
            return state.map((student) => {
                    if (student.id === action.payload.id) {
                        return {
                        ...student,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        gpa: action.payload.gpa,
                        imageUrl: action.payload.imageUrl
                        }
                    } 
                    else return student;
                })
        default:
            return state;
    }
}


