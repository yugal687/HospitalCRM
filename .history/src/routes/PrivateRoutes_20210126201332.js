import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = {
    is_auth: true
}

export const privateRoutes = (auth, {component:Component, token, ...rest }) => {
    <Route {...rest} render={
      props => {


        }

    } />


}
