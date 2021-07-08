// import { combineReducers } from 'redux';
import { createStore } from 'react-redux';

const etatInitial = {
    compteur: 0,
}

/**
 * Le Reducer est une fonction qui permet d'initialiser l'etat global 
 * et de selectionner un traitement à effectuer
 * cette selection se fait par rapport à une action.
 * une action c'est un simple objet javascript avec dedans:
 *   - les nouvelles données (payload)
 *   - le type d'action (string)
 * const action = {
 *      type: 'incrementer',
 *      payload: 1
 * } 
 */
function countReducer(state=etatInitial, action) {
    switch(action.type) {
        case 'incrementer':
            break;
        case 'decrementer':
            break;
        case 'reset':
            break;
        default:
            return state;
    }
}

const store = createStore(countReducer);
export default store;