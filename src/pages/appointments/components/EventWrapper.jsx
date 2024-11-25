function EventWrapper({ event, children }) {
    const status = event.status[Math.floor(Math.random() * 4)];
    const { style } = children.props;
    console.log(children)
    return (
        <div className={`rbc-event ${status}`} style={style}>
            <div className="rbc-event-label">
                {event.title}
            </div>
            <div className="rbc-event-content">
                {status}
            </div>
        </div>
    )
}
export default EventWrapper;