import "./css/styles.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SighnUp from "./pages/SighnUp";
import AddReview from "./pages/AddReview";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [loggedinUser, setloggedinUser] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [reviews, setReviews] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((res) => res.json())
      .then(setMenu);

    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then(setCategories);

    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then(setUsers);

    fetch("http://localhost:4000/reviews")
      .then((res) => res.json())
      .then(setReviews);
  }, []);

  function addItemToTheCart(clickedItem) {
    if (loggedinUser) {
      const foundItemInBasket = basket.find(
        (item) => item.id === clickedItem.id
      );
      if (foundItemInBasket) {
        increaseQuantity(foundItemInBasket);
      } else {
        setBasket([...basket, { ...clickedItem, quantity: 1 }]);
      }
    } else {
      alert("Please login first");
    }
  }

  function increaseQuantity(clickedItem) {
    const updatedBasket = basket.map((item) => {
      if (item.id === clickedItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setBasket(updatedBasket);
  }

  function decreseQuantity(clickedItem) {
    const updatedBasket = basket
      .map((item) => {
        if (item.id === clickedItem.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity > 0);
    setBasket(updatedBasket);
  }

  const logOut = () => {
    setloggedinUser(null);
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>;
  };

  let total = 0;
  for (const item of basket) {
    total += item.quantity * item.price;
  }

  return (
    <div className="App">
      <Header
        total={total}
        loggedinUser={loggedinUser}
        logOut={logOut}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            {loggedinUser ? (
              <Redirect to="/menu" />
            ) : (
              <Login users={users} setloggedinUser={setloggedinUser} />
            )}
          </Route>
          <Route path="/sighnUp">
            {loggedinUser ? (
              <Redirect to="/menu" />
            ) : (
              <SighnUp
                users={users}
                setUsers={setUsers}
                setloggedinUser={setloggedinUser}
              />
            )}
          </Route>
          <Route path="/menu">
            <Menu
              categories={categories}
              menu={menu}
              addItemToTheCart={addItemToTheCart}
              searchInput={searchInput}
            />
          </Route>
          <Route path="/reviews">
            <Reviews reviews={reviews} />
          </Route>
          <Route path="/addReview">
            <AddReview reviews={reviews} setReviews={setReviews} />
          </Route>
          <Route path="/basket">
            <Basket
              basket={basket}
              setBasket={setBasket}
              total={total}
              increaseQuantity={increaseQuantity}
              decreseQuantity={decreseQuantity}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
