import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round3({jobList}) {

    return(
        <div>
            <h1>Round 3</h1>
            {jobList.filter((jobs)=>jobs.stage == "round3").map((job) => {
                   return <JobCard job={job}/>
                })}
        </div>
    )
}

export default Round3