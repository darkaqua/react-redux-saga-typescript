import {Reducer} from 'redux'
import {ExampleState, ExampleActionTypes, ExampleActions, exampleDefaultState} from "./types";
import {produce} from 'immer'

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
