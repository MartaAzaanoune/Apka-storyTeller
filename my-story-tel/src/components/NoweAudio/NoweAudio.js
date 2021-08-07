import React, { useState } from "react";

export default function NoweAudio() {
    const [audio, setAudio] = useState(null);

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = (fileString) => {
        // console.log(fileString);
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
            const fileMp3 = new Blob([file], { type: "text/plain" });
            console.log(
                fileMp3.text().then((result) => {
                    console.log(result);
                })
            );
            // console.log(window.URL.createObjectURL(file));
            // console.log(new Blob(file));
            setAudio(window.URL.createObjectURL(file));
        };
    };

    return (

        <div className="App">
            <h2>Dodaj swoje audio</h2>
            <form>
                <input type="file" onChange={onChange} />
            </form>
            {audio && (
                <audio controls>
                    <source src={audio} />
                </audio>
            )}
        </div>
    );
}

