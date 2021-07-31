import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AudioList from './AudioList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

export default function App() {
    const [file, setFile] = useState(null);
/*
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
    };*/

    return (
      <Router>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
          </Switch>

      </Router>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));




