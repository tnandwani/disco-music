import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Root } from "./views/Root";
import { Home } from "./views/Home";
import { User } from "./views/User";
import { Upload } from "./views/Upload";




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




setTimeout(function () { 
    document.getElementById("spinner").classList.add("d-none");
    render(<App />, window.document.getElementById('app')); 
}, 500);
