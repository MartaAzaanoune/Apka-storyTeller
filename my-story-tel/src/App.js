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
export default function App() {
    const [fileURL, setFileURL] = React.useState(null)
    const [title, setTitle] = React.useState('')
    const [level, setLevel] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [edukacyjne, setEdukacyjne] = React.useState([])

    const onChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileURL (await fileRef.getDownloadURL())
    }
    const onSubmit = (e) => {
        e.preventDefault()
        db
            .collection(category)
            .add({
            level,
            title,
            audio: fileURL

        })
    }
    useEffect(()=> {
        const fetchEdukacyjne = async () => {
            const edukacyjneCollection = await db.collection('edukacyjne').get()
            setEdukacyjne(edukacyjneCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchEdukacyjne()
    },[])



    return (
        <>
        <div>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onChange} />
                <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
                <input type="text" id="level" onChange={e => setLevel(e.target.value)} />
                <select name="" id="" onChange={()=>{}}>
                    <option value="zwierzeta">Zwierzeta</option>
                    <option value="edukacyjne">Edukacyjne</option>
                    <option value="zwierzeta">Zwierzeta</option>
                </select>
                <button>Submit</button>
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
                  <Link to="/dodaj">Dodaj Bajke</Link>
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
              <Route path="/dodaj">
                  <AddFairyTale db={db}/>
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




