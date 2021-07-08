import React from 'react';
import Deepchild from './DeepChild';

function ChildCompteur(props){
    return (

        <>
         <h2>Child Compteur: {props.myValeur}</h2>
         <Deepchild chilIncre={props.myIncrementer} childValeur={props.myValeur}/>
        </>
    );
}
export default ChildCompteur;