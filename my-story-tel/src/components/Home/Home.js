import React from 'react';
import AudioList from "../../AudioList";
import './home.scss'
import Audio from "../audio/Audio";

const sampleData = [
    {
        "title": "Zolwie i krokodyle",
        "time": "21sec",
        "kategoria": "Bajki i opowiadania o zwierzętach",
        "level": "3-4",
        "file":"Zolwie i krokodyle"
    },
    {
        "title":"Test1",
        "time": "",
        "kategoria": "Bajki i opowiadania edukacyjne",
        "level": "3-4",
        "file": "Test1"
    },
    {
        "title":"Test2",
        "time": "",
        "kategoria": "Bajki czarodziejskie",
        "level": "5-6",
        "file": "Test2"
    }
]
export default function Home() {
    return (
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
                {sampleData.map(({ title, time, level }) => <Audio title={title}
                                                                   time={time} level={level} />)}
            </main>
    )
}
/*
const Seletion = () => {
    let select = sampleData.filter(item => kategoria.item === "Bajki czarodziejskie")
    return select;
}*/
