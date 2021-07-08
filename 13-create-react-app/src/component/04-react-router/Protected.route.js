import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function Protected(props) {
    const user = localStorage.getItem('user');
    console.log("Props: ", props, user);
    const Component = props.component;
    return (
        <Route
            path={props.path}
            component={() => {
                if (user != null) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    );
}
export default Protected;