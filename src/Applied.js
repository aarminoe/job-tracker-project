import React from "react";
import JobCard from './JobCard';
import { Card } from "@mui/material";
import { useState } from "react";

function Applied() {

    const [appliedJobs, setAppliedJobs] = useState(['job',"jog",'LOL'])

    return(
        <div>
            <div>
                <h1>Applied</h1>
                {appliedJobs.map((job)=> {
                    return(
                        <JobCard job={job}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Applied