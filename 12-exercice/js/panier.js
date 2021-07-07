function ProduitPanier(props) {
    // const id = props.id;
    // const title = props.title;
    const {id, title, price, quantity} = props;
    return (
       <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{price}</td>
          <td>
            <button onClick={() => props.myEditQuantite(id, 1) } className="btn btn-dark"> + </button>
            <span>{quantity}</span>
            <button onClick={() => props.myEditQuantite(id, -1) } className="btn btn-dark"> - </button>
          </td>
          <td>
              
              <button className="btn btn-dark">X</button>
          </td>
       </tr>
    );
}

class Panier extends React.Component {
    state = {
        produitPanier: [
            {id: 105, title: 'Lorem', price: 72.0, quantity: 1},
            {id: 206, title: 'Ipsum', price: 45, quantity: 1},
            {id: 207, title: 'Dolor', price: 32.0, quantity: 1},
        ]
    }

    editQuantite = (id, newQuantity, increment=false) => {
        console.log("ID: " + id);
        const nouveauxProduit = [...this.state.produitPanier];
        // let index = -1;
        // for (let i = 0,; i < nouveauxProduit.length; i++) {
        //     if (nouveauxProduit[i].id == id) {
        //         index = i;
        //     }
        // }
        const index = nouveauxProduit.findIndex(produit => produit.id == id);
        const produit = nouveauxProduit[index];
        if (produit.quantity + newQuantity > -1) {
            produit.quantity += newQuantity
        }
        this.setState({
            produitPanier: nouveauxProduit
        })
    }

    createProductRow = (produit) => {
        return <ProduitPanier 
           key={produit.id}
           id={produit.id} 
           title={produit.title} 
           quantity={produit.quantity} 
           price={produit.price}
           myEditQuantite={this.editQuantite}
           />;
     }

    render() {
        return (
            <React.Fragment>
                {
                    (!this.state.produitPanier.length) ? <p>La liste est vide.</p> : 
                    <table  className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Quantite</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                { this.state.produitPanier.map(this.createProductRow)}
                        </tbody>
                    </table>
                }
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Panier/>, document.getElementById('root'));