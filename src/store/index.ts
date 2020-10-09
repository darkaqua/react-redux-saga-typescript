import {combineReducers} from 'redux';
import {exampleReducer, exampleSaga, ExampleState} from "./example";
import {all} from "@redux-saga/core/effects";

/** Default State **/
export interface DefaultState {
    example: ExampleState
}

/** root Reducers **/
export const rootReducer = combineReducers({
    example: exampleReducer
});

/** root Sagas **/
export function* rootSaga() {
    yield all([
        exampleSaga()
    ]);
}
