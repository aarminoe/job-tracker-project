import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round1({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div>
            <div>
            <h1>Round 1</h1>
            {jobList.filter((jobs)=>jobs.stage == "round1").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                })}
            </div>
        </div>
    )
}

export default Round1