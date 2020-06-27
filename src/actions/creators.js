import {
    GET_SERVICES_REQUEST,
    GET_SERVICES_FAILURE,
    GET_SERVICES_SUCCESS,
    GET_SERVICE_REQUEST,
    GET_SERVICE_FAILURE,
    GET_SERVICE_SUCCESS,
} from './types'

export const getServicesRequest = () => ({
    type: GET_SERVICES_REQUEST
})

export const getServicesFailure = (error) => ({
    type: GET_SERVICES_FAILURE,
    payload: {error}
})

export const getServicesSuccess = (services) => ({
    type: GET_SERVICES_SUCCESS,
    payload: {services}
})

export const getServiceRequest = (id) => ({
    type: GET_SERVICE_REQUEST,
    payload: {id}
})

export const getServiceFailure = (error) => ({
    type: GET_SERVICE_FAILURE,
    payload: {error}
})

export const getServiceSuccess = (service) => ({
    type: GET_SERVICE_SUCCESS,
    payload: {service}
})