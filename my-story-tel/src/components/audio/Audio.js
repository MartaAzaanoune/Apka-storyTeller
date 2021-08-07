import React from 'react';
import './audio.scss';


export default function Audio({title, time, description, level, }) {
    return (
        <div>
            <h1>{title}: <h2>{description}</h2></h1>
            <p>Przedzial wiekowy: {level}</p>
            <p>Czas trwania: {time}</p>
            <audio controls>
                <source src="audio.file" type="audio/mpeg"/>
            </audio>
        </div>
    )
}
