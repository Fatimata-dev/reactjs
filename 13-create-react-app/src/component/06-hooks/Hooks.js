import React, { useState } from 'react';
import Time from './Time';
import usesearch from './UseSearch';

/**
 * Le hook d'etat permet de creer un etat local dans des fonctions composants (ne fonctionne pas avec les classes)
 * setCompteur est equivalent au setState dans les classes composants.
 */
function Hook(props) {
    /**
     * useState prend en argument la valeur initiale
     */
    // const compteurState = useState(0);
    // const compteur = compteurState[0];
    // const setCompteur = compteurState[1];
    const [compteur, setCompteur] = useState(0);
    const [recherche, setRecherche] = useState('');
    const onSearch = usesearch('')[1];

    return (
        <React.Fragment>
            <p>Compteur: { compteur }</p>
            <button onClick={() => setCompteur(compteur + 1)}>
                Incrementer
            </button>
            <p>Votre Recherche: {recherche}</p>
            <input type="text" placeholder="Rechercher" onChange={
                (event) => {
                    setRecherche(event.target.value);
                    onSearch(event.target.value);
                }
            }/>
            <hr/>
            <Time/>
        </React.Fragment>
    );
}
export default Hook;