import React from "react";
import { Card } from "@mui/material";
import UserPool from "./UserPool";

function JobCard({job, movingUpJobStage, movingDownJobStage}) {

    let movement = ["applied", "round1", "round2", "round3", "waiting", "offer", "closed"] 

    let user = UserPool.getCurrentUser()

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
                stage: newStage,
                user: user.username
            })
        })
        .then(resp => resp.json())
        .then(data => movingUpJobStage(data))
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
                stage: newStage,
                user: user.username
            })
        })
        .then(resp => resp.json())
        .then(data => movingDownJobStage(data))
    }

    return(
        <Card className="single-job-card">
            <div>
                <h1>{job.company}</h1>
                <h4>{job.title}</h4>
                <p>{job.skills}</p>
            </div>
            
            {job.stage == "applied" ? null: <button onClick={moveBack}>←</button>}
            {job.stage == "closed" ? null : <button onClick={moveUp}>→</button>}
        </Card>
    )
}

export default JobCard