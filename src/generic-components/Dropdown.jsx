import { useState } from "react";

function Dropdown({ options, children }) {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState("default");

    const optionElements = options.map((option, index) =>
        <span key={index} className="dropdown-option">{option}</span>
    );

    function handleClick(e) {
        const { target } = e;
        console.log(target, target.nextSibling)
        if (target.role == "select") {
            setIsActive(!isActive);
            target.nextSibling.focus();
        }
        else {
            setValue(target.textContent);
            setIsActive(false);
        };
    }

    return (
        <div
            className="dropdown"
            onClick={handleClick}
            tabindex="-1"
            onBlur={() => { setIsActive(false) }}
        >
            <div
                className="dropdown-btn"
                role="select"
            >{value}</div>
            <div
                className={`dropdown-menu ${isActive ? "active" : ""}`}
            >{optionElements}</div>
        </div>
    )
}

export default Dropdown;
