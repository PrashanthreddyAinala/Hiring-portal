import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

export default function Applicant() {
    return (
        <div className="card">
            <img src="https://img.icons8.com/color/48/000000/businessman.png" alt="person"/>
            <p className="name"><b>Applicant 2</b></p>
            <p>Applicant1@gmail.com</p>
            <p>UI/UX Designer</p>
            <p>9959149451</p>
            <Link to="/profile" className="link"><button>View</button></Link>
        </div>
    )
}