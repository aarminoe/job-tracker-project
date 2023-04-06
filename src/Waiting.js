import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Waiting({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div>
            <div>
            <h1>Waiting</h1>
            {jobList ? jobList.filter((jobs)=>jobs.stage == "waiting").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
            </div>
        </div>
    )
}

export default Waiting