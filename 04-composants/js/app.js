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
            </div>
        )
    }
}
// //ReactDOM.render(Product, document.getElementById('root'));
// ReactDOM.render(<Product/>, document.getElementById('root'));
// ReactDOM.render(<ProductName nom="banane"/>, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));