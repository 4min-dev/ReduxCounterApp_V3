import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import counterDelayReducer from "./reducers/counterDelayReducer";
import createSagaMiddleware from 'redux-saga'
import { thunk } from "redux-thunk";
import { counterSagaWatcher } from "../../redux-saga/saga/counterSaga";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootErrorReducer from "./reducers/rootErrorReducer";

const sagaMiddleware = createSagaMiddleware()

export const globalStore = configureStore({
    reducer:{
        counterReducer:counterReducer,
        userReducer:userReducer,
        counterDelayReducer:counterDelayReducer,
        rootErrorReducer:rootErrorReducer
    },
    middleware:() => new Tuple(thunk,sagaMiddleware)
})
export type TRootTypeState = ReturnType<typeof globalStore.getState>
export type TRootDispatch = typeof globalStore.dispatch

sagaMiddleware.run(counterSagaWatcher)