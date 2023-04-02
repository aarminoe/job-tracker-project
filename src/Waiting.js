import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Waiting() {

    const [waitingJobs, setWaitingJobs] = useState(["waiting1", "waiting2"])

    return(
        <div>
            <div>
            <h1>Waiting</h1>
                {waitingJobs.map((job) => {
                    return(
                        <JobCard job={job}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Waiting