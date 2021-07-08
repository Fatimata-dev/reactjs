import React from 'react';


function DeepChild(props){
    return (
        <>
            <h3>Deep Child {props.childValeur}</h3>
            <button onClick={props.chilIncre}>Incrementer</button>
        </>
    );
}
export default DeepChild;