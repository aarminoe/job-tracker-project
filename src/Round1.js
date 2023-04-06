import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round1({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div className="single-stage">
            <div>
            <h1>Round 1</h1>
            {jobList ? jobList.filter((jobs)=>jobs.stage == "round1").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
            </div>
        </div>
    )
}

export default Round1