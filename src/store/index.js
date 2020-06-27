import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import servicesReducer from '../reducers/servicesReducer'
import serviceReducer from '../reducers/serviceReducer'
import saga from '../sagas'

const rootReducer = combineReducers({
    services: servicesReducer,
    service: serviceReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export default store