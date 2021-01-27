import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = {
    is_auth: true
}
const Guard = (auth, { component: Component, token: Token, ...rest }) => {
    <Route {...rest} render={
        props => {
            //    localStorage.getItem(Token) ?
            auth.is_auth ? <Component /> : <Redirect to={{ pathname: "/" }} />
        }

    } />


    export default Guard;
}
