import React from "react";
import { Card } from "@mui/material";

function JobCard({job}) {

    function moveUp(e) {
        console.log(job)
    }

    function moveBack() {
        
    }

    return(
        <Card className="single-job-card">
            {job.stage == "applied" ? null: <button onClick={moveBack}>MoveBack</button>}
            JobCard
            {job.stage == "closed" ? null : <button onClick={moveUp}>MoveUp</button>}
        </Card>
    )
}

export default JobCard