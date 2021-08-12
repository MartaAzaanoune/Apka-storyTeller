import React from 'react';
import './audio.scss';


export default function Audio({title, time, description, level, file }) {
    return (
        <div>
            <h1 className="audio_element">{title}: <h2>{description}</h2></h1>
            <p className="audio_element">Przedzial wiekowy: {level}</p>
            <p className="audio_element">Czas trwania: {time}</p>
            <audio controls>
                <source src={file} type="audio/x-m4a"/>
            </audio>
        </div>
    )
}
