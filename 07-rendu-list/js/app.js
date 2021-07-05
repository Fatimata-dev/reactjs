const prenoms = [
    'Aicha',
    'Bambi',
    'Fatimata',
    'Bilal'
];

class App extends React.Component {
    createPrenomsArrays(){
        const prenomsElementJSX = [];
        for(const [index, prenom]  of prenoms.entries()){
            const elementJSX = <li key={index+prenom}>{index + " " + prenom}</li>
            prenomsElementJSX.push(elementJSX);
        }
        return prenomsElementJSX;
    }
    render(){
        return(
            <React.Fragment>
                <h2>Liste des prenom</h2>
                <ul>
                    { this.createPrenomsArrays()}
                </ul>
                <h2>Avec la methode map</h2>
               <ol>
               {
                   prenoms.map(function (prenom,index){
                        return <li key={index + prenom}>{prenom}</li>
                   })
               } 
               </ol>
               <h2>Syntaxe raccourcie</h2>
               <ul>
               {
                   prenoms.map( (prenom,index) => <li key={index + prenom}>{prenom}</li>)
                   
               } 
               </ul>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));