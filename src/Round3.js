import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round3({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div>
            <h1>Round 3</h1>
            {jobList ? jobList.filter((jobs)=>jobs.stage == "round3").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
        </div>
    )
}

export default Round3