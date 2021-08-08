import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Audio from "../audio/Audio";
import {db} from '../../App';

export default function FairyTalesType() {
    let { type } = useParams();
    const [audios, setAudios] = useState([]);


    useEffect(() => {
        console.log('?')
        const getFairyTales = async () => {
            const fairyTales = await db.collection(type).get()
            fairyTales.docs.forEach(fairyTale => {
                console.log(fairyTale.data());
                setAudios(prev => [...prev, fairyTale.data()])
            })
        }
        getFairyTales()
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