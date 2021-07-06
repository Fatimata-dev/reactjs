/**
 * 2 types de composants: 
 *   - Les composants avec un etat local (il peuvent modifier des variables etc..)
 *   - Les composants sans etat, ne peuvent acceder aux donnĂ©es qu'en lecture seule (props)
 */


 class App extends React.Component {
    constructor(props) {
        super(props);
        // pour ajouter un etat local, on creer une variable qui s'appel state et qui est un objet
        this.state = {
            prenoms: [
                'Rick',
                'Beth',
                'Summer',
                'Jerry',
                'Morty'
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Liste des prenoms</h1>
                <ul>
                    {
                        this.state.prenoms.map((p,i) => <li key={p+i}>{p}</li>)
                    }
                </ul>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));