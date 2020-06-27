import { takeEvery, put, spawn, call } from 'redux-saga/effects';
import { 
    getServicesSuccess,
    getServicesFailure,
    getServiceSuccess,
    getServiceFailure,
} from '../actions/creators';
import {  GET_SERVICE_REQUEST, GET_SERVICES_REQUEST } from '../actions/types';
import { getServices, getService } from '../api/index';

// worker
function* handleGetServicesSaga() {
    try {
        const services = yield call(getServices);
        yield put(getServicesSuccess(services));
    } catch (e) {
        yield put(getServicesFailure(e.message));
    }
}

// watcher
function* watchGetServicesSaga() {
   yield takeEvery(GET_SERVICES_REQUEST, handleGetServicesSaga)
}
// worker
function* handleGetServiceSaga(action) {
    try {
        const service = yield call(getService, action.payload.id);
        yield put(getServiceSuccess(service));
    } catch (e) {
        yield put(getServiceFailure(e.message));
    }
}

// watcher
function* watchGetServiceSaga() {
   yield takeEvery(GET_SERVICE_REQUEST, handleGetServiceSaga)
}

export default function* saga() {
    yield spawn(watchGetServicesSaga);
    yield spawn(watchGetServiceSaga);
}