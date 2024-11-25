import { useState } from "react";
import { Button, Dropdown } from "../../../generic-components";
import leftArrow from "../../../assets/arrow-left.svg"
import rightArrow from "../../../assets/arrow-right.svg"
function DateSelector({ currentDate, navigateDate }) {

    function handleChange(e) {
        return
    }
    return (
        <div className="dateselector">
            <Button className="dateselector-navbtn">
                <img src={leftArrow} onClick={() => navigateDate("NEXT")} />
            </Button>
            {/* <div className="dateselector-drop">
                <label>Today
                    <select value="option2" onChange={handleChange}>
                        <option value="option1">{currentDate.format('ll')}</option>
                        <option value="option2">{currentDate.add(1, 'day').format('ll')}</option>
                        <option value="option3">{currentDate.add(2, 'day').format('ll')}</option>
                    </select>
                </label>
            </div> */}
            <Dropdown options={["op1", "op2", "op3"]}/>
            <span onClick={() => navigateDate("TODAY")}>{ }</span>
            <Button>
                <img src={rightArrow} onClick={() => navigateDate("PREVIOUS")} />
            </Button>
        </div>)
}

export default DateSelector;