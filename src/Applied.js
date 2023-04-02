import React from "react";
import JobCard from './JobCard';
import { Card } from "@mui/material";
import { useState } from "react";

function Applied({jobList}) {

    const [appliedJobs, setAppliedJobs] = useState(['job',"jog",'LOL'])

    console.log(jobList)
    return(
        <div>
            <div>
                <h1>Applied</h1>
                {jobList.filter((job)=>job.stage == "applied").map((j) => {
                   return <JobCard />
                })}
            </div>
        </div>
    )
}

export default Applied