import React, { useEffect, useState } from 'react';

// function sameAsComponentDidMount() {
//     /*
//          Equivalent a componentDidMount, comme on a un tableau de dépendance vide,
//          useEffect ne se redéclenchera jamais.
//     */
//     useEffect(() => {
//         console.log("Composant Monté");
//     }, []);
// }

// function sameAsComponentDidUpdate() {
//     const [compteur, setCompteur] = useState(0);

//     /*
//          Equivalent a ComposantDidUpdate la fonction sera declencher a chaque changement de valeur.
//     */
//     useEffect(() => {
//         console.log("ComposantDidUpdate");
//     });
    
//     /**
//      * On peut redeclencher la fonction seulement si une ou plusieurs variable changent grace au []
//      */
//     useEffect(() => {
//         console.log("On surveille les changement de la variable compteur");
//     }, [compteur]);
// }

// function sameAsComponentDidWillUnMount() {
//     useEffect(() => {
//         // code ....
//         return () => {
//             console.log("Cette fonction est appellée uniquement si le composant est démonté");
//         }
//     });
    
//}

function HookLifeCycle(props) {
    const [date, setDate] = useState(new Date());

    // ComponentDidUpdate: A chaque mise a jour, la callBack de useEffect() est réexecuter

    /*
     * useEffect(callBack, []) <- revient a faire un componentDidMount. useEffect ne sera 
     * appeler qu'une seule fois (à la creation du composant).
     * Les [] permettent de ré exécuter la callBack uniquement lorsque ces variables changent
     *      ex: [date, message]
     * useEffect(callBack) et peut renvoyer une fonction de nettoyage. Equivalent a 
    */
    useEffect(
        () => {
            console.log("Mis à jour");
            const timer = setInterval(() => setDate(new Date()), 1000)
            return function cleanUp() {
                //appeler lors du demontage du composant
                clearInterval(timer);
            }
        },
        []
    );

    useEffect( () => {}, [date]);

    return (
        <React.Fragment>
            <p>Heure: { date.toLocaleTimeString() }</p>
            <button onClick={() => setDate(new Date())}>
                Mettre à jours la date
            </button>
        </React.Fragment>
    );
}
export default HookLifeCycle;