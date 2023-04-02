import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round1() {

    const [round1Jobs, setRound1Jobs] = useState(["round1", "round11"])

    return(
        <div>
            <div>
            <h1>Round 1</h1>
                {round1Jobs.map((job) => {
                    return(
                        <JobCard job={job} />
                    )
                })}
            </div>
        </div>
    )
}

export default Round1