import {ExampleActionTypes} from "./types";


/** Saga Actions **/
export interface IExampleAction {
    type: typeof ExampleActionTypes.EXAMPLE
    example: number;
}

/** Actions **/
export interface IExampleActionSuccess {
    type: typeof ExampleActionTypes.EXAMPLE_SUCCESS
    example: number;
}
