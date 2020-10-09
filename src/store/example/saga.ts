import {all, put, takeEvery} from "@redux-saga/core/effects";
import {ExampleActions, ExampleActionTypes} from "./types";
import {IExampleAction} from "./actions";
import {exampleDispatchActionSuccess} from "./dispatchers";

/** Initial saga **/
export function* exampleSaga() {
    yield all([
        takeEvery(ExampleActionTypes.EXAMPLE, example)
    ])
}

/** Saga functions **/
//
function* example(action: IExampleAction) {
    yield put<ExampleActions>(exampleDispatchActionSuccess(action.example + 3));
}
