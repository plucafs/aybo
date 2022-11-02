import { useState } from "react";

import './Day.css'
import './Theme.css'

export default function Day() {

    let time = new Date().toLocaleTimeString();
    let currentDate = new Date().toLocaleDateString();

    const [newTime, setNewTime] = useState(time);
    const [newCurrentDate, setnewCurrentDate] = useState(currentDate);

    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        let currentDate = new Date().toLocaleDateString();
        setNewTime(time);
        setnewCurrentDate(currentDate);
    }, 1000);


    return (
        <div className="day dark">
            <p className="day-welcome">Welcome back!</p>
            <div className="day-container">
                <div className="time">
                    <p>{newTime}</p>
                </div>
                <div className="date">
                    <p>{newCurrentDate}</p>
                </div>
            </div>
        </div>
    );
}
