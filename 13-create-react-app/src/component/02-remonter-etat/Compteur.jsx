import React from 'react';
import ChildCompteur from './ChildCompteur';

class Compteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compteur: 0
          }
    } 
    incrementer = () =>{
    //    let compteur = this.state.compteur;
    //     this.setState({compteur: compteur++})
            let compteur = this.state.compteur +1 ;
            this.setState({compteur})
    }
    render() { 
        return ( 
            <>
                <h1>
                    Compteur: {this.state.compteur}
                </h1>
                <ChildCompteur  myValeur={this.state.compteur}  
                myIncrementer={this.incrementer}
                
                />
            </>
          );
    }
}
 
export default Compteur;