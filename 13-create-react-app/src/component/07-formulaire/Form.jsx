import React from 'react';

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            age: 0,
            city: '',
            cgu: true,
            formErrors: {
                nom: '',
                prenom: ''
            }
        };
    }

    changerNom = (event) => {
        let errorMsg = '';
        if (event.target.value.length < 2) {
            errorMsg = 'Le nom doit faire 2 caractĂ¨res minimum'
        }
        const copyErrors = {...this.state.formErrors};
        this.setState({ 
            nom: event.target.value,
            formErrors: {
                ...copyErrors,
                nom: errorMsg
            }
        })
    }

    changerPrenom = (event) => {
        this.setState({
            prenom: event.target.value
        })
    }

    onChangeHanlder = (event) => {
        const nomDuChamp = event.target.name;
        const typeDuChamp = event.target.type; 
        let valeur;
        if (typeDuChamp === 'checkbox' || typeDuChamp === 'radio') {
            valeur = event.target.checked
        } else {
            valeur = event.target.value
        }
        console.log(valeur);
        this.setState({
            // 'email': event.target.value
            [nomDuChamp]: valeur
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        {/* le champ devient controlĂ© par React */}
                        <input value={this.state.nom} onChange={this.changerNom} type="text" name="name" id="name" className="form-control"/>
                        <p>{ this.state.formErrors.nom }</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Prenom</label>
                        <input value={this.state.prenom} onChange={this.changerPrenom} type="text" name="firstname" id="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={this.state.email} onChange={this.onChangeHanlder} type="email" name="email" id="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input value={this.state.age} onChange={this.onChangeHanlder} type="number" name="age" id="age" className="form-control"/>
                    </div>

                    <div>
                        <label htmlFor="cities">Ville</label>
                        <select onChange={this.onChangeHanlder} className="form-control form-control-lg" name="city" id="cities">
                            <option>Paris</option>
                            <option>Rennes</option>
                            <option>Nantes</option>
                            <option>Lyon</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input onChange={this.onChangeHanlder} value={this.state.cgu}  name="cgu" className="form-check-input" type="checkbox" id="cgu" />
                        <label className="form-check-label" htmlFor="cgu">
                            J'accepte les Conditions GĂ©nĂ©rales d'Utilisation
                        </label>
                    </div>
                    <input type="submit" value="Valider" className="btn btn-success"/>
                </form>
            </div>
        );
    }
}
export default Formulaire;