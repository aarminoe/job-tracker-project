import React from "react";
import { useState } from "react";
import UserPool from "./UserPool";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { v4 } from "uuid";

function AddJobSection({newJobToJobList}) {

    const [company, setCompany] = useState("")
    const [title, setTitle] = useState("")
    const [skills, setSkills] = useState("")

    const user = UserPool.getCurrentUser()

    let useruuid = v4()

    console.log(useruuid)

    function addJob(e) {
        e.preventDefault()
        fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/jobs", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: useruuid,
                company: company,
                title: title,
                skills: skills,
                stage: "applied",
                user: user.username
            })
        })
        .then(resp => resp.json())
        .then(data => {
            newJobToJobList(data)
            setCompany("")
            setTitle("")
            setSkills("")
        })
        
    }

    

    return(
        <form onSubmit={addJob}>
            <p>
                Company: 
                <Input value={company} onChange={(e) => setCompany(e.target.value)}/>
            </p>
            <p>
                Title:
                <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                Skills Needed:
                <Input value={skills} onChange={(e) => setSkills(e.target.value)}/>
            </p>
            <Button onClick={addJob} className="add-job-btn">Add</Button>
        </form>
    )
}

export default AddJobSection