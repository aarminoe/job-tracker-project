import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Closed() {

    const [closedJobs, setClosedJobs] = useState(['closed1','closed2'])

    return(
        <div>
            <div>
                <h1>Closed</h1>
                {closedJobs.map((job) => {
                    return(
                        <JobCard job={job} />
                    )
                })}
            </div>
        </div>
    )
}

export default Closed