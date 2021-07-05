function ShouldPrint(isOk){
    if (isOk == true) {
        return (
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse perspiciatis labore laborum itaque cum, ipsam vitae quia, sint eaque natus quo animi id quibusdam similique provident dignissimos amet voluptate?
            </p>
        )
    }else {
        return <p>Aucun texte à afficher</p>
    }
}
class WelcomePage extends React.Component{
    //constructor(props) {super(props)}
    render() {
        if(this.props.isLogged){
            return <p>Bienvenue sur ma page</p>
        }else{
            return <p>Vous devez etre connecter pour voir cette page</p>
        }
    }
}
function App(){
    const isOk = true;
    return  (
        <React.Fragment>
           <h2>avec le composant </h2>
           <WelcomePage isLogged={false}/>
            {
                ShouldPrint(isOk)
            }
            <h2>Avec un ternaire</h2>
            {
                (isOk == false)?
                <p>Super Ternaire</p>
                :
                <a href="#">Revenir à l'accueil</a>
            }
            

        </React.Fragment>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));