import ViewButton from "./ViewButton";
import SwitchIcon from "../../../assets/switch.svg";
import CalendarIcon from "../../../assets/calendar.svg";

function Toolbar() {
    return (
        <div className="toolbar">
            {/* <DateSelector /> */}
            <div>
                <ViewButton  icon={CalendarIcon} />
                <ViewButton  icon={SwitchIcon} />
            </div>
        </div>
    )
}
export default Toolbar