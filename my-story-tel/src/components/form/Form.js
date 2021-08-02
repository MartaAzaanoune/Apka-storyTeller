import React, {useState} from 'react';
import ReactDOM from "react-dom";

 export default function FormLog() {
    const Form = () => {
        const [name, setName] = useState("");
        const [surname, setSurname] = useState("");
        const [email, setEmail] = useState("");

        return (
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" value={surname} onChange={e => setSurname(e.target.value)}/>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </form>
        );
    }
}
const App = () => <Form/>;

ReactDOM.render(<App/>, document.getElementById("root"));