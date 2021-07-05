const Element = React.createElement("div", {className:"container"},
React.createElement('header',{},
<header>
        <h1>Header</h1>
        <i className="fas fa-cat"></i>
        <p >25</p>
    </header>

),
React.createElement('h1', null, "Bonjourrrrrrrr !!!!!!"),
React.createElement('p', null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus vitae distinctio culpa placeat quibusdam omnis excepturi labore molestiae quasi sunt similique animi non architecto tempore dolor laudantium, vel optio"),
React.createElement('img', {src:"https://www.atalante.fr/upload_1000/DSCF4994.jpg", alt:"Chameau"}),

);



ReactDOM.render(Element, document.getElementById('app'));