import React from 'react';

function Params(props) {
    console.log(props.match.params);
    return ( 
        <React.Fragment>
            <p>Le titre est: {props.match.params.titre} </p>
        </React.Fragment>
     );
}
 
export default Params;