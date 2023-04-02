import React from "react";
import JobCard from './JobCard';
import { Card } from "@mui/material";
import { useState } from "react";

function Applied({jobList}) {

    return(
        <div>
            <div>
                <h1>Applied</h1>
                {jobList.filter((jobs)=>jobs.stage == "applied").map((job) => {
                   return <JobCard job={job}/>
                })}
            </div>
        </div>
    )
}

export default Applied