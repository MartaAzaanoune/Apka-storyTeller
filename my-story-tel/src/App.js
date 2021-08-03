import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AudioList from './AudioList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
//import Kategorie from "./components/About/Kategorie";
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
                  <Link to="/kategorie">Kategorie</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/kategorie">
                  <Kategorie/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
          </Switch>

      </Router>
  )
}
function Kategorie(){
    let { path, url } = useRouteMatch();
    return(
        <div>
        <h2>Kategorie</h2>
            <ul>
                <li>
                    <Link to={`${url}/zwierzeta`}>Bajki o zwierzetach</Link>
                </li>
                <li>
                    <Link to={`${url}/edukacyjne`}>Bajki edukacyjne</Link>
                </li>
                <li>
                    <Link to={`${url}/czarodziejskie`} className="magic f6b8">Bajki czarodziejskie</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Wybierz kategorię.</h3>
                </Route>
                <Route path={`${path}/:kategoriaId`}>
                    <Kategoria />
                </Route>
            </Switch>
        </div>
            )
}
function Kategoria() {
            let { kategoriaId } = useParams();

            return (
            <div>
            <h3>{kategoriaId}</h3>
            </div>
            );
        }

ReactDOM.render(<App/>, document.getElementById("root"));




