import React from 'react';
import { connect } from 'react-redux';

function incrementer (props) {
    const action = {
        type: 'incrementer'
    }
    // dispatch appelle la fonction reducer
    props.dispatch(action);
}

function ReduxCompteur(props) {
    return (
        <React.Fragment>
            <h1>Compteur: {props.myCompteur}</h1>
            <button onClick={() => incrementer(props)}>
                Incrementer
            </button>
            <button onClick={() => {
                props.dispatch({type: 'decrementer'})
            }}>
                decrementer
            </button>
            <button onClick={() => props.myIncrementerX(9)}>
                Incrementer 9
            </button>
        </React.Fragment>
    );
}

/**
 * Ajouter les variables de l'etat global (store)
 * dans les props du composants.
 * 2 parametres: 
 *      - state: le state du store
 *      - ownProps: les props du composants.
 */
function mapStateToProps(state, componentProps) {
    console.log("State: ", state);
    console.log("Les props du composants: ", componentProps);
    const nouvellesProps = {
        myCompteur: state.compteur
    }
    return nouvellesProps;
}

// const voiture = {
//     couleur: 'bleu',
//     peindre: function() {

//     }
// }
// Fait par defaut: 
function mapDispatchToProps(dispatch) {
    return {
        myIncrementerX: function (userID) { 
            let action;
            if (userID > 3) {
                action = {
                    type: 'incrementerX',
                    payload: userID + 8
                }
            } else {
                action = {
                    type: 'incrementerX',
                    payload: 1
                }
            }
            dispatch(action) 
        },
        dispatch
    }
};

/**
 * connect(): prend en parametre la fonction qui permet de fusionner le state et les props
 * et renvoie une fonction qui permet de connecter le composant de notre choix.
 */
const composantAConnecter = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = composantAConnecter(ReduxCompteur);
// export default ReduxCompteur;
export default connectedComponent;

// Revient a la meme chose.
// export default connect(mapStateToProps)(ReduxCompteur);