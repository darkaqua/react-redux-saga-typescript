import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../store";
import {ExampleState} from "../store/example";
import {useEffect} from "react";
import {Button} from "./button/Button.component";
import {exampleDispatchAction} from "../store/example/dispatchers";

export const App = () => {

    // Dispatcher
    const dispatch = useDispatch();
    // State selectors
    const exampleState = useSelector<DefaultState, ExampleState>(state => state.example);

    // Effects
    useEffect(() => {
        console.log(exampleState)
    }, [exampleState])

    // Handlers
    const _onClick = () => {
        dispatch(exampleDispatchAction(exampleState.example + 2))
    }

    // Render
    return (
        <div>
            <Button onClick={_onClick}>Dispatch</Button>
            <h1>{exampleState.example}</h1>
        </div>
    );
}
