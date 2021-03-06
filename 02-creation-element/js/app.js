const element = React.createElement("h2", {}, "Marhaban Dounia !");
ReactDOM.render(element, document.getElementById('root'));

//On ne peut utiliser ReactDOM.render() qu'une seule fois sinon on écrase le contenu précedent
//const element2 = React.createElement("h2", {}, "Bonjour  !");
//ReactDOM.render(element2, document.getElementById('root'));

/**
 * <ul>
 *      <li>...</li>
 * </ul>
**/

const lisElement = React.createElement("ul", {},
React.createElement('li', null, "Elephant"),
React.createElement('li', {className: 'li-item'}, "Tigre"),
React.createElement('li', {}, "Chameau"),
React.createElement('li', {id: 'li-1'}, React.createElement('a', {href: '#'}, 'Cheval'))
);
ReactDOM.render(lisElement, document.getElementById('root'));

// Avec du jsx

const helloJSX = <h1>Hello World !!!</h1>;
const lisElementJSX = (
    <ul>
        <li>Chat</li>
        <li id="item">Lapin</li>
        <li className="li-item"><a href="#">Chameau</a></li>
    </ul>
)
ReactDOM.render(lisElementJSX, document.getElementById('root'));

// const app = (
//     <div>
//         <p>...</p>
//     </div>
// );
// ReactDOM....