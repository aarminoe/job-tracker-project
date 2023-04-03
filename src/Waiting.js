import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Waiting({jobList}) {
    
    return(
        <div>
            <div>
            <h1>Waiting</h1>
            {jobList.filter((jobs)=>jobs.stage == "waiting").map((job) => {
                   return <JobCard job={job}/>
                })}
            </div>
        </div>
    )
}

export default Waiting