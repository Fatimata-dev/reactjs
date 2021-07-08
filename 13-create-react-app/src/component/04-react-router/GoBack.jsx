import React from 'react';

function  GoBack(props)  {
    return ( 
        <React.Fragment>
            <h2>Retour sur la page précédente</h2>
            <button onClick={()=> props.history.goBack()}>Retour</button>
            <button onClick={()=> props.history.push('/')}>Aller à l'accueil</button>
        </React.Fragment>
     );
}
 
export default GoBack ;