const produits = [
    {
       "id":1,
       "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
       "price":109.95,
       "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
       "id":2,
       "title":"Mens Casual Premium Slim Fit T-Shirts ",
       "price":22.3,
       "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    },

    {
       "id":3,
       "title":"Mens Cotton Jacket",
       "price":55.99,
       "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    }
 
 ]
function Produit (props){
        return (
         <tr>
          <td scope="row">{props.id}</td>
          <td >{props.title}</td>
          <td>{props.price}</td>
          <td>{props.description}</td>
        </tr> 
        )
    
}
 function createTabElement(produit) { 
    return(
//<produit { ...produit }/> 
       <Produit id={produit.id} title={produit.title}  price={produit.price} description={produit.description} key={produit.id}></Produit>     
     )
}
 
 
 class Produits extends React.Component {
     render(){
         return(
            (!produits.length)? <p>Il n'y a aucun produits</p>: 
             <React.Fragment>
             
                 <table className="table table-dark table-hover"> 
                 <thead>
                 <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Description</th>
                </tr>
                 </thead>
                

                 <tbody>
                  
                   {
                         produits.map(createTabElement)
                    }
             
                 </tbody>
                 </table>
             </React.Fragment>
         )
     }
 }
 ReactDOM.render(<Produits/>, document.getElementById('root'));