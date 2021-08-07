import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import FairyTalesType from "../FairyTalesType/FairyTalesType";
import NoweAudio from "../NoweAudio/NoweAudio";

export default function FairyTales(){
    let { path, url } = useRouteMatch();
    return(
        <div>
            <div className="decor">
                <img src="2063.jpg"/>
            </div>
            <h2>Kategorie</h2>
            <ul>
                <li>
                    <Link to={`${url}/zwierzeta`}>Bajki o zwierzetach</Link>
                </li>
                <li>
                    <Link to={`${url}/edukacyjne`}>Bajki edukacyjne</Link>
                </li>
                <li>
                    <Link to={`${url}/czarodziejskie`}>Bajki czarodziejskie</Link>
                </li>

            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Wybierz kategorię.</h3>
                </Route>
                <Route path={`${path}/:type`}>
                    <FairyTalesType />
                </Route>
            </Switch>
            <NoweAudio/>
        </div>
    )
}