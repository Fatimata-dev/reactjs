import React from 'react';
import {withRouter } from 'react-router-dom';

function Admin(props) {
    return (
        <React.Fragment>
            <h1>Page d'administration</h1>
            <button onClick={() => {
                localStorage.removeItem('user');
                props.history.push('/login');
            }}>
                Deconnexion
            </button>
        </React.Fragment>
    );
}
export default withRouter(Admin);