import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/styles.css";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Basket from "./pages/Basket";
import Home from "./pages/Home";

export default function App()  {
  const [menu, setMenu] = useState([])
  const [categories, setCategories] = useState([])

  const [basket, setBasket] = useState([
     {
      "id": 2,
      "title": "Garlic bread with cheese ",
      "price": 5.25,
      "description": "A touch of tomato sauce, with mozarella, garlic and oregano.",
      "vegan": true,
      "quantity": 1,
      "categoryId": 1,
      "img": "https://www.inspiredtaste.net/wp-content/uploads/2012/11/Garlic-Bread-Recipe-2-1200.jpg"
    },
    {
      "id": 3,
      "title": "Tabla De Jamon Serrano y Queso Manchego ",
      "price": 9.95,
      "description": "Serrano ham and Manchego cheese board serve with focaccia bread.",
      "vegan": false,
      "quantity": 2,
      "categoryId": 1,
      "img": "https://img.blogs.es/alhambra2/wp-content/uploads/2020/01/tabla1-1080x675.jpg"
    },
  ])

  useEffect(() => {
    fetch("http://localhost:4000/menu")
    .then((res) => res.json())
    .then(setMenu)

    fetch("http://localhost:4000/categories")
    .then((res) => res.json())
    .then(setCategories)
  }, [])

  function checkOut() {
    <Route path="/basket" exact>
        <Basket />
     </Route>
  }

  let total = 0;
   for (const item of basket) {
    total += item.quantity * item.price;
   }

    return (
    <div className="App">
       <Header checkOut={checkOut} total={total} />
      <body>
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
            <Route path="/menu" >
               <Menu categories={categories} menu={menu} setMenu={setMenu} />
            </Route>
            <Route path="/reviews">
               <Reviews />
            </Route>
            <Route path="/basket">
               <Basket basket={basket} total={total} />
            </Route>
          </Switch>
        </main>
      </body>
    </div>
  );

  
}
