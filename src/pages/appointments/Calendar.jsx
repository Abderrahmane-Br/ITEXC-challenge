import { Calendar } from 'react-big-calendar';
import EventWrapper from './EventWrapper';
import Header from './Header';
import dayjs from 'dayjs';

function MyCalendar({
    localizer,
    events
}) {
    return <div className="calendars">
        <Calendar
            dayLayoutAlgorithm="no-overlap"
            localizer={localizer}
            view='day'
            views={['day']}
            // date={new Date(2015, 3, 1)}
            events={events}
            startAccessor="start"
            endAccessor="end"
            // min={new Date()}
            components={{
                eventWrapper: EventWrapper,
                timeSlotWrapper: (props) => { console.log(dayjs().hour(props.value.getHours())); return <span className='rbc-label'>{dayjs().hour(props.value.getHours())["$H"]}:00</span> },
                toolbar: Header
            }}
        />
        <Calendar
            dayLayoutAlgorithm="no-overlap"
            localizer={localizer}
            view='day'
            views={['day']}
            events={events}
            startAccessor="start"
            endAccessor="end"
            components={{
                eventWrapper: EventWrapper,
                timeSlotWrapper: (props) => { console.log(dayjs().hour(props.value.getHours())); return <span className='rbc-label'>{dayjs().hour(props.value.getHours())["$H"]}:00</span> },
                toolbar: Header
            }}
        />
        <Calendar
            dayLayoutAlgorithm="no-overlap"
            localizer={localizer}
            view='day'
            views={['day']}
            events={events}
            startAccessor="start"
            endAccessor="end"
            components={{
                eventWrapper: EventWrapper,
                timeSlotWrapper: (props) => { console.log(dayjs().hour(props.value.getHours())); return <span className='rbc-label'>{dayjs().hour(props.value.getHours())["$H"]}:00</span> },
                toolbar: Header
            }}
        />
        <Calendar
            dayLayoutAlgorithm="no-overlap"
            localizer={localizer}
            view='day'
            views={['day']}
            events={events}
            startAccessor="start"
            endAccessor="end"
            components={{
                eventWrapper: EventWrapper,
                timeSlotWrapper: (props) => { console.log(dayjs().hour(props.value.getHours())); return <span className='rbc-label'>{dayjs().hour(props.value.getHours())["$H"]}:00</span> },
                toolbar: Header
            }}
        />
    </div>
}

export default MyCalendar;