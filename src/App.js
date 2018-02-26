import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import './App.css';

import * as routes from './constants/routes';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { connect } from 'react-redux';

class App extends Component {

    render() {
        console.log(this.props.authReducer.isLogged);
        return (
            <Router>
                <div>
                    <Route exact path={routes.HOME} component={Home} />
                    <Route path={routes.SIGN_IN} component={Login} />
                    {/* <Route path={routes.SIGN_UP} component={Register} /> */}
                    <Route
                        path={routes.SIGN_UP}
                        render={props =>
                            this.props.authReducer.isLogged ? (
                            <Register {...props} />
                        ) : (
                            <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                            />
                        )
                        }
                    />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        // getFetch: (email, password) => dispatch(getFetch(email, password))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
