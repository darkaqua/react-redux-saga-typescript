
import {ExampleActionTypes} from "./types";
import {IExampleAction, IExampleActionSuccess} from "./actions";

/** Actions **/
export const exampleDispatchAction = (num: number): IExampleAction => ({
    type: ExampleActionTypes.EXAMPLE,
    example: num
});

/** Saga Actions **/
export const exampleDispatchActionSuccess = (num: number): IExampleActionSuccess => ({
    type: ExampleActionTypes.EXAMPLE_SUCCESS,
    example: num
});
