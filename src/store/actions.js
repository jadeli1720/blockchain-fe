import axios from 'axios';

import {
    FETCH_SERVER_START,
    FETCH_SERVER_SUCCESS,
    FETCH_SERVER_ERROR
} from './types';

// testing to make sure we can connect to the server
export const fetchServer = () => {
    return dispatch => {
        dispatch({ type: FETCH_SERVER_START });
        axios.get('http://localhost:5000/hello')
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_SERVER_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log("Could no connect with server", err)
                dispatch({ type: FETCH_SERVER_ERROR });
            })
    }
}