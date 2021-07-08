import React from 'react';

class CycleVie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date()
         }
         this.timer = null
    }
    updateDate = () =>{
        this.setState({ date: new Date() })
    }
    componentDidMount(){
            console.log("composant Monté");
          this.timer =  setInterval(this.updateDate , 1000)
    }
    componentDidUpdate(prevProps, prevState){
            console.log("Mis à jour", prevProps, prevState);
    }
    componentWillUnmount(){
        console.log("demontage du composant");
        clearInterval(this.timer);
    }
    render() { 
        return (
            //Syntaxe raccourcie pour React.Fragment 
        <>
            <p>Date: {this.state.date.toLocaleTimeString()}</p>
        </>  
        
        );
    }
}
 
export default CycleVie;