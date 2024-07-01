import { delay, put, takeEvery } from "redux-saga/effects";
import { useTypedSelectorStatesSaga } from "../../hooks/useTypedSelectorStatesSaga";
import { actionBankCounterTypes } from "../../redux/store/action-types/actionBankCounterTypes";
import { decrementWithAmount, incrementWithAmount } from "../../redux/store/reducers/counterReducer";
import { setRootError } from "../../redux/store/reducers/rootErrorReducer";

function* getDelayValue() {
    const delay:number = yield useTypedSelectorStatesSaga(state => state.counterDelayReducer.delay)
    return delay
}

function* getCurrCash() {
    const currCash:number = yield useTypedSelectorStatesSaga(state => state.counterReducer.cash)
    return currCash
}

function getWorkerPayload(promptTitle:string):number | null {
    let payload:number = Number(prompt(promptTitle))
    return payload
}

function* incrementSagaWorker() {
    const delayValue:number = yield getDelayValue()
    let payload:number = yield getWorkerPayload('+ value')

    if(payload >= 0) {
        yield delay(delayValue)
        yield put(incrementWithAmount(payload))
    } else {
        yield put(setRootError('Increment value cannot be less 0'))
        return
    }
    if(isNaN(payload)) {
        put(setRootError('Not a number'))
    }
    yield put(setRootError(null))
}

function* decrementSagaWorker() {
    const delayValue:number = yield getDelayValue()
    const currCash:number = yield getCurrCash()
    let payload:number = yield getWorkerPayload('- value')

    if(payload !== null && payload >= currCash) {
        payload = currCash
    } else if(payload < 0) {
        yield put(setRootError('Decrement value cannot be less 0'))
        return
    }

    if(isNaN(payload)) {
        yield put(setRootError('Not a number'))
        return null
    }
    yield put(setRootError(null))
    yield delay(delayValue)
    yield put(decrementWithAmount(payload))
}

export function* counterSagaWatcher() {
    yield takeEvery(actionBankCounterTypes.ASYNC_COUNTER_INCR, incrementSagaWorker)
    yield takeEvery(actionBankCounterTypes.ASYNC_COUNTER_DECR, decrementSagaWorker)
}