import React, {useEffect, useState} from 'react';
import {app} from "../../base";


const db = app.firestore()
export {db};
export default function AddFairyTale() {
    const [fileURL, setFileURL] = React.useState(null)
    const [title, setTitle] = React.useState('')
    const [level, setLevel] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [edukacyjne, setEdukacyjne] = React.useState([])

    const onChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileURL(await fileRef.getDownloadURL())
    }
    const onSubmit = (e) => {
        e.preventDefault()
        db
            .collection(category)
            .add({
                level,
                title,
                audio: fileURL

            })
    }
    useEffect(() => {
        const fetchEdukacyjne = async () => {
            const edukacyjneCollection = await db.collection('edukacyjne').get()
            setEdukacyjne(edukacyjneCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchEdukacyjne()
    }, [])

        return (
            <section className="add_fairy">

            <div className="form_add_fairy">
                <h2 className="form_add_fairy">Dodaj bajkę</h2>
                <form onSubmit={onSubmit} className="form_add_fairy">
                    <input type="file" onChange={onChange} className="form_add_fairy"/>
                    <input type="text" id="title" onChange={e => setTitle(e.target.value)} className="form_add_fairy"/>
                    <input type="text" id="level" onChange={e => setLevel(e.target.value)} className="form_add_fairy"/>
                    <select name="" id="" onChange={() => {
                    }} className="form_add_fairy">
                        <option value="zwierzeta">Zwierzeta</option>
                        <option value="edukacyjne">Edukacyjne</option>
                        <option value="czarodziejskie">Czarodziejskie</option>
                    </select>
                    <button  className="form_add_fairy">Submit</button>
                </form>
            </div>
            </section>

        )

}