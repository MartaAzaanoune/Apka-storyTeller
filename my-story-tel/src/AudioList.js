import React, { useState, useEffect } from 'react'
import Audio from './components/audio/Audio';

export default function AudioList() {
    const [audios, setAudios] = useState([])
    useEffect(() => {
        // fetch()
    }, [])
    return (
        <div>
            {audios.map(audio => <Audio name={audio.name} />)}
        </div>
    )
}