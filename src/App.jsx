import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/styles.css";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SighnUp from "./pages/SighnUp";

export default function App()  {
  const [menu, setMenu] = useState([])
  const [categories, setCategories] = useState([])
  const [users, setUsers] = useState([])
  const [loggedinUser, setloggedinUser] = useState("")
  const [searchInput, setSearchInput] = useState('')
  const [basket, setBasket] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/menu")
    .then((res) => res.json())
    .then(setMenu)

    fetch("http://localhost:4000/categories")
    .then((res) => res.json())
    .then(setCategories)

    fetch("http://localhost:4000/users")
    .then((res) => res.json())
    .then(setUsers)
  }, [])

  function addItemToTheCart(clickedItem) {
        const foundItemInBasket = basket.find(item => item.id === clickedItem.id)
        if (foundItemInBasket) {
            increaseQuantity(foundItemInBasket)
        } else {
            setBasket([...basket, {...clickedItem, quantity: 1}])
        }
    }

    function increaseQuantity(clickedItem) {
        const updatedBasket = basket.map(item => {
            if (item.id === clickedItem.id) {
                return {...item, quantity: item.quantity + 1}
            } else {
                return item
            }
        })
        setBasket(updatedBasket)
    }

    function decreseQuantity(clickedItem) {
        const updatedBasket = basket.map(item => {
            if (item.id === clickedItem.id) {
                return {...item, quantity: item.quantity - 1}
            } else {
                return item
            }
        }).filter(item =>  item.quantity > 0)
        setBasket(updatedBasket)
    }

    const logOut = () => {
      setloggedinUser(null);
      <Route path="/" exact>
        <Redirect to="/home"/>
      </Route>
    };

    let total = 0;
    for (const item of basket) {
      total += item.quantity * item.price;
    }

    return (
    <div className="App">
       <Header  total={total} loggedinUser={loggedinUser}  logOut={logOut} searchInput={searchInput} setSearchInput={setSearchInput} />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
            <Route path="/login" >
                {loggedinUser ? <Redirect to="/menu" /> : <Login users={users} setUsers={setUsers} loggedinUser={loggedinUser} setloggedinUser={setloggedinUser} />}
            </Route>
            <Route path="/sighnUp">
              <SighnUp users={users} setUsers={setUsers} />
            </Route>
            <Route path="/menu" >
               <Menu categories={categories} 
                  menu={menu} basket={basket} 
                  setBasket={setBasket} 
                  addItemToTheCart={addItemToTheCart}
                  searchInput={searchInput} 
               />
            </Route>
            <Route path="/reviews">
               <Reviews />
            </Route>
            <Route path="/basket">
               <Basket basket={basket} setBasket={setBasket} total={total} increaseQuantity={increaseQuantity} decreseQuantity={decreseQuantity} />
            </Route>
          </Switch>
        </main>
    </div>
  );

  
}
