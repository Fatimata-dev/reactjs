

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           aliments: [
                'Riz',
                'Pattes',
                'Ceréales',
                'Farines'
            ]
        }
    }
    render() {
        return(
            <div>
                {
                    (!this.state.aliments.length) ? <p>Il n'ya pas d'aliments</p>: 
                    <ul>
                        {
                            this.state.aliments.map((aliment , index) =>{
                                return <li key={index+aliment}>{aliment}</li>
                            })
                            
                            
                        }
                    </ul>
                }
                
            </div>
        )
    }
    
}
ReactDOM.render(<App/>, document.getElementById('root'));