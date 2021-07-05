import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";
import Header from "./pages/Header";

export default function App() {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/starters")
    .then((res) => res.json())
    .then(console.log)
  }, [])

  
  return (
    <div className="App">
       <Header />
      <body>
        <main>

        </main>
      </body>
    </div>
  );
}
