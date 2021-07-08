import React from 'react';
import store from '../../store';

function incrementerBouton() {
    
}
function ReduxCompteur(props)  {
    return ( 
        <>
         <h1>Compteur</h1>
        <button onClick={incrementerBouton}>Incrementer</button>
        </>
       
     );
}
 
export default ReduxCompteur;