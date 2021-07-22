import React, {useState} from "react";
import Modal from "../modal/modal";
import "./style.css"

export default function Profile() {
    const [showModel, setShowModel] = useState(false)
    return (
        <div className="profile">
            <div className="details-card">
                <h1>Basic Information</h1>
                <img src="https://img.icons8.com/color/48/000000/businessman.png" alt="person"/>
                <p><b>John</b></p>
                <p>John@gmail.com</p>
                <p>UI/UX Designer</p>
                <p>9959149451</p>
                <hr />
                <div className="shot-info">
                    <p className="small">Hired Date</p>
                    <p>19-01-2021</p>
                    <p className="small">Employee Type</p>
                    <p>Full Time</p>
                    <p className="small">Notice Period</p>
                    <p>Immediate</p>
                    <p className="small">Current Location</p>
                    <p>Hyderabad, India</p>
                </div>
            </div>
            <div className="profile-card2">
                <h2>Key Policy Documents</h2>
                <button className="select-btn" onClick={()=>setShowModel(true)}>Select<span className="btn-span">{'>'}</span></button>
                <p className="sm"><img src="https://img.icons8.com/ios/48/000000/break--v2.png" alt="key"/>
                Employment Policy, Internship Policy, Covid Policy, Assest Policy
                </p>
                <hr />
                <h2>Offer Letter</h2>
                <ul className="offer">
                    <li>
                        <p>Offer Letter Template</p>
                        <button className="select-btn">Select<span className="btn-span">{'>'}</span></button>
                    </li>
                    <li>
                        <p>CTC</p>
                        <select name="currency">
                            <option value="rupee">INR</option>
                            <option value="saab">Doller</option>
                        </select>
                    </li>
                    <li>
                        <p>Joining Date</p>
                        <input type="date"/>
                    </li>
                </ul>
                <hr />
                <h2>Key Tools</h2>
                <ul className="tools">
                    <li>
                        <p className="box-b">S</p>
                        <p>Sharepoint</p>
                    </li>
                    <li>
                        <p className="box-g">Y</p>
                        <p>Yammer</p>
                    </li>
                    <li>
                        <p className="box-y">A</p>
                        <p>A-Hub</p>
                    </li>
                    <li>
                        <button>+</button>
                    </li>
                </ul>
                <hr />
                <h2>Key Contacts</h2>
                <ul className="contacts">
                    <li>
                        <button>+</button>
                        <p>Add HR Manager</p>
                    </li>
                    <li>
                        <button>+</button>
                        <p>Add Reporting Manager</p>
                    </li>
                    <li>
                        <button>+</button>
                        <p>Add Buddy</p>
                    </li>
                </ul>
                <button className="save">Save & Send offer letter</button>
            </div>
            {showModel ? <Modal setShowModel={setShowModel}/> : null}
        </div>
    )
}