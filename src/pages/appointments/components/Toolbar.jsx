import ViewButton from "./ViewButton";
import SwitchIcon from "../../../assets/switch.svg";
import CalendarIcon from "../../../assets/calendar.svg";
import DateSelector from "./DateSelector";

function Toolbar(props) {
    return (
        <div className="toolbar">
            <DateSelector  {...props} />
            <div>
                <ViewButton  icon={CalendarIcon} />
                <ViewButton  icon={SwitchIcon} />
            </div>
        </div>
    )
}
export default Toolbar