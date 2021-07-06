class ThisReference extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.afficherNomBinding = this.afficherNomBinding.bind(this);
    }
    afficherNom(){
        console.log(this);
    }
    afficherNomBinding(){
        console.log(this);
    }
    afficherNomFleche = () => {
        console.log(this);
    }
    render(){
        return(
            <div style={{backgroundColor: 'wheat', padding: '10px'}}>
                <p>L'orsqu'on clique sur le boutton, la fonction afficherNom perd son contexte et utilise celui de la fonction onClick</p>
                <button onClick={this.afficherNom}>Perte de contexte</button>
                <button onClick={this.afficherNomFleche}>garde de contexte</button>
                <button onClick={()=>this.afficherNom()}>garde de contexte(1)</button>
                <button onClick={()=>this.afficherNomBinding()}>garde de contexte(2)</button>
            </div>
        );
    }
}

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { }
    // }
    state = {
        prenom: 'Timfa',
        prenoms: ['John', 'Maude', 'Ella', 'Rick']
    }

    sayHello() {
        console.log("Bonjour !");
    }

    // l'argument event est transmit automatiquement par Reactjs
    afficherEvent(event) {
        console.log(event);
    }

    afficherSaisi(event) {
        console.log(event.target.value); 
    }

    getId(id) {
        console.log("Id: ", id);
    }

    // transmitGetId() {
    //     this.getId(5)
    // }

    changerPrenom() {
        console.log(this);
        // on ne modifie jamais le state directement
        // this.state.prenoms[0] = "Maude"
        const nouveauTableau = [...this.state.prenoms];
        nouveauTableau[0] = "Aicha"
        const nouveauState = {
            prenom: 'Fatimata',
            prenoms: nouveauTableau
        }
        this.setState(nouveauState);
    }

    render() {
        return (
            <div>
                <p>{this.state.prenom}</p>
                {/* pas de parentheses lors de l'appel */}
                <button onClick={this.sayHello}>Dire Bonjour</button>
                <button onClick={this.afficherEvent}>Afficher Evenement</button>
                <input type="text" placeholder="ex: John" onChange={this.afficherSaisi}/>
                {/* <button onClick={this.getId}>Recuperer Id</button> <- Envoi automatiquement l'evenement en parametre */}
                {/* <button onClick={this.getId(5)}>Recuperer Id</button> <- Fonctionnera seulement une seule fois au chargement de la page  */}
                {/* 
                    Lorsqu'on clique sur le bouton, la fonction fléchée est executée, et son role c'est d'executer
                    votre fonction avec le bon argument (la bonne valeur)
                 */}
                <button onClick={() => this.getId(5)}>Recuperer Id</button>
                {/* <button onClick={this.transmitGetId}>Recuperer Id</button> */}
                <button onClick={() => this.changerPrenom()}>Changer le nom</button>
                <ThisReference/>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));