class Person extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }
    state = {
        prenom: ''
    }
    changerPrenom = (event) =>{
        //console.log(event.target.value)
        const nouveauPrenom = event.target.value;
        this.setState({prenom: nouveauPrenom});
    }
    render(){
        return(
            <React.Fragment>
                <p>{this.state.prenom}</p>
                <input type='text' placeholder="ex: Timfa" onChange={this.changerPrenom} />
                {/* <input type='text' placeholder="ex: Timfa" onChange={(event) => this.changerPrenom(event)} /> */}
            </React.Fragment>
            
        );
    }
}
ReactDOM.render(<Person/>, document.getElementById('root'))