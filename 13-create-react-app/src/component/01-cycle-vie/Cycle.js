import React from 'react';

class CycleVie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
            console.log("composant Monté");
    }
    componentDidUpdate(){
            console.log("Mis à jour");
    }
    componentWillUnmount(){
        console.log("demontage du composant");
    }
    render() { 
        return (
            //Syntaxe raccourcie pour React.Fragment 
        <>
        </>  
        
        );
    }
}
 
export default CycleVie;