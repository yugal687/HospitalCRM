import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const auth = {
    is_auth: false
}
const token = localStorage.getItem('token');

console.log(token);
export const Guard = ({component: Component, token: Token, ...rest}) => (
    <Route {...rest} render={
        props => (
            //    localStorage.getItem(Token) ?
            token ? <Component/> : <Redirect to={{pathname: "/"}}/>
        )

    }/>
)
