import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Root } from "./views/Root";
import { Home } from "./views/Home";
import { User } from "./views/User";
import { Upload } from "./views/Upload";

//Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'


function counter(state = inUser, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(
    counter, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
console.log("store is:");
console.log(store.getState());

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

 
////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// CLASS
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



class App extends React.Component {

    // load needed data here in constructor before passing
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Router history={browserHistory}>

                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                    <Route path={"home"} component={Home} />
                    <Route path={"upload"} component={Upload} />
                    <Route path={"user"} component={User} />
                </Route>

            </Router>


        );
    }

}

// // NO SPINNER
// document.getElementById("spinner").classList.add("d-none");
// render(<App />, window.document.getElementById('app'));


// WITH SPINNER
setTimeout(function () {
    render(

        <Provider store={store}>
            <App />
        </Provider>
        , window.document.getElementById('app'));
    document.getElementById("spinner").classList.add("d-none");
}, 1000);
