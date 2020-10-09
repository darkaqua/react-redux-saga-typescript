
import {IExampleAction, IExampleActionSuccess} from "./actions";

/** Action Types **/
export enum ExampleActionTypes {
    EXAMPLE = 'EXAMPLE@@EXAMPLE',
    EXAMPLE_SUCCESS = 'EXAMPLE@@EXAMPLE_SUCCESS',
}

/** Action List **/
export type ExampleActions =
    | IExampleAction
    | IExampleActionSuccess


/** Default State Values **/
export const exampleDefaultState = (): ExampleState => ({
    example: 0
});

/** State **/
export interface ExampleState {
    example: number;
}

/** Interfaces **/
//...
