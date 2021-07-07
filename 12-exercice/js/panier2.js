class Panier extends React.Component {
    state = {
        produitPanier: [
            {id: 105, title: 'Lorem', price: 72.0, quantity: 1},
            {id: 206, title: 'Ipsum', price: 45, quantity: 1},
            {id: 207, title: 'Dolor', price: 32.0, quantity: 1},
        ]
    }

    incrementer = (id,) => {
        const nouveauxProduit = [...this.state.produitPanier];
        const index = nouveauxProduit.findIndex(produit => produit.id == id);
        const produit = nouveauxProduit[index];
        produit.quantity += 1
        this.setState({
            produitPanier: nouveauxProduit
        })
    }

    decrementer = (id) => {
        const nouveauxProduit = [...this.state.produitPanier];
        const index = nouveauxProduit.findIndex(produit => produit.id == id);
        const produit = nouveauxProduit[index];
        if (produit.quantity > 1) {
            produit.quantity -= 1
        }
        this.setState({
            produitPanier: nouveauxProduit
        })
    }

    retirerProduit(id) {
        // const nouveauxProduit = this.state.produitPanier.filter(p => p.id != id);

        const nouveauxProduit = [...this.state.produitPanier];
        const index = nouveauxProduit.findIndex(produit => produit.id == id);
        nouveauxProduit.splice(index, 1);

        this.setState({
            produitPanier: nouveauxProduit
        })
    }

    createProductRow = (produit) => {
        return (<tr key={produit.id}>
            <td>{produit.id}</td>
            <td>{produit.title}</td>
            <td>{produit.price}</td>
            <td>
                <button onClick={() => this.decrementer(produit.id) } className="btn btn-dark"> - </button>
                <span>{produit.quantity}</span>
                <button onClick={() => this.incrementer(produit.id) } className="btn btn-dark"> + </button>
            </td>
            <td>
                
                <button className="btn btn-dark" onClick={() => this.retirerProduit(produit.id) }>X</button>
            </td>
        </tr>
        );
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