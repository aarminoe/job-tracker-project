import React from "react";
import { Card } from "@mui/material";
import UserPool from "./UserPool";
import { Button } from "@mui/material";

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
                <h3>{job.company}</h3>
                <h4>{job.title}</h4>
                <p>{job.skills}</p>
            </div>
            
            {job.stage == "applied" ? null: <Button style={{backgroundColor: "rgb(218, 218, 218)"}} onClick={moveBack}>←</Button>}
            {job.stage == "closed" ? null : <Button style={{backgroundColor: "rgb(218, 218, 218)"}} onClick={moveUp}>→</Button>}
        </Card>
    )
}

export default JobCard