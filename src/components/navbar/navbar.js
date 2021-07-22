import React from "react";
import "./style.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-item1">
                <h1>Employees</h1>
            </div>
            <div className="nav-item2">
                <li><input type="text" placeholder="search"/></li>
                <li><img src="https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png" alt="bell" className="bell"/></li>
                <li><img src="https://img.icons8.com/ios-glyphs/30/000000/topic.png" alt="chat" className="chat"/></li>
                <li className="inner"><img src="https://img.icons8.com/color/48/000000/person-male.png" alt="person" className="user"/>
                <img src="https://img.icons8.com/ios/48/000000/expand-arrow--v2.png" alt="arrow" className="arrow2"/></li>    
            </div>
        </div>
    )
}

