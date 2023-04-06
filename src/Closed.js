import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Closed({jobList, movingUpJobStage, movingDownJobStage, handleJobDelete}) {

    return(
        <div className="single-stage">
            <div>
                <h1>Closed</h1>
                {jobList ? jobList.filter((jobs)=>jobs.stage == "closed").map((job) => {
                   return <JobCard handleJobDelete={handleJobDelete} job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
            </div>
        </div>
    )
}

export default Closed