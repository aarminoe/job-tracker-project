import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round2() {

    const [round2Jobs, setRound2Jobs] = useState(["round2", "round22"])

    return(
        <div>
            <div>
            <h1>Round 2</h1>
                {round2Jobs.map((job)=> {
                    return(
                        <JobCard job={job} />
                    )
                })}
            </div>
        </div>
    )
}

export default Round2