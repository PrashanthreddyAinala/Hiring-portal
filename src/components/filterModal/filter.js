import React from "react";
import "./style.css"

export default function FilterModal(){
    return (
        <div className="filter-modal">
            <h1>Filter</h1>
            <ul>
                <li>UI/UX Designer</li>
                <li>React Developer</li>
                <li>Python Developer</li>
                <li>UI Developer</li>
            </ul>
        </div>
    )
}