import {Reducer} from 'redux'
import {produce} from 'immer'
import {ExampleState, ExampleActionTypes, ExampleActions, exampleDefaultState} from "./types";

export const exampleReducer: Reducer<ExampleState, ExampleActions> = (
    state = exampleDefaultState(),
    action: ExampleActions
) => {
    switch (action.type) {
        case ExampleActionTypes.EXAMPLE_SUCCESS:
            return produce(state, (copyState: ExampleState) => {
                copyState.example = action.example;
            });
    }
    return state
}
