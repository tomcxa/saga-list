import {
    GET_SERVICES_REQUEST,
    GET_SERVICES_FAILURE,
    GET_SERVICES_SUCCESS,
} from '../actions/types'

const initialState = {
    services: [],
    loading: false,
    error: null
}

export default function servicesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_SERVICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                services: payload.services,
                loading: false,
                error: null
            };
        default:
            return state;
    }
}