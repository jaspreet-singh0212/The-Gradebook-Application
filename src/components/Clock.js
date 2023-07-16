import React, {useState, useEffect, useLayoutEffect} from "react";
import "./Clock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Clock() {
    const today = new Date().toLocaleDateString();
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setIntervalId(setInterval(()=>updateTime(),1000));
    }, []);
    useLayoutEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const updateTime = () => {
            setTime(new Date().toLocaleTimeString())
    }        

       return(
            <div className="time">
                <p><FontAwesomeIcon icon="fa-solid fa-calendar-days" size="xl" /> Today's Date: {today}</p>
                <p><FontAwesomeIcon icon="fa-regular fa-clock" size="xl" /> Current Time: {time}</p>
            </div>
        )
}

export default Clock;
