import React, {useState} from 'react';
import ReactDOM from "react-dom";



export default function Contact() {

        return (
            <div>
                <h1>Kontakt</h1>
                <h2 className="form">Napisz do nas</h2>
                <form className="contact">
                    <FormExample/>
                </form>
            </div>
        )
}

const FormExample = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");

    return (
        <form>
            <div className="form_contact">
                <input className="form_contact" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input className="form_contact" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <textarea className="form_contact" type="textarea" rows="4" value={textarea} onChange={e => setTextarea(e.target.value)}/>
                <input className="form_contact" type="submit" value="Wyślij"/>
            </div>
        </form>
    );
}
