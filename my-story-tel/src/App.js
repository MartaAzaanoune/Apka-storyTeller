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
    const onChange = () => {

    }


    return (
        <>
        <div>
            <form>
                <input type="file" onChange={onChange} />
            </form>
        </div>
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
        </>

  )
}



ReactDOM.render(<App/>, document.getElementById("root"));




