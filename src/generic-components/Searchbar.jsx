import { useState } from "react";
import xIcon from "../assets/x.svg";
import searchIcon from "../assets/search.svg";

function Searchbar() {
    // State for controlled input component
    const [value, setValue] = useState("");

    function handleChange(e) {
        const { value } = e.target;
        setValue(value);
    }

    return (
        <div className="searchbar">
            {/* Display the search icon */}
            <img src={searchIcon} alt="search icon" className="searchbar__icon" />
            {/* Input field for searching */}
            <input
                type="text"
                name={name}
                placeholder="Search for something"
                value={value}
                onChange={handleChange} // Handle changes in the input field
                className="searchbar__input"
            />
            {/* Display a clear search icon if there is input */}
            {value.length > 0 && (
                <img
                    src={xIcon}
                    alt="clear search icon"
                    className="searchbar__clear"
                    onClick={() => {
                        setValue("");  // Clear the input field
                        // setQuery("");  // Clear the search query using the provided setQuery function
                    }}
                />
            )}
        </div>
    )
}

export default Searchbar;