import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round3({jobList, movingUpJobStage, movingDownJobStage, handleJobDelete}) {

    return(
        <div className="single-stage">
            <h1>Round 3</h1>
            {jobList ? jobList.filter((jobs)=>jobs.stage == "round3").map((job) => {
                   return <JobCard handleJobDelete={handleJobDelete} job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
        </div>
    )
}

export default Round3