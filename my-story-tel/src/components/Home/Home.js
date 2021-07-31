import React from 'react';
import AudioList from "../../AudioList";
import './home.scss'
import Audio from "../audio/Audio";

const sampleData = [
    {
        "title": "Zolwie i krokodyle",
        "time": "21sec",
        "description": "poetry",
        "level": "3-4",
        "file":"Zolwie i krokodyle"
    },
    {
        "title":"",
        "time": "",
        "description": "test",
        "level": "3-4",
        "file": "Test1"
    },
    {
        "title":"wergh",
        "time": "",
        "description": "test",
        "level": "5-6",
        "file": "Test2"
    }
]
export default function Home() {
    return (
            <main>
                <h1>test</h1>
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
