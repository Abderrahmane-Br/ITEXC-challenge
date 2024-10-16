import { useState, useEffect } from "react";
import { dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import EventsList from "./events";
import MyCalendar from "./Calendar";
import Toolbar from "./Toolbar";


function Appointments() {
    const [events, setEvents] = useState([]);
    console.log(events)
    useEffect(() => {
        setEvents(EventsList);
    }, [events])
    const localizer = dayjsLocalizer(dayjs)
    return (
        <div className="appointments">Appointments
            <Toolbar />
            <MyCalendar localizer={localizer} events={events} />
        </div>
    )
}
export default Appointments;