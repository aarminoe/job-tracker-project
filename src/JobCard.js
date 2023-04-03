import React from "react";
import { Card } from "@mui/material";

function JobCard({job}) {

    let movement = ["applied", "round1", "round2", "round3", "waiting", "offer", "closed"] 



    function moveUp() {
        let newStage = ""
        for (let i = 0; i < movement.length; i++) {
            if (job.stage == movement[i]) {
                newStage = movement[i+1]
            }
        }
        fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                company: job.company,
                title: job.title,
                skills: job.skills,
                stage: newStage
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    function moveBack() {
        let newStage = ""
        for (let i = 0; i < movement.length; i++) {
            if (job.stage == movement[i]) {
                newStage = movement[i-1]
            }
        }
        fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                company: job.company,
                title: job.title,
                skills: job.skills,
                stage: newStage
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
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