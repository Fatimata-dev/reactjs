function Header(props) {
    return (
        <header style={props.monStyle}>
            <h1 >{ props.titre }</h1>
            <i className="fas fa-shopping-cart"></i>
            <p>0</p>
            <img src={props.imgSrc}/>
        </header>
    );
}

class App extends React.Component {
    render() {
        const myColor = 'red'
        return (
            // En React, on doit avoir une seule balise à la racine, si on veut mettre plusieurs balises
            // il faut les englober avec une balise de type block.
            // Mais les div peuvent poser des problemes parfois (style css)
            // A la place, on peut mettre un React.Fragement qui sera remplacé par rien du tout
            // au moment du rendu
            <React.Fragment>
                <Header
                    titre="ReShopAct" 
                    imgSrc="https://picsum.photos/200/300"
                    monStyle={ { color: myColor, backgroundColor: 'wheat'} }
                    />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));