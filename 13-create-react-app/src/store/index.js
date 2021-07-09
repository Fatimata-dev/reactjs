// import { combineReducers } from 'redux';
import { createStore } from 'redux';

const etatInitial = {
    compteur: 0
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
 *      payload: 2
 * } 
 */
function countReducer(state=etatInitial, action) {
    
    switch(action.type) {
        case 'incrementer':
            const nouveauxState = {...state};
            // toujours copier le state avant modification
            nouveauxState.compteur++;
            // nouveauxState.compteur = action.payload
            console.log(nouveauxState);
            return nouveauxState;
        case 'decrementer':
            return {
                ...state,
                compteur: state.compteur - 1 
            }
        case 'incrementerX':
            return {
                ...state,
                compteur: action.payload
            }
        case 'reset':
            break;
        default:
            return state;
    }
}

const store = createStore(countReducer);
export default store;