import {
    GET_SERVICE_REQUEST,
    GET_SERVICE_FAILURE,
    GET_SERVICE_SUCCESS,
} from '../actions/types'

const initialState = {
    service: {id:'', name: '', price:'', content: ''},
    loading: false,
    error: null
}

export default function serviceReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_SERVICE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        case GET_SERVICE_SUCCESS:
            return {
                ...state,
                service: payload.service,
                loading: false,
                error: null
            };
        default:
            return state;
    }
}