import React from "react";
import "./style.css"

export default function Aside(){
    return (
        <div className="aside">
            <h1>EOA</h1>
            <ul className="list1">
                <li><img src="https://img.icons8.com/material-rounded/24/ffffff/dashboard-layout.png" alt="dashboard"/>Dashboard</li>
                <li className="active"><img src="https://img.icons8.com/ios-glyphs/30/000000/person-male.png" alt="employee"/>Employees</li>
                <li><img src="https://img.icons8.com/fluent-systems-regular/48/ffffff/layers.png" alt="stages"/>Stages
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/chevron-down.png" alt="arrow" className="arrow"/>
                </li>
                <ul className="list2">
                    <li><img src="https://img.icons8.com/fluent-systems-regular/48/ffffff/theatre-stage.png" alt="welcome"/>Welcome Stages</li>
                    <li><img src="https://img.icons8.com/material-outlined/24/ffffff/send-letter-1.png" alt="offer"/>Offer Letter</li>
                    <li><img src="https://img.icons8.com/dotty/80/ffffff/light.png" alt="skill"/>Skill Matrix</li>
                    <li><img src="https://img.icons8.com/material-sharp/24/ffffff/company.png" alt="company"/>Know Your Company</li>
                    <li><img src="https://img.icons8.com/ios/50/ffffff/joining-queue.png" alt="'joining"/>Joining Day Information</li>
                    <li><img src="https://img.icons8.com/ios/50/ffffff/note.png" alt="feedback"/>Feedback</li>
                    <li><img src="https://img.icons8.com/material-outlined/24/ffffff/check-all.png" alt="back"/>Background Check</li>
                </ul>
                <li><img src="https://img.icons8.com/windows/32/ffffff/web-settings.png" alt="setting"/>Setting</li>
            </ul>
        </div>
    )
}