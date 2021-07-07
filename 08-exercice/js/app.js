const aliments = [
    'Riz',
    'Pattes',
    'Ceréales',
    'Farines'
];


function Aliments() {
    return (
        <div>
        {
            (aliments.length < 1) ? <p>La liste est vide</p>:
            <ul>
                {
                    this.state.aliments.map((aliment , index) => {
                        return <li key={index+aliment}>{aliment}</li>
                     })
                }
                
            </ul>
        }
    </div>
    )
   
}
class App extends React.Component {
   
        render(){
            return(
                <React.Fragment>
                    
                       <Aliments/>
                   
                </React.Fragment>
            )
        }
}
ReactDOM.render(<App/>, document.getElementById('root'));
