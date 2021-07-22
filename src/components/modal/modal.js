import React from "react";
import "./style.css"

export default function Modal({setShowModel}) {
    return (
        <div className="backdrop">
            <div className="text">
                <div className="color">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left-2.png" alt="back" onClick={()=>setShowModel(false)}/>
                    <h1>Key Policy Documents</h1>
                </div>
                <div className="policies">
                    <p><input type="checkbox" />Employment Policy<span className="view-p">view</span></p>
                    <p><input type="checkbox" />Internship Policy<span>view</span></p>
                    <p><input type="checkbox" />Covid 19 Policy<span>view</span></p>
                    <p><input type="checkbox" />Leave Policy<span>view</span></p>
                    <p><input type="checkbox" />Assest Policy<span>view</span></p>
                    <p><input type="checkbox" />Sexual Harrassement Policy<span>view</span></p>
                    <p><input type="checkbox" />Personal Visitor Policy<span>view</span></p>
                    <p><input type="checkbox" />Employment Performance Review Policy<span>view</span></p>
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}