import React from 'react';
import store from '../../store';

/**
 * Dispatch prend en parametre une action
 */
function incrementerBouton() {
    const action = {
        type: 'incrementer',
        payload: 1
    }
    store.dispatch(action);
}

function ReduxCompteur(props) {
    console.log(store);
    console.log(store.getState());
    const countStore = store.getState();
    return (
        <React.Fragment>
            <h1>Compteur: {countStore.compteur}</h1>
            <button onClick={incrementerBouton}>
                Incrementer
            </button>
        </React.Fragment>
    );
}
export default ReduxCompteur;