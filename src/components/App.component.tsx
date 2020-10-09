import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../store";
import {ExampleState} from "../store/example";
import {useEffect} from "react";
import {Button} from "./button/Button.component";
import {exampleDispatchAction} from "../store/example/dispatchers";
import {Route, Switch, withRouter} from "react-router";
import {Link} from "react-router-dom";
import {PageOne} from "./pages/pageOne/PageOne.component";
import {PageTwo} from "./pages/pageTwo/PageOne.component";

export const App = withRouter(() => {

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
            <div>
                - <Link to='/'>one</Link>
                <p/>
                - <Link to='/two'>two</Link>
            </div>
            <hr/>
            <Switch>
                <Route exact path="/" component={PageOne} />
                <Route exact path="/two" component={PageTwo} />
            </Switch>
            <hr/>
            <Button onClick={_onClick}>Dispatch</Button>
            <h1>{exampleState.example}</h1>
        </div>
    );
});
