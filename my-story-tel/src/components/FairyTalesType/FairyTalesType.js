import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Audio from "../audio/Audio";


export default function FairyTalesType() {
    let { type } = useParams();
    const [audios, setAudios] = useState([]);


    useEffect(() => {
        console.log('?')
        fetch(`http://localhost:3000/${type}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAudios(data)
            })
    }, [type])

    return (
        <div>
            <h3>{type}</h3>
            {audios.length
                ? audios.map(({title, time, level, description}) => <Audio time={time} title={title} description={description} level={level} />)
                : <p>Loading...</p>}
        </div>
    );
}