function Button(props){
    const classcss = `btn ${props.typeCss} `
    return (
        <button className={classcss}>
            {props.children}
        </button>
    );
}

function App(){
    const monStyle = {
        with: '300px',
        backgroundColor: 'blue'
    }
    let isActive = false
    return(
        <div>
            <h1>Lorem ipum</h1>
            <h2 style={monStyle}> Lorem ipum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eius cupiditate voluptates corporis impedit corrupti atque iusto minus incidunt doloribus sint accusantium, molestiae vero dolores quos sit perspiciatis, exercitationem veritatis.
            </p>
            <p className={ isActive ? '' : 'text'}>Lorem ipsum</p>
            <Button typeCss="success">Cliquez ici</Button>
            <Button typeCss="danger">Cliquez ici</Button>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))