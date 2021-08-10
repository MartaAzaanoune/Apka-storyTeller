import React from 'react';
import AudioList from "../../AudioList";
import './home.scss'
import Audio from "../audio/Audio";

export default function Home() {
    return (
        <>
        <header className="header">
            <div className="header">
                <p className="header"> Witaj w naszej aplikacji!
            Będziesz mógł/mogła posłuchać tutaj bajek i opowieści
            czytanych przez kochających rodziców, dziadków i krewnych,
            którzy utrwalili swój głos w najpiękniejszych historiach dla dzieci.
            A może zechcesz dołączyć do grona opowiadających/czytających i
                podzielić się nagraniem z innymi? Zapraszamy !</p>
            </div>
        </header>
            <main>
                <section className="opening">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img src="book-1773756_640.png" alt="book" className="opening__image"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

