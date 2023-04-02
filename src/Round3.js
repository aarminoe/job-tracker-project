import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Round3() {

    const [round3Jobs, setRound3Jobs] = useState(["round3", "round33"])

    return(
        <div>
            <h1>Round 3</h1>
            {round3Jobs.map((job) => {
                return(
                    <JobCard job = {job} />
                )
            })}
        </div>
    )
}

export default Round3