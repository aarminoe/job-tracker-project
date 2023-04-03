import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Closed({jobList}) {

    return(
        <div>
            <div>
                <h1>Closed</h1>
                {jobList.filter((jobs)=>jobs.stage == "closed").map((job) => {
                   return <JobCard job={job}/>
                })}
            </div>
        </div>
    )
}

export default Closed