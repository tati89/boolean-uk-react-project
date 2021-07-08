import BasketItem from "../components/BasketItem"
import "../css/basket.css"
function Basket({basket, setBasket, total, increaseQuantity, decreseQuantity}) {
   
    return (
        
  <section className="basket-container">
    <h2>Your Basket</h2>
    <div className="min-order">
        <h3>{total < 25 ? `Minimum order £25.00. Please add £${(25 - total).toFixed(2)} pounds to proceed with your order.` : 'Proceed to checkout'}</h3>
    </div>
    <ul>
        {basket.map(item => (
            <BasketItem key={item.id} item={item} basket={basket} setBasket={setBasket} increaseQuantity={increaseQuantity} decreseQuantity={decreseQuantity}/>
        ))}
    </ul>
    <h3>Total: £{total.toFixed(2)}</h3>
  </section>

    )
}

export default Basket