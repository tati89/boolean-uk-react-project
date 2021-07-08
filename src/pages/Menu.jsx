import "../css/menu.css"
import { Link, Route } from "react-router-dom"
import CategoryPage from "./CategoryPage"

function Menu({categories, menu, basket, setBasket, addItemToTheCart, searchInput}) {
    return(
        <section className="menu">
             <div >
                 <ul className="left-menu">
                     <h2 className="categories-header">Categories:</h2>
                     {categories.map(category => (
                         <li key={category.id}><Link to={`/menu/${category.id}`} className="category-link">{category.name}</Link></li>
                     ))}
                 </ul>
             </div>
             <div className="right-menu">
                 <Route exact path="/menu">
                     <div className="menu-wrapper">
                     {categories.map(category => (
                        <div key={category.id} className="menu-category" style={{ 
                            backgroundImage: `url(${category.img})`
                            }}>
                            <Link key={category.id} to={`/menu/${category.id}`}  className="category-link"><p className="category-title">{category.name}</p> </Link>
                        </div>
                     ))}  
                 </div>
                 </Route>
                 <Route path="/menu/:id">
                    <CategoryPage menu={menu} basket={basket} setBasket={setBasket} addItemToTheCart={addItemToTheCart} searchInput={searchInput}  />
                 </Route>
                 
             </div>

        </section>
       
    )
}

export default Menu