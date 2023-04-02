import React from "react";
import { useState } from "react";

function AddJobSection() {

    const [company, setCompany] = useState("")
    const [title, setTitle] = useState("")
    const [skills, setSkills] = useState("")

    function addJob(e) {
        e.preventDefault()
        fetch("https://q89sglthn6.execute-api.us-east-1.amazonaws.com/items", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: "company",
                price: "title",
                name: "skills",
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    

    return(
        <form onSubmit={addJob}>
            <p>
                Company
                <input onChange={(e) => setCompany(e.target.value)}/>
            </p>
            <p>
                Title
                <input onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                Skills Needed
                <input onChange={(e) => setSkills(e.target.value)}/>
            </p>
            <button>Add</button>
        </form>
    )
}

export default AddJobSection