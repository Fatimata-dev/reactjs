function Header(props) {
    
        return (
            <header>
                <h1 style={props.monStyle}>{props.title}</h1>
                <i style={props.monStyle} className="fas fa-shopping-cart"></i>
                <p>0</p>
                <img src={props.imgSrc} />
            </header>
           
        )
   
}

class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header 
                title="ReshopAct" 
                imgSrc="https://docs.montagne-vacances.com/actualites/large/les-cascades-de-montagne-239.jpg"
                monStyle={{color:'red', fontSize:'50px'}}
                />
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));