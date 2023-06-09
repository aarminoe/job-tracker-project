import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Offer({jobList, movingUpJobStage, movingDownJobStage, handleJobDelete}) {

    return(
        <div className="single-stage">
            <div>
            <h1>Offer</h1>
            {jobList ? jobList.filter((jobs)=>jobs.stage == "offer").map((job) => {
                   return <JobCard handleJobDelete={handleJobDelete} job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
            </div>
        </div>
    )
}

export default Offer