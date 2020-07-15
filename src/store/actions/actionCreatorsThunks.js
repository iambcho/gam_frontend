import * as types from './actionTypes';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

/****************************** ACTION CREATOR ***************************/
// //AUTH ---------
// const getUser = user => {
// 	return {
// 			type: types.GET_USER,
// 			payload: user
// 	}
// }
// const removeUser = () => {
// 	return {
// 			type: types.REMOVE_USER
// 	}
// }

//SESSIONS ---------
const fetchSessions = (all_sessions) => {
    return{
        type: types.FETCH_SESSIONS,
        payload: all_sessions
    }
}

// const addStudySession = (study_session) => {
//     return {
//         type: types.ADD_STUDY_SESSION,
//         payload: study_session
//     }
// }

const currentStudySession = (study_session) => {
    return {
        type: types.CURRENT_STUDY_SESSION,
        payload: study_session
    }
}

// const fetchCurrentVideo = (videoUrl) => {
//     return {
//         type: types.CURRENT_VIDEO,
//         payload: videoUrl
//     }
// }

// const deleteStudySession = (session) => {
//     return {
//         type: types.DELETE_STUDY_SESSION,
//         payload: session,
//     }
// }

//-----------------------------------------------------------------------------

//******************************** THUNKS *************************************
// For All thunks we first modify/access the databse and then update the front end
// with a dispatch 

//AUTH ----------

// export const me = () => async dispatch => {
//     try {
//         const res = await axios.get("/auth/me", { withCredentials: true});
//         console.log(res,"hellooooooo");
//         dispatch(getUser(res.data || {}));
//     }
//     catch(err) {
//         console.error(err);
//     }
// };

// //should put user ID stuff here
// export const auth = (username, password, method, history, id) => async dispatch => {
//     let res;
//     try {
//         res = await axios.post(`/auth/${method}`, { username, password }, { withCredentials: true });
//         history.push(`/study_session/${id}`);
//     }
//     catch (authError) {
//         return dispatch(getUser({ error: authError}));
//     }
//     try {
//         dispatch(getUser(res.data));
//     }
//     catch (dispatchOrHistoryErr) {
//         console.error(dispatchOrHistoryErr);
//     }
// };

// export const logout = () => async dispatch => {
//     try {
//         await axios.delete("/auth/logout", { withCredentials: true });
//         dispatch(removeUser());
//     }
//     catch (err) {
//         console.error(err);
//     }
// };


//SESSIONS ---------

/**This function takes @id, which is the id of the individual user that is logged on
 * and then it requests from the backend the sessions the user has.
 */
export const fetchSessionsThunk = (id) => (dispatch) => {
    axios.get(`/api/studysessions/users/${id}`)
    .then((response) =>{
        dispatch(fetchSessions(response.data));
    })
    .then((error)=>{
        console.log(error);
    });    
}

/**This function takes @study_session, which is the study session object the user is
 * creating and it posts this session into our data base
 */
// export const addStudySessionThunk = (study_session) => (dispatch) => {
//     axios.post('/api/studysessions/add', study_session)
//     .then((response) => {
//         // console.log("the study session data is: ", response.data);
//         return response.data;
//     })
//     .then((study_session) => dispatch(addStudySession(study_session)))
//     .catch((error) => {
//         console.log(error);
//     })
// }

/**This function takes @study_session, as the session the user hover overs and clicks
 * and then it ensure the current study session state is updated with this object
 */
export const currStudySessionThunk = (study_session) => (dispatch) => {
    //we can do this in one line, instead of storing in a variable I believe
    let resolvedActionObject = currentStudySession(study_session);
    dispatch(resolvedActionObject);
}

/**This function takes @session, which is the entire session and it removes it from
 * our table. Becauase one session has many notes it must also delete the notes.
 * To do this we added special property called {onDelete: 'cascade', hooks:true} that 
 * delete notes associated to a session autmatically. ^this snppet is in server/database/models/index,js
*/
// export const deleteStudySessionThunk = (session) => (dispatch) => {
//     (axios.delete(`/api/studysessions/delete/${session.id}`))
//     .then(() => dispatch(deleteStudySession(session.id)));
// }




