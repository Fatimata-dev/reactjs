/**
 * <Header/>
 * <Navigation>
 *      <ul></ul>
 * </Navigation>
 * <Product/>
 */

/**
 * 2 types de composants
 *      - Les fonctions composants (n'ont pas d'état)
 *      - Les classes composants (ont un état local)
 */

// une fonction composant renvoie du JSX.
function Product() {
    return <p>Produit</p>
}

// Les props sont utilisée pour recuperer les attribut sur la balises.
// Le parametre props est un objet qui contient toutes les valeurs
function ProductName(props) {
    console.log(props.nom);
    // Pour inserer des valeurs dans du JSX on utilise les accolades simples.
    return <p>Produit: { props.nom }</p>
}

function Personne(props) {
    console.log(props.children);
    return (
        <p>
            { props.children }
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, autem nobis! Commodi vero itaque iusto veniam facilis, excepturi eveniet error, est maxime, tempore dolor numquam porro. Aspernatur nemo nobis nihil!
        </p>
    );
}

class PersonneName extends React.Component  {
    // Fait par defaut, par javascript
    constructor(props) {
        // Appelle le constructeur de la classe Mere ( Component(props) )
        super(props);
    }

    render() {
        return (
            <div>
                <p>Nom: { this.props.prenom }</p>
            </div>
        );
    }
}

// Une classe composant. En javascript le mot clef extends permet l'héritage
class App extends React.Component {
    // constructor(props) {

    // }
    render() {
        // on peut faire le traitement que l'on veut
        return (
            <div>
                <Product/>
                <ProductName nom="banane" />
                <ProductName nom="pomme" />
                <Personne>
                    <label htmlFor="age">Votre age</label>
                    <input type="text" id="age" />
                    <br/>
                    <a href="#">plus d'information</a>
                    <br/>
                </Personne>
                <PersonneName prenom="John"/>
            </div>
        );
    }
}

// ReactDOM.render(Product(), document.getElementById('root'));
// ReactDOM.render(ProductName({nom: 'pomme', message=''}), document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));
 