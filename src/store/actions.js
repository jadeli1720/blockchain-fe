import axios from 'axios';

import {
    FETCH_SERVER_START,
    FETCH_SERVER_SUCCESS,
    FETCH_SERVER_ERROR,

    GET_COIN_START,
    GET_COIN_SUCCESS,
    GET_COIN_ERROR
} from './types';

// testing to make sure we can connect to the server
export const fetchServer = () => {
    return dispatch => {
        dispatch({ type: FETCH_SERVER_START });
        axios.get('http://localhost:5000/hello')
            .then(res => {
                dispatch({ type: FETCH_SERVER_SUCCESS, payload: res})
                console.log("res success",res.data)
            })
            .catch(err => {
                dispatch({ type: FETCH_SERVER_ERROR, payload: err.response });
                console.log("Error", err)
            })
    }
}

export const getCoins = () =>{
    return dispatch => {
        dispatch({type: GET_COIN_START});
        axios.get('http://localhost:5000/chain')
            .then(res => {
                dispatch({ type: GET_COIN_START, payload:res })
                console.log("Get Coin Success", res.data)
            })
            .catch(err => {
                dispatch({ type: GET_COIN_ERROR, payload: err.response })
                console.log("Get Coin Failure", err)
            })
    }
}