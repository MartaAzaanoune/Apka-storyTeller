import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Audio from "../audio/Audio";
import {db} from '../../App';
import React from 'react';


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
        getFairyTales();


    }, [type]);
   /* function useAsync(asyncFn, onSuccess) {
        useEffect(() => {
            let isActive = true;
            asyncFn().then(data => {
                if (isActive) onSuccess(data);
            });
            return () => { isActive = false };
        }, [asyncFn, onSuccess]);
    }
    useAsync();*/


    return (
        <>
        <div className="decor">
            <h3>{type}</h3>
            {audios.length
                ? audios.map(({title, time, level, description, file}) => <Audio time={time} title={title} description={description} level={level} file={file}/>)
                : <p>Loading...</p>}
        </div>


        </>
    );
}