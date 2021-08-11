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
import {app} from "./base";
import AddFairyTale from "./components/AddFairyTale/AddFairyTale";

const db = app.firestore()
export {db};


export default function App(){

    return (

      <Router>
          <ul className="header">
              <h1 className="logo">Story Teller</h1>

              <li className="header" >
                  <Link to="/">Home</Link>
              </li>
              <li className="header">
                  <Link to="/kategorie">Kategorie</Link>
              </li>
              <li className="header">
                  <Link to="/dodaj">Dodaj Bajkę</Link>
              </li>
              <li className="header">
                  <Link to="/contact">Kontakt</Link>
              </li>
          </ul>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/kategorie">
                  <FairyTales/>
              </Route>
              <Route path="/dodaj">
                  <AddFairyTale db={db}/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
          </Switch>

      </Router>


  )
}



ReactDOM.render(<App/>, document.getElementById("root"));




