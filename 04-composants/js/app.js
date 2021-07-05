/*
* 2 types de composants
*    - les fonctions composants (n'ont pas d'état)
*    - les classes composants (ont d'état local)
*/
// une fonction composant renvoi du JSX
function Product() {
    return <p>Produit</p>
}
// on utilise les props pour recuperer les attribut sur la balise
// le paramettre props est un objet qui contient toutes le valeurs
function ProductName(props) {
    console.log(props.nom);
    return (<p>Produit: {props.nom}</p>)
}
function Personne(props) {
    return (
        
        <p>
            { props.children }
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ea maxime debitis, facere quos, veritatis voluptatem laudantium cumque temporibus soluta aspernatur officiis possimus. Officia dolorum enim explicabo, perspiciatis aliquam deleniti!
        </p>
    );
}
class PersonneName extends React.Component {
    constructor(props){
    //on appelle le constructeur de la classe mere 
    super(props);
    }
    render(){
        return (
            <di>
                <p>Nom: {this.props.nom}</p>
            </di>
        )
    }
}
// Une classe composant en js extends = heriter
class App extends React.Component {
    // constructor() {

    // }
    render(){
        return (
            // on peut faire le traitement que l'on veut
            <div>
                <Product/>
                <ProductName nom="banane"/>
                <ProductName nom="Fraise"/>
                <Personne>
                    <label htmlFor="age">Votre age</label>
                    <input type="text" id="age"/>
                    <br/>
                    <a href="#">Plus d'info</a>
                    <br/>
                </Personne>
                <PersonneName  nom="Drame"/>
            </div>
        )
    }
}
// //ReactDOM.render(Product, document.getElementById('root'));
// ReactDOM.render(<Product/>, document.getElementById('root'));
// ReactDOM.render(<ProductName nom="banane"/>, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));