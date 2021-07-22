import React, {useState} from "react";
import Applicant from "../applicant/applicant";
import FilterModal from "../filterModal/filter";
import "./style.css"

export default function Candidates() {
    const [applicantData, setApplicantData] = useState([1,2,3,4,5,6,7,8,9, 10,11,12,13,14,15])
    const [filterModal, setFilterModal] = useState(false)
    console.log(setApplicantData)
    return (
        <div>
            <div className="candidate-header">
                <p className="active1"><b>New Hire</b></p>
                <p>Onbording In-Progress</p>
                <p>Onbording Completed</p>
                <p>Background Check</p>
            </div>
            <div className="candidate-subheader">
                <p>No of Candidates: <b>25</b></p>
                <p className="img-flex">
                    <li><img src="https://img.icons8.com/ios-glyphs/48/000000/sorting-options.png" alt="filter" 
                    onClick={()=>setFilterModal(!filterModal)}/></li>
                    <li><img src="https://img.icons8.com/ios/48/000000/tear-off-calendar--v1.png" alt="calender"/></li>
                </p>
            </div>
            <div className="applicant">
                {applicantData.map(item=><Applicant />)}
            </div>
            <div>
                {filterModal ? <FilterModal /> : null}
            </div>
        </div>
    )
}