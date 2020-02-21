import {
    FETCH_SERVER_START,
    FETCH_SERVER_SUCCESS,
    FETCH_SERVER_ERROR
} from './types';

const initialState = {
    isLoading: false,
    error: '',
    block: {}
};

export const helloReducer = (state = initialState, {type, payload}) => {
    
    switch(type){
        case FETCH_SERVER_START:
            return {
                ...state,
                error: "",
                isLoading: true
            };

            case FETCH_SERVER_SUCCESS:
                return {
                    ...state,
                error: "",
                isLoading: false
                };

            case FETCH_SERVER_ERROR:
                return {
                    ...state,
                error: payload,
                isLoading: false
                };

            default:
                return state;
    }
}