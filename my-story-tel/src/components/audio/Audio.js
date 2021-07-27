import React from 'react';
import './audio.scss';

export default function Audio({name, desc, ageMin}) {
    return (
        <div>
            <h1>{name}</h1>
            <audio controls>
                <source src='' type="audio/mpeg"/>
            </audio>
        </div>
    )
}