import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";

function Offer() {

    const [offerJobs, setOfferJobs] = useState(["offer1", "offer2"])

    return(
        <div>
            <div>
            <h1>Offer</h1>
                {offerJobs.map((job) => {
                    return(
                        <JobCard job={job} />
                    )
                })}
            </div>
        </div>
    )
}

export default Offer