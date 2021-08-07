import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AudioList from './AudioList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//import Kategorie from "./components/About/Kategorie";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import FairyTales from "./components/FairyTales/FairyTales";

export default function App() {
    const [file, setFile] = useState(null);
    const [audios, setAudios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/audios")
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    const form = (event) => {
        event.preventDefault();

        const API = "http://localhost:3000";

        fetch("http://localhost:3000/audios", {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
      <Router>
          <ul className="header">
              <li className="header" >
                  <Link to="/">Home</Link>
              </li>
              <li className="header">
                  <Link to="/kategorie">Kategorie</Link>
              </li>
              <li className="header">
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/kategorie">
                  <FairyTales/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
          </Switch>

      </Router>

  )
}



ReactDOM.render(<App/>, document.getElementById("root"));




