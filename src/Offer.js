import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Offer({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div>
            <div>
            <h1>Offer</h1>
            {jobList.filter((jobs)=>jobs.stage == "offer").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                })}
            </div>
        </div>
    )
}

export default Offer