import { useState } from 'react';
import './TextArea.css';
import './Theme.css';

export default function TextAreaContainer() {

    let placeholders = ["Today's work is...",
        "To my future self, remember to...",
        "Today's achievements will be...",
        "I've never done something similar before, but today I'll try to...",
        "I'll start small doing only..."
    ];

    let data = localStorage.getItem("text");
    const [textValue, setTextValue] = useState(data);

    window.addEventListener("onload", () => { setTextValue(data) });

    const OnTextAreaChangeHandler = (event) => {
        localStorage.setItem("text", event.target.value);
        setTextValue(data);
    }

    return (
        <>
            {/* <label>Your goals:</label> */}
            <textarea className='textarea dark'
                defaultValue={textValue}
                onChange={OnTextAreaChangeHandler}
                placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
                autoCorrect='no'>
            </textarea>
        </>
    );
}