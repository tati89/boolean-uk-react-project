import { useState } from "react";
import { useParams } from "react-router-dom"
import "../css/categoryPage.css"

function CategoryPage({menu, basket, setBasket, addItemToTheCart, searchInput}) {
    const [showVegeterian, setShowVegeterian] = useState(false)
   
    const {id} = useParams()


    let filteredMenu = menu 

    if (searchInput) {
        filteredMenu = filteredMenu.filter((item) => 
            item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.description.toLowerCase().includes(searchInput.toLowerCase())
        )
    }

    if (id) {
        filteredMenu = filteredMenu.filter((item) => item.categoryId === Number(id));
    }

    if (showVegeterian) {
        filteredMenu = filteredMenu.filter((item) => item.vegan === showVegeterian );
    }

    function showVegetarianOptions(e) {
        setShowVegeterian(e)
    }


    return (
        <section>
            {/* <div className="text-wrapper">
                <h1>This menu is a fusion of our heritage and knowledge of Spanish and Italian cuisines. You will find the perfect combination between traditional pastas, tapas & Neapoletan pizzas cooked fresh in a wood fired oven together with a number of special to take you in a culinary tour of our beloved Spain & Italy.</h1>
            </div> */}
            <div>
                <label htmlFor="show-vegetarian-only">Vegetarian options only    <input
                    id="show-vegetarian-only"
                    type="checkbox"
                    checked={showVegeterian}
                    onChange={e => showVegetarianOptions(e.target.checked)}
                />
                </label>
            </div>

            <div className="cards-wrapper">
                {filteredMenu.map(item => {
                
                    return (
                    <div key={item.id} className="product-card">
                        <div className="frame">
                            <img src={item.img} alt="img" />
                        </div>
                        <div>
                            {item.vegan ? <svg  height="24" width="24" version="1.1">
                                <g transform="translate(0 -1028.4)">
                                <path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1029.4)" fill="#27ae60"/>
                                <path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1028.4)" fill="#2ecc71"/>
                                <path d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z" fill="#27ae60"/>
                                <path d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z" fill="#ecf0f1"/>
                                </g>
                            </svg> : ""}
                        </div>
                        <span className="product-title">{item.title}</span>
                        <div className="button-add-price-wrapper">
                            <span>£{item.price}</span>
                            <div>
                                <button onClick={() => addItemToTheCart(item)} className="product-button"> ADD </button>
                            </div>
                        </div>
                    </div>       
                )})}
            </div> 
        </section>
    
    )
}

export default CategoryPage