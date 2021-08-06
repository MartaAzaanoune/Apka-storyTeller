import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import FairyTalesType from "../FairyTalesType/FairyTalesType";

export default function FairyTales(){
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
                <Route path={`${path}/:type`}>
                    <FairyTalesType />
                </Route>
            </Switch>
        </div>
    )
}