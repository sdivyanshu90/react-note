import React from "react";

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
            <h1>React-Notes</h1>
            <button onClick={() => handleToggleDarkMode(previousDarkMode => !previousDarkMode)} className="mode">Toggle Mode</button>
        </div>
    )
}


export default Header;
