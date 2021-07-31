import React from 'react';
import './audio.scss';


export default function Audio({title, time, level}) {
    return (
        <div>
            <h1>{title}{time}{level}</h1>
            <audio controls>
                <source src="audio.file" type="audio/mpeg"/>
            </audio>
        </div>
    )
}
