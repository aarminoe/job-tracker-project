import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round2({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div>
            <div>
            <h1>Round 2</h1>
            {jobList.filter((jobs)=>jobs.stage == "round2").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                })}
            </div>
        </div>
    )
}

export default Round2