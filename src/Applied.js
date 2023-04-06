import React from "react";
import JobCard from './JobCard';
import { Card } from "@mui/material";
import { useState } from "react";

function Applied({jobList, movingUpJobStage, movingDownJobStage}) {

    return(
        <div>
            <div>
                <h1>Applied</h1>
                {jobList ? jobList.filter((jobs)=>jobs.stage == "applied").map((job) => {
                   return <JobCard job={job} movingUpJobStage={movingUpJobStage} movingDownJobStage={movingDownJobStage}/>
                }):null}
            </div>
        </div>
    )
}

export default Applied